# Title

## Définition des méthodes de gestion des branches

### Branches
Branche de production: `main`
Branche de développement: `dev`

Pour une feature créer une branche avec le patern suivant: `feat/<nom de la feature>`

Pour une correction créer une branche avec le patern suivant: `fix/<nom de la correction>`

pour une correction directement en production créer une branche avec le patern suivant: `hotfix/<nom de la correction>`

### Ajouter du code sur dev

Pour ajouter du code sur la branche de développement, il faut créer une pull request sur la branche `dev`.

### Ajouter du code sur main

Pour ajouter du code sur la branche de production, il faut créer une pull request de `dev` vers `main`.

### Pour merger une pull request

Pour merger une pull request, il faut que la pull request soit validée par au moins un autre membre de l'équipe.

Toutes les conversations sur la pull request doit être résolues.

Tous les checks doivent passer.
Le déploiment doit être en success.
