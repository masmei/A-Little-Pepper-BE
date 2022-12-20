DROP DATABASE IF EXISTS a_little_pepper;
CREATE DATABASE a_little_pepper;

\c a_little_pepper;

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

-- Bookmarking Recipes: Store recipes as array in profiles table. Store recipes as unique IDs. Fetch recipes based on the ids on the frontend. Implement a carousel. 
-- Carlorie Tracker: 
