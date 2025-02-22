#!/bin/bash

#################################################################################################
#                                                                                               #
#                                      Entrypoint Script                                        #
#                  If Tech Bench is not initialized, first time setup will occur                #
#                           After initialization, services will start                           #
#                                                                                               #
#################################################################################################

#  Color's for text
RED='\033[0;31m'
NC='\033[0m' # No Color


set -m

echo "Starting Application"

# Since the Reverb container has to start at the same time as Tech Bench, pause it
if [ $SERVICE = "reverb" ]
then
    sleep 30
fi

#  Start the Horizon and PHP-FPM Services and run the Scheduler script based on server purpose
echo "Application $SERVICE is now running"
if [ $SERVICE = "app" ]
then
    php-fpm -F --pid /opt/bitnami/php/tmp/php-fpm.pid -y /opt/bitnami/php/etc/php-fpm.conf
elif [ $SERVICE = "horizon" ]
then
    php /app/artisan horizon
elif [ $SERVICE = "scheduler" ]
then
    /scripts/scheduler.sh
elif [ $SERVICE = "reverb" ]
then
    php /app/artisan reverb:start
else
    php-fpm -F --pid /opt/bitnami/php/tmp/php-fpm.pid -y /opt/bitnami/php/etc/php-fpm.conf
fi
