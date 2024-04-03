import mongoose from "mongoose";

export async function connectMongo(uri) {
  return await mongoose.connect(uri).catch((err) => {
    console.log(`Database is not connected ${err}`);
  });
}
