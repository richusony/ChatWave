import mongoose from "mongoose";

export async function connectMongo(uri) {
  return await mongoose.connect(uri)
    .then(() => console.log("Database Connected!!"))
    .catch((err) => console.log(`Database is not connected ${err}`));
}
