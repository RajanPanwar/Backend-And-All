import dotenv from "dotenv";
import connectDB from "./db/dbConnect.js";

dotenv.config(); // dotconfig is fine this way if your .env is in root folder of same project

// dotenv.config({     But in case it is in another folder apart from root than give path too
//   path: 'filepath'
// })

connectDB();

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
