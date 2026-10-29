// Zumurrud – serveur Express + Stripe Checkout
require('dotenv').config();
const express = require('express');
const path = require('path');
if (!process.env.STRIPE_SECRET_KEY) {
  console.error('STRIPE_SECRET_KEY manquante : copiez .env.example en .env et ajoutez votre clé Stripe.');
  process.exit(1);
}
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 4242;
const DOMAIN = process.env.DOMAIN || `http://localhost:${PORT}`;

// Produit : modifiez ici le prix (en centimes) et le nom
const PRODUIT = {
  nom: 'Zumurrud – Huile de parfum 12 ml',
  description: 'Huile de parfum faite à la main : oud, rose de Damas, ambre.',
  prixCentimes: 3400, // 34,00 €
  devise: 'eur',
  image: `${DOMAIN}/zumurrud.png`,
};
const QTE_MAX = 10;
const LIVRAISON_OFFERTE_DES = 2; // flacons

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/create-checkout-session', async (req, res) => {
  try {
    let quantity = parseInt(req.body?.quantity, 10);
    if (!Number.isInteger(quantity) || quantity < 1) quantity = 1;
    if (quantity > QTE_MAX) quantity = QTE_MAX;

    const livraisonOfferte = quantity >= LIVRAISON_OFFERTE_DES;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      locale: 'fr',
      line_items: [{
        quantity,
        price_data: {
          currency: PRODUIT.devise,
          unit_amount: PRODUIT.prixCentimes,
          product_data: {
            name: PRODUIT.nom,
            description: PRODUIT.description,
            // Stripe ne peut afficher l'image que si le site est en ligne (pas en localhost)
            ...(DOMAIN.startsWith('https') ? { images: [PRODUIT.image] } : {}),
          },
        },
      }],
      shipping_address_collection: {
        allowed_countries: ['FR', 'BE', 'CH', 'LU', 'DE', 'ES', 'IT', 'NL', 'PT', 'MC'],
      },
      shipping_options: [{
        shipping_rate_data: {
          type: 'fixed_amount',
          display_name: livraisonOfferte ? 'Livraison offerte' : 'Livraison suivie',
          fixed_amount: { amount: livraisonOfferte ? 0 : 490, currency: 'eur' },
          delivery_estimate: {
            minimum: { unit: 'business_day', value: 2 },
            maximum: { unit: 'business_day', value: 7 },
          },
        },
      }],
      phone_number_collection: { enabled: true },
      success_url: `${DOMAIN}/merci.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${DOMAIN}/annule.html`,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error('Erreur Stripe :', err.message);
    res.status(500).json({ error: 'Impossible de créer la session de paiement.' });
  }
});

app.listen(PORT, () => console.log(`Zumurrud en ligne sur ${DOMAIN}`));
