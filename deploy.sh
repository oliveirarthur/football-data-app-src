#!/bin/sh
set -e

REPOSITORY_NAME=football-data-app

npx @ionic/cli build -- --base-href=/$REPOSITORY_NAME/
cd www
touch .nojekyll

git init
git add .
git commit -m "$(date --iso-8601=seconds)"
git remote add origin git@github.com:oliveirarthur/$REPOSITORY_NAME.git
git push -f origin master
