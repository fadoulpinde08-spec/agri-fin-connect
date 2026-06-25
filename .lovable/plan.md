
# NafaPay — Landing page de validation

*Nafa* (« profit, bénéfice » en dioula) — une promesse claire pour l'agriculteur : chaque récolte doit générer du profit, en sécurité.

Objectif : tester l'intérêt pour une solution de **paiement mobile dédiée aux agriculteurs burkinabè** (réception du paiement de leurs récoltes, paiement des intrants, épargne simple), et collecter une liste de pré-inscrits.

## Le problème ciblé

- L'agriculteur burkinabè vend sa récolte en cash → risque de vol, perte, sous-paiement
- L'acheteur paie en liquide ou via mobile money mal adapté (frais, pas de preuve d'achat, pas de traçabilité par culture)
- Pas d'historique financier → impossible d'accéder au crédit campagne suivante
- Besoin d'une UX simple, en français + langues locales (mooré, dioula)

## Proposition de valeur

1. **Recevez vos paiements en sécurité** — QR code + USSD, fonctionne sans smartphone
2. **Payez vos intrants directement** — semences, engrais, équipement, sans liquide
3. **Construisez votre historique** — chaque vente compte pour accéder au crédit campagne
4. **Compatible Orange Money, Moov Money, Coris Money** — un seul compte, tous les réseaux

## Sections de la landing page

1. **Hero** — accroche en français + mot d'accueil en mooré/dioula, photo d'un producteur, CTA « Rejoindre la liste d'attente »
2. **Le problème** — 3 chiffres clés sur l'agriculture et l'inclusion financière au Burkina
3. **Comment ça marche** — 3 étapes : Vendre → Recevoir → Réinvestir
4. **Pour qui** — Agriculteurs · Coopératives · Acheteurs/Offtakers
5. **Cultures couvertes** — coton, sorgho, mil, maïs, sésame, niébé, karité
6. **Pourquoi le Burkina** — ancrage local, partenariats visés
7. **FAQ** — frais, sécurité, smartphone requis ou non, langues, agents de proximité
8. **Formulaire de pré-inscription** — Nom · Téléphone · Province · Rôle · Cultures principales
9. **Footer** — contact, mentions

## Direction visuelle

- **Palette terre sahélienne** : ocre brûlé `#C0633A`, terre cuite `#8B3A1F`, jaune mil `#E8B84A`, vert sahel `#5C7A3A`, sable `#F5EBD8`, encre `#1F1A14`
- **Typo** : titres en *Fraunces* (serif chaleureux) ; corps en *Inter* (lisible)
- **Style** : photographique + motifs inspirés du *Faso Dan Fani* (tissage traditionnel) en séparateurs subtils
- **Ton** : direct, respectueux, jamais condescendant envers le producteur
- **Multilingue léger** : mots-clés doublés en mooré / dioula

## Aspects techniques

- TanStack Start, routes : `/` (landing), `/merci` (confirmation)
- Formulaire stocké via **Lovable Cloud** (table `waitlist`, RLS : insert public, lecture admin uniquement)
- Composants shadcn existants
- SEO : title, meta description, OG image, JSON-LD Organization, lang="fr"
- Responsive mobile-first
- 2–3 images générées (hero producteur, scène de marché, motif décoratif)

## Ce que je vais livrer

1. Activation Lovable Cloud + table `waitlist` avec policies
2. Page d'accueil complète
3. Page `/merci` de confirmation
4. Server function de soumission avec validation Zod
5. Métadonnées SEO + OG image
6. Images générées

## À confirmer

- D'accord pour activer Lovable Cloud (sinon le formulaire ne stockera rien) ?
- Une couleur, un visuel ou un détail à imposer dès maintenant ?
