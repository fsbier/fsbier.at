FROM php:7.2-apache

COPY src/ /var/www/html/

COPY certs/private/apache-selfsigned.key /etc/ssl/private/apache-selfsigned.key
COPY certs/apache-selfsigned.crt /etc/ssl/certs/apache-selfsigned.crt
COPY certs/dhparam.pem /etc/ssl/certs/dhparam.pem
COPY configs/ssl-params.conf /etc/apache2/conf-available/ssl-params.conf
COPY configs/default-ssl.conf /etc/apache2/sites-available/default-ssl.conf

RUN a2enmod ssl
RUN a2enmod headers
RUN a2ensite default-ssl
RUN a2enconf ssl-params
RUN apache2ctl configtest
