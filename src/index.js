import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/dbConnect.js";

const app = express();
dotenv.config(); // dotenvconfig is fine this way if your .env is in root folder of same project

// dotenv.config({     But in case it is in another folder apart from root than give path too
//   path: 'filepath'
// })

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log(`err: ${err}`);
      throw err;
    });
    app.listen(process.env.Port || 4771);
    console.log(
      `App is running succesfully on port ${process.env.Port || 4771}`
    );
  })
  .catch((error) => {
    console.log(`Connection failed due to ${error}`);
  });

// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Err :", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("ERROR", error);
//     throw error;
//   }
// })();
