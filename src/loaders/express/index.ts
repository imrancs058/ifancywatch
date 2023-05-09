import express, { Application } from "express"
import cors from "cors"
import helmet from "helmet"
import bodyParser from "body-parser"
var expressLayouts = require("express-ejs-layouts")
// import expressLayouts from "express-ejs-layouts";
import session from 'express-session'
var cookieParser = require("cookie-parser")
var passport = require("passport")
// import * as passport from 'passport';
// import {TypeormStore} from 'connect-typeorm';
// import {getConnection} from 'typeorm'
// import {getRepository} from 'typeorm'
// import {SessionEntity} from './typeorm'
// import {SessionEntity} from '../../typeorm/index';
// import cookieParser from "cookie-parser";
import router from "../../router"
import path from "path"
export default async function expressLoader({ app }: { app: Application }) {
  app.use(cors())
  app.use(cookieParser())
  // const sessionRepository=getRepository(SessionEntity)

  app.use(cookieParser())
  app.use(
    session({
      secret: "ifancythat.org",
      resave: true,
      saveUninitialized: true,
    })
  )

  app.use(passport.initialize())
  app.use(passport.session())
  passport.serializeUser(function (user:any, cb:any) {
    cb(null, user)
  })
  passport.deserializeUser(function (id:any, cb:any) {
    cb(null, id)
  })
  app.use("/public", express.static("public"))
  app.use(express.json())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.set("views", path.join(__dirname, "../../") + "/views")
  app.use(expressLayouts)
  app.set("view engine", "ejs")
  app.use("/api", router.protectedRouter)
  app.use("/", router.unProtectedRouter)

  return app
}
