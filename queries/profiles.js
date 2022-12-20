const db = require("../db/dbConfig.js");

const getAllProfiles = async () => {
  console.log(db, "<----- this is our config obj")
  
  try {
    const allProfiles = await db.any("SELECT * FROM profiles");
   
    return allProfiles;
  } catch (error) {
    console.log(error, " fired from getAllProfilesQuery");
  }
};

const getProfile = async (uid) => {
  try {
    // db one takes a string of SQL command;
    // id=$1 allows us to interpolate our second parameter safely
    // we CAN pass multiple values to one query in this manner
    const oneProfile = await db.one("SELECT * FROM profiles WHERE uid=$1", uid);
    return oneProfile;
  } catch (error) {
    // with using db.one() we will not hit our catch block even if we have no
    // record with the corresponding ID - there are MANY ways to handle this
    // db.oneOrNone() is one way - there are also others.
    return error;
  }
};

const createProfile = async (profile) => {
  let { uid, name, cal, fat, carb, protein, recipes } = profile;

  try {
    const newProfile = await db.one(
      "INSERT INTO profiles (uid, name, cal, fat, carb, protein, recipes) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [uid, name, cal, fat, carb, protein, recipes]
    );
    return newProfile;
  } catch (error) {
    return error;
  }
};

const deleteProfile = async (id) => {
  try {
    const deletedProfile = await db.one(
      "DELETE FROM profiles WHERE id = $1 RETURNING *",
      id
    );
    return deletedProfile;
  } catch (err) {
    return err;
  }
};
// We need to pass in the Profile - the information to change
// && the ID of the Profile to access it in the DB
const updateProfile = async (profile, id) => {
  let { uid, name, cal, fat, carb, protein, recipes } = profile;
  try {
    // first argument is the QUERY string
    // second argument is the actual DATA
    const updatedProfile = await db.one(
      "UPDATE profiles SET uid=$1, name=$2, cal=$3, fat=$4, carb=$5, protein=$6, recipes=$7 WHERE uid=$8 RETURNING *",
      [uid, name, cal, fat, carb, protein, recipes, id]
    );
    return updatedProfile;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllProfiles,
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
};
