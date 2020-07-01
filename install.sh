set -xe
openssl rand -base64 741 > mongodb-keyfile
chmod 600 mongodb-keyfile
sudo chown 999 mongodb-keyfile
docker-compose up
