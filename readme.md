# FS Bier

This repository contains the source code of [fsbier](http://www.fsbier.at/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need an up and running [git](https://git-scm.com/) and [docker](https://www.docker.com/) installation.

### Installing

```
# Clone the git repo
git clone https://github.com/fsbier/fsbier.at.git

# init submodule
cd fsbier.at
git submodule update --init --recursive

# link docker env file
unix: ln -s .env.docker laradock/.env
win: mklink laradock\.env .env.docker-win

# Run the docker containers (be sure docker is running)(this can take up to 15min)
cd laradock
docker-compose up -d mysql apache2

# run composer
docker-compose exec --user=laradock workspace composer install

# now you can import an existing database (laradock/data/mysql) and "sites/default/settings.php"

# or just open localhost in your browser and create a new database
# connection parameters can be found in "web/sites/settings.local.php" at the bottom

# importing drupal config (after git pull)
docker-compose exec workspace drush cim

# exporting drupal config (to commit some changes)
docker-compose exec workspace drush cex
```

You can now access the development website at localhost.
