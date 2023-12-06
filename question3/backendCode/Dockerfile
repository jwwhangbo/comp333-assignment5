FROM php:8.2-apache
WORKDIR /var/www/html
COPY / /var/www/html
RUN a2enmod rewrite
RUN service apache2 restart
RUN docker-php-ext-install mysqli

EXPOSE 80

LABEL authors="jwhangbo"