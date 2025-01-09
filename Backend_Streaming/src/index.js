//require('dotenv').config() // the only require that can run on the type- module
//else we can use import one too.
// In JavaScript, ()() is used to directly execute a 
// function that returns another function or an Immediately Invoked Function Expression (IIFE). 
// Here's a detailed explanation:
// Function That Returns Another Function
// When a function returns another function, you can call it immediately by using ()().
// function multiplier(x) {
//     return function (y) {
//       return x * y;
//     };
//   }
  
//   console.log(multiplier(2)(3)); // Output: 6
  
// 1st method to connect MongoDB server.
// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error)=>{
//             console.log("err", error);
//             throw error;
//         })
//         app.listen(`${process.env.PORT}`, ()=>{
//             console.log("server is Listening at Custom port")
//         })
//     } catch (error) {
//         console.error("Error", error);
//         throw error;
//     }
// })()

import dotenv from "dotenv";
import connectionDB from "./db/index.js";
dotenv.config({
    path: './env'
})

connectionDB()



