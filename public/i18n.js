// Traductions du site Zumurrud.
// Pour ajouter une langue : copiez un bloc (ex. "en"), traduisez-le, et ajoutez son nom dans LANG_NAMES.
const LANG_NAMES = { fr: "Français", en: "English", de: "Deutsch", ar: "العربية" };
const RTL = ["ar"];

const I18N = {
fr: {
  meta_title: "Oud de l’Arabie – Parfum Vanille Ambiance fait main | Zumurrud",
  meta_desc: "Oud de l’Arabie, parfum Vanille Ambiance préparé et rempli à la main en petits lots. Livraison en 10 jours.",
  nav_parfum: "Le parfum", nav_atelier: "L’atelier", nav_questions: "Questions", nav_order: "Acheter",
  lang_label: "Langue", currency_label: "Devise",
  hero_lede: "<strong>Oud de l’Arabie</strong>, notre parfum Vanille Ambiance. <em>Préparé chez moi, filtré et versé à la main, flacon par flacon.</em>",
  price_unit: "flacon de 12 ml", cta_hero: "Acheter maintenant", hero_note: "fait à la maison, en petits lots ✦",
  label_lot: "ZUMURRUD", label_date: "fait main,<br>Vanille Ambiance",
  alt_bottle: "Flacon octogonal Oud de l’Arabie en verre vert émeraude orné d’arabesques dorées, posé sur du velours vert devant des arches sculptées",
  band1: "Parfum Vanille Ambiance", band2: "Préparé à la main", band3: "Paiement sécurisé Stripe", band4: "Livraison en 10 jours",
  story_h: "Un parfum qui sent la maison de ma grand-mère",
  story_p1: "Zumurrud veut dire émeraude. C’est le nom que je donnais, enfant, au petit flacon vert posé sur sa commode, celui qu’elle ouvrait seulement pour les fêtes et les mariages.",
  story_p2: "Des années plus tard, j’ai voulu retrouver cette odeur. Pas une copie d’un grand parfum, mais un parfum chaud et vanillé, qui tient sur la peau toute la journée.",
  story_p3: "Je le prépare chez moi, en petites quantités, sans machine. Chaque lot est un peu différent du précédent, et c’est très bien comme ça.",
  story_quote: "« Une goutte sur le poignet, et toute la pièce sait que tu es arrivée. »",
  story_src: "Ce que disait ma grand-mère de son flacon vert",
  notes_h: "Vanille Ambiance, au fil de la journée",
  notes_intro: "Un parfum chaud et enveloppant. Voici comment il évolue sur la peau.",
  n1_when: "les premières minutes", n1_h: "Vanille douce", n1_p: "Une ouverture ronde et sucrée, tout de suite réconfortante.",
  n2_when: "après une heure", n2_h: "Ambre", n2_p: "Le cœur se réchauffe, plus profond et légèrement résineux.",
  n3_when: "jusqu’au soir", n3_h: "Oud", n3_p: "Le fond boisé qui donne son nom au flacon et reste sur les vêtements.",
  atelier_h: "De mon atelier à votre poignet", atelier_intro: "Pas d’usine, pas de stock caché. Voici comment naît chaque lot.",
  s1_h: "Le mélange", s1_p: "Les essences sont pesées une à une, puis mélangées à l’alcool de parfumerie.",
  s2_h: "Le repos", s2_p: "Le mélange repose plusieurs semaines à l’abri de la lumière, pour que les notes se marient.",
  s3_h: "Le remplissage", s3_p: "Chaque flacon est filtré, puis rempli à la main.",
  s4_h: "L’emballage", s4_p: "Chaque flacon est vérifié et emballé à la main, puis il part chez vous.",
  ritual_h: "Comment le porter", drop1: "poignets", drop2: "cou", drop3: "nuque",
  r1: "<strong>Appliquez sur les points chauds :</strong> poignets, cou et nuque. Une ou deux touches suffisent.",
  r2: "<strong>Ne frottez pas vos poignets.</strong> Laissez le parfum sécher seul, les notes dureront plus longtemps.",
  r3: "<strong>Lavez-vous les mains avant l’application</strong> pour garantir les meilleurs résultats.",
  r4: "<strong>Conservez le flacon dans un endroit frais et sec,</strong> à l’abri de la lumière.",
  faq_h: "Vos questions",
  q1: "Est-ce qu’il contient de l’alcool ?", a1: "Oui. Oud de l’Arabie est un parfum à base d’alcool de parfumerie, comme la plupart des parfums. C’est l’alcool qui diffuse les notes et les fait tenir sur la peau.",
  q2: "C’est pour les femmes ou pour les hommes ?", a2: "Pour tout le monde. L’oud, l’ambre et la vanille se portent depuis toujours par les hommes comme par les femmes.",
  q3: "Quels sont les délais de livraison ?", a3: "Comptez 10 jours pour recevoir votre colis, selon votre pays. Vous recevez un e-mail de confirmation dès le paiement.",
  q4: "Le paiement est-il sécurisé ?", a4: "Oui. Le paiement se fait sur la page sécurisée de Stripe. Je ne vois et ne stocke jamais vos informations bancaires.",
  q5: "Quelles sont les précautions d’emploi ?", a5: "Tenir hors de portée des enfants. Ne pas avaler. Lavez-vous les mains avant utilisation pour garantir les meilleurs résultats. Cessez l’utilisation en cas d’irritation ou d’éruption cutanée. Conserver dans un endroit frais et sec. Produit inflammable : tenir éloigné de la chaleur et des flammes. La liste des ingrédients et allergènes figure sur l’emballage.",
  q6: "Puis-je retourner mon flacon ?", a6: "Vous disposez de 14 jours après réception pour retourner un flacon non ouvert. Écrivez-moi et je vous explique la marche à suivre.",
  order_hand: "fait main, prêt à partir", order_h: "Commander Oud de l’Arabie",
  order_intro: "Parfum Vanille Ambiance, flacon en verre de 12 ml. Livraison en 10 jours, offerte dès deux flacons.",
  qty: "Quantité", qty_minus: "Retirer un flacon", qty_plus: "Ajouter un flacon",
  pay: "Payer avec Stripe", paying: "Redirection vers Stripe…",
  pay_error: "Le paiement n’a pas pu démarrer. Vérifiez votre connexion et réessayez.",
  order_fine: "Vous serez redirigé vers la page de paiement sécurisée de Stripe. Carte bancaire, Apple Pay et Google Pay acceptés.",
  footer: "Zumurrud, parfums faits main", legal: "Mentions légales", terms: "CGV",
  thanks_title: "Merci pour votre commande",
  thanks_p: "Votre paiement est confirmé et un e-mail récapitulatif vient de partir. Je prépare votre flacon : comptez environ 10 jours pour le recevoir.",
  thanks_hand: "emballé à la main, avec soin ✦", back: "Retour à la boutique",
  cancel_title: "Paiement annulé",
  cancel_p: "Aucun montant n’a été débité. Votre flacon vous attend toujours : vous pouvez reprendre la commande quand vous le souhaitez.",
  resume: "Reprendre ma commande",
  buy_fine: "Paiement sécurisé par Stripe, en un clic.",
  order_safety: "Contient de l’alcool. Inflammable. Tenir hors de portée des enfants. Ne pas avaler.",
  alt_atelier: "Illustration de l’atelier : balance, bécher, entonnoir, flacons verts en cours de remplissage et étiquettes"
},
en: {
  meta_title: "Oud de l’Arabie – Handmade Vanilla Ambiance perfume | Zumurrud",
  meta_desc: "Oud de l’Arabie, a Vanilla Ambiance perfume blended and filled by hand in small batches. Delivered in 10 days.",
  nav_parfum: "The scent", nav_atelier: "The workshop", nav_questions: "Questions", nav_order: "Buy",
  lang_label: "Language", currency_label: "Currency",
  hero_lede: "<strong>Oud de l’Arabie</strong>, our Vanilla Ambiance perfume. <em>Made at home, filtered and poured by hand, one bottle at a time.</em>",
  price_unit: "12 ml bottle", cta_hero: "Buy now", hero_note: "made at home, in small batches ✦",
  label_lot: "ZUMURRUD", label_date: "handmade,<br>Vanilla Ambiance",
  alt_bottle: "Octagonal Oud de l’Arabie bottle in emerald green glass with gold arabesques, on green velvet in front of carved arches",
  band1: "Vanilla Ambiance perfume", band2: "Made by hand", band3: "Secure Stripe payment", band4: "Delivered in 10 days",
  story_h: "A scent that smells like my grandmother’s house",
  story_p1: "Zumurrud means emerald. It’s what I called, as a child, the little green bottle on her dresser, the one she only opened for holidays and weddings.",
  story_p2: "Years later, I wanted to find that scent again. Not a copy of a famous perfume, but a warm, vanilla scent that lasts on the skin all day.",
  story_p3: "I make it at home, in small quantities, with no machines. Each batch is a little different from the last, and that’s how it should be.",
  story_quote: "“One drop on the wrist, and the whole room knows you’ve arrived.”",
  story_src: "What my grandmother used to say about her green bottle",
  notes_h: "Vanilla Ambiance, through the day",
  notes_intro: "A warm, enveloping scent. Here’s how it unfolds on the skin.",
  n1_when: "the first minutes", n1_h: "Soft vanilla", n1_p: "A round, sweet opening that feels instantly comforting.",
  n2_when: "after an hour", n2_h: "Amber", n2_p: "The heart warms up, deeper and slightly resinous.",
  n3_when: "until evening", n3_h: "Oud", n3_p: "The woody base that gives the bottle its name and stays on your clothes.",
  atelier_h: "From my workshop to your wrist", atelier_intro: "No factory, no hidden stock. Here’s how each batch comes to life.",
  s1_h: "The blend", s1_p: "The essences are weighed one by one, then blended with perfumer’s alcohol.",
  s2_h: "The rest", s2_p: "The blend rests for several weeks away from light, so the notes can come together.",
  s3_h: "The filling", s3_p: "Each bottle is filtered, then filled by hand.",
  s4_h: "The packing", s4_p: "Each bottle is checked and packed by hand, then it’s on its way to you.",
  ritual_h: "How to wear it", drop1: "wrists", drop2: "neck", drop3: "nape",
  r1: "<strong>Apply to pulse points:</strong> wrists, neck and nape. One or two touches are enough.",
  r2: "<strong>Don’t rub your wrists together.</strong> Let the perfume dry on its own and the notes will last longer.",
  r3: "<strong>Wash your hands before applying</strong> for the best results.",
  r4: "<strong>Store the bottle in a cool, dry place,</strong> away from light.",
  faq_h: "Your questions",
  q1: "Does it contain alcohol?", a1: "Yes. Oud de l’Arabie is made with perfumer’s alcohol, like most perfumes. The alcohol carries the notes and helps them last on the skin.",
  q2: "Is it for women or men?", a2: "For everyone. Oud, amber and vanilla have always been worn by men and women alike.",
  q3: "How long does delivery take?", a3: "Allow 10 days for your parcel to arrive, depending on your country. You’ll get a confirmation email as soon as you pay.",
  q4: "Is payment secure?", a4: "Yes. You pay on Stripe’s secure checkout page. I never see or store your card details.",
  q5: "What are the safety precautions?", a5: "Keep out of reach of children. Do not swallow. Wash your hands before use for the best results. Stop using if irritation or a rash appears. Store in a cool, dry place. Flammable: keep away from heat and flames. The full list of ingredients and allergens is on the packaging.",
  q6: "Can I return my bottle?", a6: "You have 14 days after delivery to return an unopened bottle. Email me and I’ll explain how.",
  order_hand: "handmade, ready to ship", order_h: "Order Oud de l’Arabie",
  order_intro: "Vanilla Ambiance perfume in a 12 ml glass bottle. Delivered in 10 days, free shipping from two bottles.",
  qty: "Quantity", qty_minus: "Remove a bottle", qty_plus: "Add a bottle",
  pay: "Pay with Stripe", paying: "Redirecting to Stripe…",
  pay_error: "Payment couldn’t start. Check your connection and try again.",
  order_fine: "You’ll be redirected to Stripe’s secure payment page. Cards, Apple Pay and Google Pay accepted.",
  footer: "Zumurrud, handmade perfumes", legal: "Legal notice", terms: "Terms of sale",
  thanks_title: "Thank you for your order",
  thanks_p: "Your payment is confirmed and a receipt is on its way to your inbox. I’m preparing your bottle: allow about 10 days for delivery.",
  thanks_hand: "packed by hand, with care ✦", back: "Back to the shop",
  cancel_title: "Payment cancelled",
  cancel_p: "You haven’t been charged. Your bottle is still waiting: you can pick up your order whenever you like.",
  resume: "Resume my order",
  buy_fine: "Secure payment with Stripe, in one click.",
  order_safety: "Contains alcohol. Flammable. Keep out of reach of children. Do not swallow.",
  alt_atelier: "Illustration of the workshop: scale, beaker, funnel, green bottles being filled and labels"
},
de: {
  meta_title: "Oud de l’Arabie – Handgemachtes Parfum Vanille Ambiance | Zumurrud",
  meta_desc: "Oud de l’Arabie, ein Parfum Vanille Ambiance, von Hand gemischt und abgefüllt. Lieferung in 10 Tagen.",
  nav_parfum: "Der Duft", nav_atelier: "Die Werkstatt", nav_questions: "Fragen", nav_order: "Kaufen",
  lang_label: "Sprache", currency_label: "Währung",
  hero_lede: "<strong>Oud de l’Arabie</strong>, unser Parfum Vanille Ambiance. <em>Zu Hause hergestellt, gefiltert und von Hand abgefüllt, Flakon für Flakon.</em>",
  price_unit: "Flakon mit 12 ml", cta_hero: "Jetzt kaufen", hero_note: "hausgemacht, in kleinen Mengen ✦",
  label_lot: "ZUMURRUD", label_date: "handgemacht,<br>Vanille Ambiance",
  alt_bottle: "Achteckiger Flakon Oud de l’Arabie aus smaragdgrünem Glas mit goldenen Arabesken, auf grünem Samt vor geschnitzten Bögen",
  band1: "Parfum Vanille Ambiance", band2: "Von Hand gemacht", band3: "Sichere Zahlung mit Stripe", band4: "Lieferung in 10 Tagen",
  story_h: "Ein Duft wie das Haus meiner Großmutter",
  story_p1: "Zumurrud bedeutet Smaragd. So nannte ich als Kind den kleinen grünen Flakon auf ihrer Kommode, den sie nur zu Festen und Hochzeiten öffnete.",
  story_p2: "Jahre später wollte ich diesen Duft wiederfinden. Keine Kopie eines berühmten Parfums, sondern einen warmen Vanilleduft, der den ganzen Tag auf der Haut hält.",
  story_p3: "Ich stelle ihn zu Hause her, in kleinen Mengen, ohne Maschinen. Jede Mischung ist ein wenig anders als die vorherige, und das ist gut so.",
  story_quote: "„Ein Tropfen aufs Handgelenk, und der ganze Raum weiß, dass du da bist.“",
  story_src: "Was meine Großmutter über ihren grünen Flakon sagte",
  notes_h: "Vanille Ambiance im Laufe des Tages",
  notes_intro: "Ein warmer, umhüllender Duft. So entfaltet er sich auf der Haut.",
  n1_when: "die ersten Minuten", n1_h: "Sanfte Vanille", n1_p: "Ein runder, süßer Auftakt, der sofort wohltut.",
  n2_when: "nach einer Stunde", n2_h: "Amber", n2_p: "Das Herz wird wärmer, tiefer und leicht harzig.",
  n3_when: "bis zum Abend", n3_h: "Oud", n3_p: "Die holzige Basis, die dem Flakon seinen Namen gibt und auf der Kleidung bleibt.",
  atelier_h: "Aus meiner Werkstatt an Ihr Handgelenk", atelier_intro: "Keine Fabrik, kein verstecktes Lager. So entsteht jeder Flakon.",
  s1_h: "Die Mischung", s1_p: "Die Essenzen werden einzeln abgewogen und mit Parfümalkohol gemischt.",
  s2_h: "Die Ruhezeit", s2_p: "Die Mischung ruht mehrere Wochen lichtgeschützt, damit sich die Noten verbinden.",
  s3_h: "Die Abfüllung", s3_p: "Jeder Flakon wird gefiltert und dann von Hand gefüllt.",
  s4_h: "Die Verpackung", s4_p: "Jeder Flakon wird geprüft, von Hand verpackt und dann zu Ihnen geschickt.",
  ritual_h: "So tragen Sie ihn", drop1: "Handgelenke", drop2: "Hals", drop3: "Nacken",
  r1: "<strong>Auf die Pulspunkte auftragen:</strong> Handgelenke, Hals und Nacken. Ein oder zwei Tupfer genügen.",
  r2: "<strong>Reiben Sie die Handgelenke nicht aneinander.</strong> Lassen Sie das Parfum von selbst trocknen, dann halten die Noten länger.",
  r3: "<strong>Waschen Sie sich vor dem Auftragen die Hände</strong>, für das beste Ergebnis.",
  r4: "<strong>Bewahren Sie den Flakon kühl und trocken auf,</strong> vor Licht geschützt.",
  faq_h: "Ihre Fragen",
  q1: "Enthält es Alkohol?", a1: "Ja. Oud de l’Arabie wird wie die meisten Parfums mit Parfümalkohol hergestellt. Der Alkohol trägt die Duftnoten und lässt sie auf der Haut halten.",
  q2: "Ist er für Frauen oder für Männer?", a2: "Für alle. Oud, Amber und Vanille werden seit jeher von Männern wie Frauen getragen.",
  q3: "Wie lange dauert der Versand?", a3: "Rechnen Sie je nach Land mit 10 Tagen bis zur Lieferung. Nach der Zahlung erhalten Sie sofort eine Bestätigungs-E-Mail.",
  q4: "Ist die Zahlung sicher?", a4: "Ja. Sie bezahlen auf der sicheren Zahlungsseite von Stripe. Ich sehe und speichere Ihre Bankdaten nie.",
  q5: "Welche Vorsichtsmaßnahmen gibt es?", a5: "Außerhalb der Reichweite von Kindern aufbewahren. Nicht verschlucken. Für das beste Ergebnis vor der Anwendung die Hände waschen. Bei Reizungen oder Hautausschlag die Anwendung beenden. Kühl und trocken lagern. Entzündlich: von Hitze und Flammen fernhalten. Die vollständige Liste der Inhaltsstoffe und Allergene steht auf der Verpackung.",
  q6: "Kann ich meinen Flakon zurückgeben?", a6: "Sie können einen ungeöffneten Flakon innerhalb von 14 Tagen nach Erhalt zurücksenden. Schreiben Sie mir, und ich erkläre Ihnen das Vorgehen.",
  order_hand: "handgemacht, versandbereit", order_h: "Oud de l’Arabie bestellen",
  order_intro: "Parfum Vanille Ambiance im 12-ml-Glasflakon. Lieferung in 10 Tagen, kostenlos ab zwei Flakons.",
  qty: "Menge", qty_minus: "Einen Flakon entfernen", qty_plus: "Einen Flakon hinzufügen",
  pay: "Mit Stripe bezahlen", paying: "Weiterleitung zu Stripe…",
  pay_error: "Die Zahlung konnte nicht gestartet werden. Prüfen Sie Ihre Verbindung und versuchen Sie es erneut.",
  order_fine: "Sie werden zur sicheren Zahlungsseite von Stripe weitergeleitet. Karte, Apple Pay und Google Pay werden akzeptiert.",
  footer: "Zumurrud, handgemachte Düfte", legal: "Impressum", terms: "AGB",
  thanks_title: "Danke für Ihre Bestellung",
  thanks_p: "Ihre Zahlung ist bestätigt und eine Bestätigungs-E-Mail ist unterwegs. Ich bereite Ihren Flakon vor: Rechnen Sie mit etwa 10 Tagen bis zur Lieferung.",
  thanks_hand: "von Hand und mit Sorgfalt verpackt ✦", back: "Zurück zum Shop",
  cancel_title: "Zahlung abgebrochen",
  cancel_p: "Es wurde nichts abgebucht. Ihr Flakon wartet noch auf Sie: Sie können die Bestellung jederzeit fortsetzen.",
  resume: "Bestellung fortsetzen",
  buy_fine: "Sichere Zahlung mit Stripe, mit einem Klick.",
  order_safety: "Enthält Alkohol. Entzündlich. Außerhalb der Reichweite von Kindern aufbewahren. Nicht verschlucken.",
  alt_atelier: "Illustration der Werkstatt: Waage, Becherglas, Trichter, grüne Flakons beim Abfüllen und Etiketten"
},
ar: {
  meta_title: "عود العرب – عطر فانيلا أمبيانس مصنوع يدويًا | زمرد",
  meta_desc: "عود العرب، عطر فانيلا أمبيانس يُحضَّر ويُعبَّأ يدويًا بدفعات صغيرة. التوصيل خلال 10 أيام.",
  nav_parfum: "العطر", nav_atelier: "الورشة", nav_questions: "أسئلة", nav_order: "اشترِ",
  lang_label: "اللغة", currency_label: "العملة",
  hero_lede: "<strong>Oud de l’Arabie</strong>، عطرنا فانيلا أمبيانس. <em>يُحضَّر في البيت، ويُصفّى ويُعبَّأ يدويًا قارورةً قارورة.</em>",
  price_unit: "قارورة 12 مل", cta_hero: "اشترِ الآن", hero_note: "صُنع في البيت، بدفعات صغيرة ✦",
  label_lot: "زمرد", label_date: "صُنع يدويًا،<br>فانيلا أمبيانس",
  alt_bottle: "قارورة عود العرب المثمّنة من زجاج أخضر زمردي بنقوش ذهبية، على قماش مخملي أخضر أمام أقواس منحوتة",
  band1: "عطر فانيلا أمبيانس", band2: "مصنوع يدويًا", band3: "دفع آمن عبر Stripe", band4: "التوصيل خلال 10 أيام",
  story_h: "عطر برائحة بيت جدتي",
  story_p1: "زمرد اسم الحجر الكريم الأخضر. هو الاسم الذي كنت أطلقه وأنا صغير على القارورة الخضراء الصغيرة فوق خزانة جدتي، التي لم تكن تفتحها إلا في الأعياد والأعراس.",
  story_p2: "بعد سنوات، أردت أن أستعيد تلك الرائحة. لا نسخة عن عطر مشهور، بل عطر دافئ بالفانيلا يبقى على البشرة طوال اليوم.",
  story_p3: "أحضّره في بيتي، بكميات صغيرة، بلا آلات. كل دفعة تختلف قليلًا عن سابقتها، وهذا ما يجعلها مميزة.",
  story_quote: "« قطرة على المعصم، فتعرف الغرفة كلها أنكِ وصلتِ. »",
  story_src: "ما كانت تقوله جدتي عن قارورتها الخضراء",
  notes_h: "فانيلا أمبيانس على مدار اليوم",
  notes_intro: "عطر دافئ يغمرك بالراحة. إليكم كيف يتطور على البشرة.",
  n1_when: "الدقائق الأولى", n1_h: "فانيلا ناعمة", n1_p: "افتتاحية مستديرة وحلوة تبعث الراحة فورًا.",
  n2_when: "بعد ساعة", n2_h: "العنبر", n2_p: "يدفأ القلب، فيصبح أعمق مع لمسة راتنجية خفيفة.",
  n3_when: "حتى المساء", n3_h: "العود", n3_p: "القاعدة الخشبية التي منحت القارورة اسمها وتبقى على الملابس.",
  atelier_h: "من ورشتي إلى معصمك", atelier_intro: "لا مصنع ولا مخزون مخفي. هكذا تولد كل دفعة.",
  s1_h: "المزج", s1_p: "تُوزن الزيوت العطرية واحدة تلو الأخرى، ثم تُمزج بكحول العطور.",
  s2_h: "الراحة", s2_p: "يرتاح المزيج عدة أسابيع بعيدًا عن الضوء لتتآلف النوتات.",
  s3_h: "التعبئة", s3_p: "تُصفّى كل قارورة ثم تُملأ يدويًا.",
  s4_h: "التغليف", s4_p: "تُفحص كل قارورة وتُغلَّف يدويًا، ثم تنطلق إليكم.",
  ritual_h: "طريقة الاستعمال", drop1: "المعصمان", drop2: "العنق", drop3: "مؤخرة العنق",
  r1: "<strong>ضعوه على نقاط النبض:</strong> المعصمين والعنق ومؤخرة العنق. لمسة أو لمستان تكفيان.",
  r2: "<strong>لا تفركوا المعصمين.</strong> اتركوا العطر يجف وحده، فتدوم النوتات أطول.",
  r3: "<strong>اغسلوا أيديكم قبل الاستعمال</strong> للحصول على أفضل النتائج.",
  r4: "<strong>احفظوا القارورة في مكان بارد وجاف،</strong> بعيدًا عن الضوء.",
  faq_h: "أسئلتكم",
  q1: "هل يحتوي على كحول؟", a1: "نعم. عود العرب مصنوع بكحول العطور، مثل معظم العطور. الكحول هو ما ينشر النوتات ويجعلها تدوم على البشرة.",
  q2: "هل هو للنساء أم للرجال؟", a2: "للجميع. العود والعنبر والفانيلا يتعطر بها الرجال والنساء منذ القدم.",
  q3: "ما مدة التوصيل؟", a3: "احسبوا 10 أيام لوصول الطرد حسب بلدكم. يصلكم بريد تأكيد فور الدفع.",
  q4: "هل الدفع آمن؟", a4: "نعم. يتم الدفع على صفحة Stripe الآمنة. لا أرى بياناتكم البنكية ولا أحفظها أبدًا.",
  q5: "ما هي احتياطات الاستعمال؟", a5: "يُحفظ بعيدًا عن متناول الأطفال. لا يُبلع. اغسلوا أيديكم قبل الاستعمال للحصول على أفضل النتائج. أوقفوا الاستعمال عند ظهور تهيّج أو طفح جلدي. يُحفظ في مكان بارد وجاف. مادة قابلة للاشتعال: يُحفظ بعيدًا عن الحرارة واللهب. القائمة الكاملة للمكونات ومسببات الحساسية مكتوبة على العلبة.",
  q6: "هل يمكنني إرجاع القارورة؟", a6: "لديكم 14 يومًا بعد الاستلام لإرجاع قارورة غير مفتوحة. راسلوني وسأشرح لكم الخطوات.",
  order_hand: "مصنوع يدويًا، جاهز للشحن", order_h: "اطلب عود العرب",
  order_intro: "عطر فانيلا أمبيانس في قارورة زجاجية 12 مل. التوصيل خلال 10 أيام، ومجاني ابتداءً من قارورتين.",
  qty: "الكمية", qty_minus: "إزالة قارورة", qty_plus: "إضافة قارورة",
  pay: "الدفع عبر Stripe", paying: "جارٍ التحويل إلى Stripe…",
  pay_error: "تعذّر بدء الدفع. تحققوا من اتصالكم وأعيدوا المحاولة.",
  order_fine: "ستُحوَّلون إلى صفحة الدفع الآمنة لـ Stripe. نقبل البطاقات البنكية وApple Pay وGoogle Pay.",
  footer: "زمرد، عطور مصنوعة يدويًا", legal: "الإشعارات القانونية", terms: "شروط البيع",
  thanks_title: "شكرًا على طلبكم",
  thanks_p: "تم تأكيد الدفع وأُرسل إليكم بريد بالتفاصيل. أحضّر قارورتكم: احسبوا نحو 10 أيام للتوصيل.",
  thanks_hand: "مغلّفة يدويًا بعناية ✦", back: "العودة إلى المتجر",
  cancel_title: "تم إلغاء الدفع",
  cancel_p: "لم يُخصم أي مبلغ. قارورتكم ما زالت بانتظاركم، يمكنكم إكمال الطلب متى شئتم.",
  resume: "إكمال طلبي",
  buy_fine: "دفع آمن عبر Stripe بنقرة واحدة.",
  order_safety: "يحتوي على كحول. قابل للاشتعال. يُحفظ بعيدًا عن متناول الأطفال. لا يُبلع.",
  alt_atelier: "رسم للورشة: ميزان، كأس قياس، قمع، قوارير خضراء قيد التعبئة وملصقات"
}
};

// --- Détection et application de la langue (partagé par toutes les pages) ---
function detectLang() {
  try {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (fromUrl && I18N[fromUrl]) return fromUrl;
    const saved = localStorage.getItem('zumurrud_lang');
    if (saved && I18N[saved]) return saved;
  } catch (e) {}
  for (const l of (navigator.languages || [navigator.language || 'en'])) {
    const code = l.toLowerCase().split('-')[0];
    if (I18N[code]) return code;
  }
  return 'en';
}

function applyLang(lang) {
  const t = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = RTL.includes(lang) ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n]; if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const v = t[el.dataset.i18nAria]; if (v !== undefined) el.setAttribute('aria-label', v);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const v = t[el.dataset.i18nAlt]; if (v !== undefined) el.alt = v;
  });
  const titleKey = document.documentElement.dataset.titleKey || 'meta_title';
  if (t[titleKey]) document.title = t[titleKey] + (titleKey === 'meta_title' ? '' : ' – Zumurrud');
  const desc = document.querySelector('meta[name="description"]');
  if (desc && t.meta_desc) desc.content = t.meta_desc;
  try { localStorage.setItem('zumurrud_lang', lang); } catch (e) {}
  return t;
}
