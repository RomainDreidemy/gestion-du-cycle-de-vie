# Title

## Définition des méthodes de gestion des branches

### Branches
![Gestion du cycle de vie.jpg](documentions%2Fimages%2FGestion%20du%20cycle%20de%20vie.jpg)

La branche `main` est notre "source de vérité" et aussi le reflet de la production.

La branche `dev` va accueillir les différentes fonctionnalités et bugs pour être testés.

Pour savoir comment ajouter du code sur dev veillez suivre le chapitre **"Ajouter du code sur dev"**.

### Nommage des branches

Pour une feature créer une branche avec le patern suivant: `feat/<nom de la feature>`

Pour une correction créer une branche avec le patern suivant: `fix/<nom de la correction>`

### Ajouter du code sur dev

Pour ajouter du code sur la branche de développement, 
il faut créer une pull request sur la branche `dev`.

Cette pull request doit:
- être validée par au moins un autre membre de l'équipe
- avoir toutes les conversations résolues
- avoir tous les checks en success
- avoir un déploiement en success

### Ajouter du code sur main

Il est impossible de pousser du code directement sur cette branche.

Pour ajouter du code sur la branche de production, il faut créer une pull request de `dev` vers `main`.
Une pull request non valide ne peut pas être mergée.

Cette pull request doit:
- être validée par un lead sur le dernier commit
- avoir toutes les conversations résolues
- avoir tous les checks en success
- avoir un déploiement en success

### Etape 6

Ayant un composant avec des props non utilisées ainsi qu'une erreur au niveau du children,
nous sommes partis de la branche dev pour corriger cela. Nous avons donc créé une nouvelle 
branche appelée fix/board à partir de dev qui était à jour, pour y apporter les modifications nécessaires.

Une fois cette action réalisée, nous avons créé une pull request vers la branche dev en vérifiant que tous
nos critères de révision étaient remplis.

### Appareance du board

Avec la pr `feat/board-logic`, nous implémentons juste l'appareance et la logique front du click sur une case.

### Logic des tours

Avec la pr `feat/board-turn`, nous implémentons la logique des `x` et des `o`.

### Définir un gagnant

Avec la pr `feat/game_winner`, nous implémentons juste la logique permettant de gagner ou de perdre.

### Structure du jeu

Avec la pr `feat/game-history`, nous implémentons la logique de la logique des historiques des tours tout en
nettoyant la codebase actuellement.
