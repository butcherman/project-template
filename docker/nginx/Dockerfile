#################################################################################################
#                                                                                               #
#            NGINX Container is the main web service for Tech Bench                             #
#                                                                                               #
#################################################################################################

FROM bitnami/nginx:latest

USER root

# Make sure image is up to date
RUN apt update && apt upgrade -y --no-install-recommends

# Copy configuration files
COPY ./http.conf /opt/bitnami/nginx/conf/server_blocks/http.conf
COPY ./https.conf /opt/bitnami/nginx/conf/server_blocks/https.conf

# Copy scripts
COPY ./entrypoint.sh /docker-entrypoint-startdb.d/
COPY ./entrypoint.sh /docker-entrypoint-initdb.d/

# Make directories for storage logs and SSL Cert
RUN mkdir -p /app/storage/logs/nginx -m 775
RUN mkdir -p /app/keystore/private -m 775
RUN mkdir -p /app/public/build/assets -m 775

# Remove default files
RUN rm /app/50x.html
RUN rm /app/index.html

WORKDIR /app
