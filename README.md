# Microsservico + DDD

This project aims to be a microservice model applying DDD concepts.

## Initialize the project

```bash
#  docker-compose & Install docker
https://docs.docker.com/compose/install/
https://docs.docker.com/engine/install/

# Add permissions for docker if your OS is LINUX 
sudo usermod -aG docker ${USER}
sudo su - ${USER}

# copy and edit the file .env
cp env.example .env

# Run npm to download dependencies
npm install

# Run docker-compose
docker-compose up -d

# Execute the project
npm run wacth

```
