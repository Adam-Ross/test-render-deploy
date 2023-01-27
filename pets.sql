DROP TABLE IF EXISTS pets;
CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
	name text NOT NULL,
	age integer NOT NULL,
    kind text NOT NULL
);

INSERT INTO pets (name,age,kind) 
VALUES ('Garrett', 40, 'Hound dog'),
('Danny', 31, 'Honey badger');