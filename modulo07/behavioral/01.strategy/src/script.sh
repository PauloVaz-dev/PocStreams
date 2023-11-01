docker run \
  --name postgres 

docker run --name mongdb -e MONGO_INITDB_ROOT_USERNAME=mongodb -e MONGO_INITDB_ROOT_PASSWORD=docker -p 27017:27017 -d mongo:4