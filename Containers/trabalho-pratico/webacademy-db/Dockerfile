FROM mysql:latest

COPY ./create_database.sql /docker-entrypoint-initdb.d/

EXPOSE 3306

CMD ["mysqld"]