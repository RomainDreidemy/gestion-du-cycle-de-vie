# Title

## Définition des méthodes de gestion des branches

### Branches
Branche de production: `main`
Branche de développement: `dev`

Pour une feature créer une branche avec le patern suivant: `feat/<nom de la feature>`

Pour une correction créer une branche avec le patern suivant: `fix/<nom de la correction>`

pour une correction directement en production créer une branche avec le patern suivant: `hotfix/<nom de la correction>`

### Ajouter du code sur dev

Pour ajouter du code sur la branche de développement, 
il faut créer une pull request sur la branche `dev`.

Cette pull request doit:
- être validée par au moins un autre membre de l'équipe
- avoir toutes les conversations résolues
- avoir tous les checks en success
- avoir un déploiment en success

### Ajouter du code sur main

Il est impossible de pousser du code directement sur cette branche.
Il est impossible de pousser en force du code sur cette branche.

Pour ajouter du code sur la branche de production, il faut créer une pull request de `dev` vers `main`.
Une pull request non valide ne peut pas être mergée.

Cette pull request doit:
- être validée par au moins un autre membre de l'équipe sur le dernier commit
- avoir toutes les conversations résolues
- avoir tous les checks en success
- avoir un déploiment en success
