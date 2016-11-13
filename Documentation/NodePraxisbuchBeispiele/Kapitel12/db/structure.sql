CREATE TABLE movies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR,
  year INTEGER
);

INSERT INTO movies (title, year) VALUES
  ('Iron Man', 2008),
  ('The Avengers', 2012);