# FS Bier

This repository contains the source code of [fsbier](http://www.fsbier.at/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need an up and running [git](https://git-scm.com/) and [docker](https://www.docker.com/) installation.

### Installing

```
# Clone the git repo
https://github.com/HigHendHd/fsbier.git

# Build the docker container
docker build -t fsbier .

# Run the docker container
docker run -p 80:80 fsbier
```

You can now access the development website at localhost.
