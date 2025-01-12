import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectionDB = async ()=>{
    try {
      const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`); // It returns an object
      console.log(`DB Host: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.error("Mongo DB Connection Error", error);
        process.exit(1); //Node Js give a inbuild reference to the current process and exit means to stop that one.
    }
}

export default connectionDB;