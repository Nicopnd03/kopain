# Kopain · étude de cas

Concept d'application mobile pour le sport amateur et loisir. Document de travail, novembre 2026.

## En bref

Kopain est commercialisable à condition d'être lancé de façon étroite : une zone, deux sports, un usage utile dès le premier jour. Le marché existe (17,4 millions de licences sportives en France en 2025) et aucun acteur ne relie aujourd'hui le public, les joueurs et les clubs amateurs.

Trois conditions décident du succès :

- **Une utilité immédiate, même seul.** La carte montre des matchs dès l'installation, sans attendre que des amis s'inscrivent.
- **De la densité avant de l'étendue.** 5 000 utilisateurs dans un quartier valent mieux que 50 000 éparpillés en France.
- **Des revenus qui ne reposent pas sur les clubs.** Les clubs amateurs ont peu de budget : ils apportent le contenu, les joueurs et les sponsors apportent le revenu.

## Concept et positionnement

Kopain est la carte vivante du sport amateur : ce qui se joue près de chez soi, avec qui jouer, et quel club supporter.

| Verbe | Ce que fait l'utilisateur | Pour qui |
| --- | --- | --- |
| Voir | Repère sur une carte les matchs, tournois et initiations amateurs autour de lui | Habitants, familles, curieux |
| Jouer | Trouve un partenaire de footing ou le 4e joueur de padel en trois gestes | Pratiquants loisir, avec ou sans club |
| Supporter | Suit son club, réagit aux résultats, chambre le club voisin, parie en monnaie fictive | Licenciés, parents, anciens joueurs |

Les outils existants parlent à l'intérieur du club (convocations, cotisations) ou à un seul sport. Kopain parle à l'extérieur, tous sports confondus, et part de la géolocalisation plutôt que du championnat.

Trois profils coexistent, avec chacun sa carte à collectionner : **joueur licencié**, **pratiquant loisir** et **supporter**. Tous peuvent administrer une page club, chercher un joueur, chambrer et parier en kops.

## Marché et concurrence

| Repère | Chiffre | Source |
| --- | --- | --- |
| Licences sportives en France, 2025 | 17,4 millions (+1,7 % sur un an) | [INJEP](https://patrickbayeux.com/wp-content/uploads/2026/08/2608-Licences-sportives.pdf) |
| Football | 2,37 millions de licences | [INJEP](https://patrickbayeux.com/wp-content/uploads/2026/08/2608-Licences-sportives.pdf) |
| Tennis et padel | 1,23 million de licences | [INJEP](https://patrickbayeux.com/wp-content/uploads/2026/08/2608-Licences-sportives.pdf) |
| Basket | 631 000 licences | [INJEP](https://patrickbayeux.com/wp-content/uploads/2026/08/2608-Licences-sportives.pdf) |
| Padel, pratiquants en France | 850 000, sur 4 520 pistes (+41 % en un an) | [Padel Magazine](https://padel-magazine.co.uk/padel-en-france-850-000-pratiquants-4-520-pistes-la-croissance-change-dechelle/) |
| Strava, utilisateurs actifs mensuels | 50 millions en 2025 | [TechCrunch](https://techcrunch.com/2025/10/12/strava-eyes-ipo-as-gen-z-trades-dating-apps-for-running-clubs/) |
| Strava, revenus des achats intégrés | Plus de 184 M$ en 2025 | [AppMagic](https://appmagic.rocks/blog/strava-growth-story) |

| Acteur | Ce qu'il fait bien | Ce qu'il laisse libre |
| --- | --- | --- |
| [Score'n'co](https://scorenco.com/) | Résultats, classements et live des clubs amateurs | La carte des événements pour le grand public, la recherche de partenaires |
| [SportEasy](https://www.frenchweb.fr/sporteasy-leve-5-millions-deuros-aupres-de-seventure-partners-et-macif/424545) | Gestion interne d'équipe : convocations, présences, cotisations | Tout ce qui est tourné vers l'extérieur du club |
| [Playtomic](https://www.sgieurope.com/consumer/padel-set-for-17-annual-growth-through-2027-says-playtomic/115788.article) | Réservation de terrains de padel | Les autres sports, les clubs associatifs |
| [Strava](https://en.wikipedia.org/wiki/Strava) | Réseau social de l'endurance individuelle | Les sports collectifs et de raquette, la vie de club locale |
| Groupes WhatsApp et Facebook | Gratuits, déjà installés | La découverte : impossible de trouver un groupe qu'on ne connaît pas |

L'espace libre est la couche publique et locale : voir ce qui se joue autour de soi et s'y joindre, quel que soit le sport. Plusieurs apps de recherche de partenaires ont échoué faute de densité : la carte doit être remplie par les clubs avant d'ouvrir aux joueurs.

## Produit

Cinq onglets : Matchs, Jouer, Créer, Kop (le fil) et Moi. Chaque action clé se fait en trois gestes au plus.

| Fonctionnalité | Rôle |
| --- | --- |
| Carte « ce soir, ce week-end » | Matchs, tournois et initiations autour de soi, scores en direct |
| « Il manque un joueur » | Annonce envoyée aux joueurs du bon niveau dans un rayon de quelques kilomètres |
| Partenaires d'entraînement | Footing, vélo, renforcement : on propose un créneau, d'autres le rejoignent |
| Page club | Carte du club, actualités, classement, recrutement, partenaires locaux |
| Carte joueur évolutive | Du bronze aux cartes spéciales, notes votées par les coéquipiers, propre à chaque profil |
| Paris en kops et chambrage | Monnaie fictive, défis entre amis, piques choisies dans une liste |
| Vote du joueur du match | Par QR code, sans compte : fait entrer parents et amis |
| Trophées et passeport sport | Récompensent l'assiduité et la découverte de nouveaux sports |

## Modèle économique

L'app est gratuite. Voir, jouer et publier le restent : c'est ce qui remplit la carte.

| Source | Qui paie | Prix proposé | Ce qui est vendu |
| --- | --- | --- | --- |
| Kopain+ | Pratiquants assidus | 4,99 € par mois ou 34,99 € par an | Alertes prioritaires, filtres par niveau, statistiques, tag sur la carte joueur |
| Club Pro | Clubs structurés | 19 € par mois ou 190 € par an | Mise en avant, outils de recrutement, statistiques d'audience, espaces sponsors |
| Commission | Participants | 5 % du montant | Inscriptions aux tournois et stages, billetterie, cagnottes |
| Sponsoring local | Commerces et marques | Du forfait local au partenariat national | « Match présenté par », défis sponsorisés |

L'abonnement n'achète jamais une meilleure note ou un palier de carte : une carte qui s'achète perd sa valeur aux yeux des autres joueurs.

## Projections sur 3 ans

Scénario de travail : toutes les valeurs sont des hypothèses, à tester sur le terrain.

| Hypothèse | Année 1 | Année 2 | Année 3 |
| --- | --- | --- | --- |
| Périmètre | Paris nord-ouest, 2 sports | 5 métropoles, 5 sports | France, 8 sports |
| Utilisateurs actifs mensuels, moyenne de l'année | 12 500 | 87 500 | 375 000 |
| Part d'abonnés Kopain+ (30 € nets par an) | 1,5 % | 2,5 % | 3 % |
| Clubs actifs, moyenne de l'année | 150 | 1 400 | 5 250 |
| Part de clubs en Club Pro (190 € par an) | 10 % | 12 % | 15 % |
| Paiements par utilisateur actif et par an | 6 € | 10 € | 14 € |

| En euros | Année 1 | Année 2 | Année 3 |
| --- | --- | --- | --- |
| Kopain+ | 5 625 | 65 625 | 337 500 |
| Club Pro | 2 850 | 31 920 | 149 625 |
| Commissions (5 %) | 3 750 | 43 750 | 262 500 |
| Sponsoring local | 10 000 | 120 000 | 500 000 |
| **Revenus** | **22 225** | **261 295** | **1 249 625** |
| Coûts (équipe, technique, marketing) | 250 000 | 900 000 | 2 200 000 |
| **Résultat** | **−227 775** | **−638 705** | **−950 375** |

Le besoin de financement est d'environ 2 M€ sur trois ans. La variable décisive est la rétention : sous 30 % de retour à un mois, aucune ligne de ce tableau ne tient.

## Plan de lancement

| Phase | Période | Périmètre | Critère pour passer à la suivante |
| --- | --- | --- | --- |
| 0. Validation sans code | Mois 0 à 3 | Communauté WhatsApp et Instagram, page d'attente, entretiens | 300 inscrits, 10 clubs prêts à publier |
| 1. Pilote | Mois 3 à 9 | Paris 17e et 18e, Levallois, Clichy ; basket et football | 5 000 utilisateurs actifs, 50 clubs, 30 % de retour à un mois |
| 2. Île-de-France et une deuxième ville | Mois 9 à 18 | Ajout du padel, du handball et de la course | 60 % des annonces « joueur manquant » pourvues |
| 3. National | Mois 18 à 36 | 8 sports, partenariats avec des comités départementaux | Plus de 100 000 € de revenus récurrents par mois |

## Moteur de viralité

La viralité de Strava est construite dans le produit : chaque usage normal expose l'app à une nouvelle personne. Kopain transpose ce mécanisme au match.

1. **Défi entre amis** : on mise des kops sur un match et on envoie le défi par message ; pour le relever, il faut ouvrir l'app.
2. **Chambrage partagé** : la pique part en image dans le groupe du club adverse.
3. **Carte de résultat automatique** : à la fin du match, chaque joueur reçoit sa story prête à publier, avec sa propre performance.
4. **Vote sans compte** : les spectateurs votent par QR code, puis reçoivent le résultat et l'invitation.
5. **Invitation d'équipe** : un lien pour tout le vestiaire, un bonus de kops quand l'équipe est complète.
6. **Résumé du week-end** : un rendez-vous fixe le dimanche soir, à partager.

Cibles pour le pilote : coefficient viral supérieur à 0,5, moins d'une minute avant le premier match vu, un résultat sur trois partagé hors de l'app.

## Acquisition

- **Stores (ASO)** : titre « Kopain : sport amateur près de toi », mots-clés d'intention (partenaire padel, joueur manquant, match amateur).
- **Référencement naturel** : une page web publique par club, par match et par annonce, avec données structurées d'événement sportif.
- **Publicité** : requêtes d'intention forte et ciblage local à 5 km des clubs partenaires, plafonnée tant que la rétention n'est pas prouvée.
- **Relais** : capitaines ambassadeurs, comités départementaux, mairies.

## Risques

| Risque | Parade |
| --- | --- |
| Démarrage à froid | Remplir la carte avec les clubs avant d'ouvrir au public, rester sur une petite zone |
| Accès aux calendriers des fédérations | Saisie par les clubs aidée par l'IA, accord avec un comité, avis juridique |
| Dérapages du chambrage, présence de mineurs | Piques prédéfinies sans texte libre, signalement en un geste, comptes mineurs restreints |
| Paris requalifiés en jeux d'argent | Kops jamais achetables ni convertibles en argent ou en lots, validation juridique avant lancement |
| Sécurité des rencontres entre inconnus | Profils vérifiés, score de fiabilité, rendez-vous dans des lieux sportifs publics |

---

Les chiffres de marché proviennent des sources citées. Les prix, projections et objectifs sont des hypothèses de travail. Clubs, joueurs et scores du prototype sont fictifs.
