# ProduitApp

### Présentation du projet
Ce projet consiste à réaliser une application de gestion des produits avec
Angular et Bootstrap.
Elle présente les fonctionnalités suivantes :
- Ajouter un produit
- Afficher la liste des produits avec le nom et le prix
- Modifier un produit
- Afficher toutes les informations d’un produit
- Supprimer un produit

Elle dispose d’une **page d’accueil** qui permet de contient la liste des produits
avec leur nom et leur prix.
Pour accéder aux autres fonctionnalités, l’utilisateur doit avoir au préalable un
***compte*** pour se connecter.
Pour cette application, nous disposons de **plusieurs composants**, d’**un modèle
de produit**, des **routes dans app-module.ts** et de **deux services produit-service** et **auth-guard-service** (permet de gérer l’accès aux pages demandant une connexion) utilisés par tous les composants pratiquement.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

