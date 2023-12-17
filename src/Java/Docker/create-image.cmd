docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kurs2-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kurs2-java/app ../../..
