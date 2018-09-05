DROP DATABASE IF EXISTS favorite_db;
CREATE DATABASE favorite_db;
USE favorite_db;
CREATE TABLE favorite_foods(
    "food" VARCHAR(30) NOT NULL,
    "score" INTEGER(10)
);
CREATE TABLE favorite_songs(
    "song" VARCHAR(30) NOT NULL,
    "artist" VARCHAR(30),
    "score" INTEGER(10)
);
CREATE TABLE favorite_movies(
    "id" INTEGER(11) AUTO_INCREMENT NOT NULL,
    "movie" VARCHAR(30),"five_times" BOOLEAN,
    "score" INTEGER,
    PRIMARY (id)
);
