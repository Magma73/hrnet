[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/) [![React version](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/) [![CSS version](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/#specs) [![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/) [![React router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/en/main) [![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![NPM version](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/) [![Node version](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en) [![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://vitejs.dev/) [![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

# Projet 14 - Faites passer une librairie jQuery vers React

## Table des matières

- [Contexte](#contexte-du-projet)
- [Mission](#mission-du-projet)
- [Technologies](#technologies)
- [Notes et contraintes](#notes-et-contraintes)
- [Tester le projet](#tester-le-projet)
- [Auteur](#auteur)
- [License](#license)

## Contexte du projet

WealthHealth, grande société financière, utilise une application web interne, appelée HRnet. Cette application permet de gérer les dossiers des employés. Malheureusement, elle est ancienne et utilise jQuery côté front end, ce qui entraîne des bugs considérables.

## Mission du projet

La mission principale du projet est de convertir l’application interne [HRnet](https://github.com/OpenClassrooms-Student-Center/P12_Front-end) en React pour qu’elle soit plus performante.

Dans le détail, les objectifs sont de :

- Convertir l'ensemble du projet HRNet en React
- Convertir l'un des quatre plugins jQuery actuels en React. Remplacer les 3 plugins jQuery restants par des composants React à coder soi-même, ou que l’on peut importer depuis des libraires existantes en cas de manque de temps
- Effectuer des tests de performance Lighthouse en comparant l'ancienne et la nouvelle application

## Technologies

- React V18.2.0
- React-Dom V18.2.0
- React-Redux: V9.1.2
- React-Router-dom: V6.23.1
- @reduxjs/toolkit: V2.2.5
- @magma73/modal-react-typescript: V1.0.5
- @tanstack/react-table: V8.17.3
- React-datepicker: V6.9.0
- React-Select: V5.8.0
- NPM V10.5.2
- NodeJS V20.13.1
- VS Code V1.90.0
- Vite V5.2.0
- Vitest V1.6.0
- Typescript V5.2.2

## Notes et contraintes

- Utiliser React
- Produire la documentation du code du plugin React
- Supprimer tout code JQuery
- Utiliser Lighthouse pour les tests de performance
- Documenter le projet : Readme, proptypes (ou Typescript facultatif) et JSDoc (facultatif)

## Tester le projet

Pour tester simplement et rapidement le projet, vous pouvez visiter la démo en ligne : https://hrnet-sigma.vercel.app/

Sinon, vous pouvez également cloner le projet :

https://github.com/Magma73/hrnet

Accédez au répertoire du projet puis utilisez la commande `npm install` pour installer les dépendances du projet et `npm run dev` pour ouvrir l'application dans votre navigateur.

## Auteur

Marine Magnin

## License

ISC © [Marine Magnin](https://github.com/Magma73/)
