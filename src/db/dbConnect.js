import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n Mongo DB connected !! DB host: ${connectionInstance.connection.host}`
    );
    // app.on("error", (error) => {
    //   console.log(error);
    //   throw error;
    // });
    // app.listen(process.env.PORT, () => {
    //   console.log(`App is listening on Port ${PORT}`);
    // });
  } catch (error) {
    console.log("Mongo DB connection error: ", error);
    process.exit(1); //Node js method to exit program
  }
};

export default connectDB;
