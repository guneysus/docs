default: develop

develop:
	npm run dev
	
build:
	npm run build

deploy:
	bash deploy.sh

.PHONY: default develop build deploy