# FS Bier

This repository contains the source code of [fsbier](http://www.fsbier.at/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need an up and running [git](https://git-scm.com/) and [docker](https://www.docker.com/) installation.

### Installing

```
# Clone the git repo
git clone git@github.com:fsbier/fsbier.at.git --recurse-submodules

# Symlink Laradock env file
# unix:
ln -sf .env.docker-win laradock/.env
# win:
mklink laradock/.env .env.docker-win

# Change to lardock directory
cd laradock

# Start the containers
docker-compose up -d apache2 mysql
```

You can now access the development website at localhost.
