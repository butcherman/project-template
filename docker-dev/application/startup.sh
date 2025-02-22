#!/bin/bash

#################################################################################################
#                                                                                               #
#                              Entrypoint Script for Dev Environment                            #
#                  If Application is not initialized, first time setup will occur               #
#                           After initialization, services will start                           #
#                                                                                               #
#################################################################################################

set -m

# Since the Reverb container has to start at the same time as Application, pause it
if [ $SERVICE = "reverb" ]
then
    sleep 30
fi

#  Start the Horizon and PHP-FPM Services and run the Scheduler script based on server purppose
echo "Application $SERVICE is now running"
if [ $SERVICE = "app" ]
then
    php-fpm -F --pid /opt/bitnami/php/tmp/php-fpm.pid -y /opt/bitnami/php/etc/php-fpm.conf
elif [ $SERVICE = "horizon" ]
then
    php /app/artisan horizon:watch --without-tty
elif [ $SERVICE = "scheduler" ]
then
    /scripts/scheduler.sh
elif [ $SERVICE = "reverb" ]
then
    php /app/artisan reverb:start --debug
else
    php-fpm -F --pid /opt/bitnami/php/tmp/php-fpm.pid -y /opt/bitnami/php/etc/php-fpm.conf
fi
