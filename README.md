# package-fetcher

Ce projet contient un boilerplate pour un bot messenger et l'executable Windows ngrok qui va permettre de créer un tunnel https pour connecter l'application et le bot messenger.
\*\* Le package principal "better-bootbot" présentait des erreurs donc installez un fork sur mon repo git

## 1 - Configurer facebook

- Créer un compte (développeur facebook)[https://developers.facebook.com/]
- Aller dans la section ("apps")[https://developers.facebook.com/apps/]
- Créer une application, sélectionnez "Aucun" dans type d'application et donnez-lui un nom
- Lorsque l'application est créée, cliquez sur "Configurer" dans la case _"Messenger"_
- Scrollez pour voir la partie **Token d'accès**
- Créez une page ou appuyez sur _Ajouter ou supprimer des Pages_ et sélectionnez la page

## 2 - Configurer les variables d'environnement et ngrok

- Appuyez ensuite sur **"Générer un token"** puis copier ce token dans un **fichier .env** que vous allez créer dans le répertoire de l'application Node sous _FB_ACCESS_TOKEN_
- Allez dans l'onglet **"Paramètres"** et **"Général"**, ensuite affichez la clé secrète et copiez-la dans votre **fichier .env** sous _FB_APP_SECRET_
- Spécifier ensuite n'importe quoi sous _FB_VERIFY_TOKEN_ (bot, test, psone, ...), elle sera ensuite utiliser pour connecter l'application et le bot.
- Lancer la commande `npm install` ou `yarn install`
- Lancer la commande `yarn add https://github.com/Lynxgsm/better-bootbot.git` ou `npm i --save https://github.com/Lynxgsm/better-bootbot.git` pour installer le package _better-bootbot_ de mon répertoire
- Copier **ngrok** dans le dossier _"dist"_ dans un répertoire de votre choix
- Ajouter **ngrok** dans votre variable d'environnement sous PATH
- Faites ensuite `node index.js`, cela va démarrer le bot

## 3 - Connecter le bot et l'application

- Revenir sur le site (developers.facebook)[https://developers.facebook.com] et revenez dans l'onglet _Messenger>Paramètres_
- Localisez le bouton Appeler l'URL de rappel. Ici vous allez renseignez le _*FB_VERIFY_TOKEN*_ que vous avez spécifié et l'URL du bot. Evidemment, facebook n'accepte que les liens sécurisés d'où la nécéssité d'utiliser **ngrok**
- Le bot étant démarré sur le port que vous voulez (à spécifier dans votre fichier .env), lancez la commande `ngrok http ${PORT}` où PORT ici est la valeur de votre port. Cela va démarrer une instance https relié à votre application.
- Renseignez ensuite cet URL dans l'URL de rappel et votre _*FB_VERIFY_TOKEN*_ dans la case _Vérifier le jeton_

## 4 - Déploiement

/_A rédiger_/

## Notes

curl https://graph.facebook.com/v2.12/me/messenger_profile?access_token=
{
"persistent_menu": [
{
"locale": "default",
"composer_input_disabled": false
}
]
}
