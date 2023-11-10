FROM postgres:14.4

COPY create-multiple-postgresql-databases.sh /docker-entrypoint-initdb.d/
COPY create-new.sh /docker-entrypoint-initdb.d/
RUN chmod +x /docker-entrypoint-initdb.d/create-multiple-postgresql-databases.sh

