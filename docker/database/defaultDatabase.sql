################################################################################
#                Create Initial Database and Database User                     #
################################################################################

CREATE SCHEMA IF NOT EXISTS `application`;
GRANT ALL PRIVILEGES ON `application`.* TO 'dbUser'@'%' ;
FLUSH PRIVILEGES;
