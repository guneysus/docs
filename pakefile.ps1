function dev {
  yarn dev
}

function deploy {
  yarn build
  cd docs/.vuepress/dist
  git init
  git add -A
  git commit -m "deploy: $(date)"
  git push -f git@github.com:guneysus/docs.git master:gh-pages
  cd -
}