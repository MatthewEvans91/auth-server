#use this while debugging
CREATE DATABASE IF NOT EXISTS auth;
CREATE USER IF NOT EXISTS 'auth'@'%' IDENTIFIED BY 'venusaur';
GRANT ALL PRIVILEGES ON auth.* TO 'auth'@'%';
