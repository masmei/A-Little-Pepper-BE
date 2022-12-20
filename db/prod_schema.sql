DROP DATABASE IF EXISTS a_little_pepper;

CREATE TABLE profiles(
    id SERIAL PRIMARY KEY, 
    uid TEXT NOT NULL,
    name TEXT NOT NULL, 
    cal INTEGER, 
    fat INTEGER,
    carb INTEGER,
    protein INTEGER,
    recipes TEXT[]
);
