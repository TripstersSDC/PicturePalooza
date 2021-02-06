DROP DATABASE IF EXISTS airbnb;
CREATE DATABASE airbnb;

\c airbnb;

/*create reviews table*/
CREATE TABLE IF NOT EXISTS listings(
  listing_id SERIAL PRIMARY KEY,
  listing_name varchar NOT NULL,
  lising_description varchar NOT NULL
);

/*create properties table*/
CREATE TABLE IF NOT EXISTS photos(
  photos_id SERIAL PRIMARY KEY,
  listing_id INTEGER REFERENCES listings(listing_id),
  image_url varchar NOT NULL,
  thumbnail_url varchar NOT NULL,
  photo_description varchar NOT NULL,
  room varchar NOT NULL
);

COPY listings(listing_id, listing_name, lising_description)
FROM '/Users/anthonypatterson/Desktop/SDC/AirBnB-Photos-Service/database/seed/CSV/listings.csv'
DELIMITER ','
CSV HEADER;

COPY photos(photos_id, listing_id, thumbnail_url, image_url, photo_description, room)
FROM '/Users/anthonypatterson/Desktop/SDC/AirBnB-Photos-Service/database/seed/CSV/photos.csv'
DELIMITER ','
CSV HEADER;

