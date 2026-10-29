// Zumurrud – serveur Express + Stripe Checkout (multi-langues, multi-devises)
require('dotenv').config();
const express = require('express');
const path = require('path');

if (!process.env.STRIPE_SECRET_KEY) {
  console.error('STRIPE_SECRET_KEY manquante : ajoutez votre clé Stripe dans les variables d’environnement.');
  process.exit(1);
}
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 4242;
const DOMAIN = (process.env.DOMAIN || `http://localhost:${PORT}`).replace(/\/$/, '');

// ===================== À MODIFIER =====================
// Prix d'un flacon et frais de port, par devise (montants normaux, pas en centimes).
// C'est la SEULE source des prix : le site les affiche à partir d'ici.
// Taux de change de fin octobre 2026, arrondis. Revérifiez EGP et TRY régulièrement (monnaies qui bougent vite).
const PRIX = {
  // Europe / Amérique du Nord
  EUR: { unit: 34,      shipping: 4.90 },
  CHF: { unit: 34,      shipping: 7.00 },
  GBP: { unit: 29,      shipping: 4.90 },
  USD: { unit: 39,      shipping: 13.90 },
  CAD: { unit: 52,      shipping: 18.00 },
  // Maghreb
  DZD: { unit: 5100,    shipping: 1800 },     // Algérie
  MAD: { unit: 365,     shipping: 129 },      // Maroc
  TND: { unit: 115,     shipping: 40 },       // Tunisie (3 décimales)
  // Machrek / Égypte
  EGP: { unit: 1990,    shipping: 690 },      // Égypte
  JOD: { unit: 27,      shipping: 9.5 },      // Jordanie, Palestine (3 décimales)
  LBP: { unit: 3400000, shipping: 1200000 },  // Liban
  ILS: { unit: 119,     shipping: 42 },       // Israël, Palestine
  TRY: { unit: 1899,    shipping: 660 },      // Turquie
  // Golfe
  SAR: { unit: 145,     shipping: 50 },       // Arabie saoudite
  AED: { unit: 139,     shipping: 49 },       // Émirats
  QAR: { unit: 139,     shipping: 49 },       // Qatar
  KWD: { unit: 11.9,    shipping: 4.1 },      // Koweït (3 décimales)
  BHD: { unit: 14.5,    shipping: 5 },        // Bahreïn (3 décimales)
  OMR: { unit: 14.9,    shipping: 5.2 },      // Oman (3 décimales)
  // Corne de l'Afrique
  DJF: { unit: 6800,    shipping: 2400 },     // Djibouti (0 décimale)
};
const DEVISE_PAR_DEFAUT = 'EUR';
const QTE_MAX = 10;
const LIVRAISON_OFFERTE_DES = 2; // flacons

// Pays où vous livrez (codes ISO à 2 lettres)
const PAYS_LIVRES = [
  // Europe
  'FR','BE','CH','LU','MC','DE','AT','NL','IT','ES','PT','IE','DK','SE','FI','NO',
  'PL','CZ','GR','LI','GB',
  // Amérique du Nord
  'US','CA',
  // MENA
  'DZ','MA','TN','LY','EG','MR','DJ',
  'SA','AE','QA','KW','BH','OM','JO','LB','IQ','PS','IL','TR',
];
// ======================================================

const LANGUES = ['fr', 'en', 'de', 'ar'];
// Langues supportées par la page de paiement Stripe ('auto' = langue du navigateur)
const STRIPE_LOCALE = { fr: 'fr', en: 'en', de: 'de', ar: 'auto' };

const TEXTES = {
  fr: { nom: 'Oud de l’Arabie – Parfum Vanille Ambiance 12 ml', desc: 'Parfum fait main par Zumurrud. Contient de l’alcool.', port: 'Livraison suivie', offert: 'Livraison offerte' },
  en: { nom: 'Oud de l’Arabie – Vanilla Ambiance perfume 12 ml', desc: 'Handmade perfume by Zumurrud. Contains alcohol.', port: 'Tracked shipping', offert: 'Free shipping' },
  de: { nom: 'Oud de l’Arabie – Parfum Vanille Ambiance 12 ml', desc: 'Handgemachtes Parfum von Zumurrud. Enthält Alkohol.', port: 'Versand mit Sendungsverfolgung', offert: 'Kostenloser Versand' },
  ar: { nom: 'Oud de l’Arabie – عطر فانيلا أمبيانس 12 مل', desc: 'عطر مصنوع يدويًا من زمرد. يحتوي على كحول.', port: 'شحن مع التتبع', offert: 'شحن مجاني' },
};

// Stripe attend les montants dans la plus petite unité de la devise
const ZERO_DECIMALE = ['DJF','JPY','KRW','XOF','XAF','KMF','GNF','RWF','VND','PYG','CLP','BIF','UGX'];
const TROIS_DECIMALES = ['BHD','JOD','KWD','OMR','TND'];
function enUniteMineure(montant, devise) {
  if (ZERO_DECIMALE.includes(devise)) return Math.round(montant);
  if (TROIS_DECIMALES.includes(devise)) return Math.round(montant * 100) * 10; // doit finir par 0
  return Math.round(montant * 100);
}

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Le site lit les prix ici
app.get('/api/prices', (req, res) => {
  res.json({ currencies: PRIX, maxQuantity: QTE_MAX, freeShippingFrom: LIVRAISON_OFFERTE_DES });
});

app.post('/create-checkout-session', async (req, res) => {
  try {
    let quantity = parseInt(req.body?.quantity, 10);
    if (!Number.isInteger(quantity) || quantity < 1) quantity = 1;
    if (quantity > QTE_MAX) quantity = QTE_MAX;

    const devise = PRIX[req.body?.currency] ? req.body.currency : DEVISE_PAR_DEFAUT;
    const lang = LANGUES.includes(req.body?.lang) ? req.body.lang : 'en';
    const tx = TEXTES[lang];
    const prix = PRIX[devise];
    const offerte = quantity >= LIVRAISON_OFFERTE_DES;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      locale: STRIPE_LOCALE[lang],
      line_items: [{
        quantity,
        price_data: {
          currency: devise.toLowerCase(),
          unit_amount: enUniteMineure(prix.unit, devise),
          product_data: {
            name: tx.nom,
            description: tx.desc,
            ...(DOMAIN.startsWith('https') ? { images: [`${DOMAIN}/oud-de-larabie.jpg`] } : {}),
          },
        },
      }],
      shipping_address_collection: { allowed_countries: PAYS_LIVRES },
      shipping_options: [{
        shipping_rate_data: {
          type: 'fixed_amount',
          display_name: offerte ? tx.offert : tx.port,
          fixed_amount: { amount: offerte ? 0 : enUniteMineure(prix.shipping, devise), currency: devise.toLowerCase() },
          delivery_estimate: {
            minimum: { unit: 'day', value: 7 },
            maximum: { unit: 'day', value: 10 },
          },
        },
      }],
      phone_number_collection: { enabled: true },
      success_url: `${DOMAIN}/merci.html?lang=${lang}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${DOMAIN}/annule.html?lang=${lang}`,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error('Erreur Stripe :', err.message);
    res.status(500).json({ error: 'checkout_failed' });
  }
});

app.listen(PORT, () => console.log(`Zumurrud en ligne sur ${DOMAIN}`));
