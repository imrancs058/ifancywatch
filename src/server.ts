import "reflect-metadata"
import express from "express";
import loaders from "./loaders";
import config from "./config";
import session from 'express-session';
async function startServer() { 
  const app = express()
  await loaders.init({ expressApp: app })

  // creating 24 hours from milliseconds
// const oneDay = 1000 * 60 * 60 * 24;

//session middleware
// app.use(session({
//     secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
//     saveUninitialized:true,
//     cookie: { maxAge: oneDay },
//     resave: false
// }));
  // app.use(
  //   session({
  //     secret: 'my-secret',
  //     resave: false,
  //     saveUninitialized: false,
  //   }),
  // );

  const server = app.listen(config.env.port, () => {
    console.log("Server Started ~ ", config.env.port)
  });
 

  process.on("uncaughtException", err => {
    console.log("uncaughtException! Shutting Down the Server...")
    console.log(err)
    process.exit(1)
  })

  process.on("unhandledRejection", err => {
    console.log("unhandledRejection! Shutting Down the Server...")
    console.log(err)
    server.close(() => {
      process.exit(1)
    })
  })
}





startServer()

/*

{
  exp: 2 days,
  payload: {
    user_id: 123,
  },
}

*/
