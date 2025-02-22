#################################################################################################
#                                                                                               #
#            Baseline Application file for PHP Server                                           #
#                                                                                               #
#################################################################################################

FROM bitnami/php-fpm:8.2

ENV SERVICE=master

# Make sure image is up to date
RUN apt update && apt upgrade -y --no-install-recommends

#  Install php modules
RUN apt install -yq php-common \
    php-curl \
    php-dom \
    php-gd \
    php-json \
    php-mbstring \
    php-mysql \
    php-pdo \
    php-redis \
    php-xml \
    php-zip \
    curl \
    nano \
    openssl \
    unzip \
    zip \
    mariadb-client

#  Install xDebug to allow PHPUnit Testing
RUN apt install php-xdebug -y
RUN apt install php-mysql -y

#  Entrypoint and update scripts along with any other necessary shell scripts will be copied here
RUN mkdir /scripts

#  Update npm and composer
RUN apt install -y nodejs npm
RUN npm install -g n
RUN n stable
RUN npm install -g npm@latest

#  Update Composer
RUN composer self-update --2

#  Basic scripts for Starting App
COPY ./startup.sh /scripts/
COPY ./scheduler.sh /scripts/

#  Set permissions for the scripts to allow them to run
RUN chmod 775 /scripts/*
RUN chmod 775 /app
RUN chmod 775 /opt/bitnami/php -R

WORKDIR /app

ENTRYPOINT [ "/scripts/startup.sh" ]

