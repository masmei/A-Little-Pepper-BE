\c a_little_pepper;

INSERT INTO profiles (uid, name, cal, fat, carb, protein, recipes) VALUES
('oTnDjqXdibRRVdO7Df6AkvEgOgH2', 'Mason Mei', 500, 10, 15, 8, ARRAY[ '640803', '665734']);

-- psql -U postgres -f db/schema.sql
-- psql -U postgres -f db/seed.sql