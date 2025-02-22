#################################################################################################
#                                                                                               #
#            Redis Container holds the Redis Database for Tech Bench                            #
#                                                                                               #
#################################################################################################

FROM bitnami/redis:latest

ENV REDIS_PASSWORD=dbRootPassword

USER root

RUN apt update && apt upgrade -y --no-install-recommends

WORKDIR /app
