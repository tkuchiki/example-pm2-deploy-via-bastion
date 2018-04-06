# example-pm2-deploy-via-bastion

```
$ cd docker && make build && make up
$ cd docker && docker-compose exec ssh1 apk add --update git
$ npm run pm2 deploy development setup
```
