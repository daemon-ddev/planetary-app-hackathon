DROP TABLE IF EXISTS planetary_app_hackathon;

CREATE TABLE planetary_app_hackathon (
  id INT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO planetary_app_hackathon (name) VALUES ('Example one'), ('Example two');
