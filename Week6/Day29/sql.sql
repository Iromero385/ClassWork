DROP DATABASE IF EXISTS playlist_db;
CREATE DATABASE playlist_db;
USE playlist_db;
CREATE TABLE playlist1(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    artist VARCHAR(30),
    genre VARCHAR(30),
    PRIMARY KEY (id)
);

INSERT INTO playlist1 (title, artist, genre) 
VALUES ("Sexy back", "Timberlake, Justin","Pop");
