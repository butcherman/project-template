#################################################################################################
#                                                                                               #
#            Database Container holds the MySQL Database for Application                        #
#                                                                                               #
#################################################################################################

FROM bitnami/mysql:latest

ENV MYSQL_ROOT_PASSWORD=dbRootPasswd
ENV MYSQL_USER=dbUser
ENV MYSQL_PASSWORD=appDatabase
ENV MYSQL_DATABASE=application

COPY ./defaultDatabase.sql /docker-entrypoint-initdb.d/
