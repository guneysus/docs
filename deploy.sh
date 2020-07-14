#!/usr/bin/env sh

# abort on errors
set -e

# build
# npm run docs:build
make build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m "deploy: $(date --iso=seconds)"

# if you are deploying to https://<USERNAME>.github.io
# git push --force-with-lease git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push --force-with-lease git@github.com:guneysus/docs.git master:gh-pages

cd -