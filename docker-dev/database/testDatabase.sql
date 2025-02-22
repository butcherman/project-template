################################################################################
#                     Create Testing Database for PHPUnit                      #
################################################################################
CREATE SCHEMA IF NOT EXISTS `application-test`;

GRANT ALL PRIVILEGES ON `application-test`.* TO `dbUser`@'%' WITH GRANT OPTION;

FLUSH PRIVILEGES;
