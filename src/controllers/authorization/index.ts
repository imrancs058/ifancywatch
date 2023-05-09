import { Request, Response } from "express"
import { ServiceStatuses } from "../../constants/service-constants"
import UserService from "../../services/User"
import { ApiResponse } from "../../utils/api"
import { Controller, Route } from "../../utils/route"
import { UserLoginDto } from "./types"
import AuthorizationDto from "../../dto/authorization-dto"
import { UserStatuses } from "../../constants/user-constants"
import ErrorCodes, { ErrorCodesMeta } from "../../constants/error-codes"
import TokenService from "../../services/Tokens"
import { ExtendedRequest } from "../../types/api"
import { authorizeMiddleware } from "../../middlewares/authorization"
import { SuccessCodesMeta } from "../../constants/success-codes"
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy({passReqToCallback : true},async function(req:any,username:any, password:any, done:any) {
  const dto: UserLoginDto = req.body
  dto.email=username
    const userInstance = new UserService()
    const userRes = await userInstance.verifyUser(dto)
    console.log(userRes)
    if (userRes.status === ServiceStatuses.FAILED) {
      return done({message:"error"}, null);
    }

    const { user } = userRes.data

  return done(null, user);
}));

@Controller("/authorize")
export default class AuthorizationController {
  @Route.Post({ path: "/loginIfancyDat",middlewares:[passport.authenticate('local', { failureRedirect: "/profile?msg='Password is wrong'" })] })
  async userLogin(req: Request, res: Response) {
    // if (user.status === UserStatuses.REGISTERED) {
    //   return ApiResponse.returnFailed(res, {
    //     data: { [dto.email ? "email" : "phone"]: dto.email || dto.phone },
    //     errorCode: ErrorCodes.USER_NOT_VERIFIED,
    //     message: ErrorCodesMeta.USER_NOT_VERIFIED.message,
    //     statusCode: 401,
    //   })
    // }

   
    
    
    // console.log(jwtToken)
    // return res.render("login/index", {
    //   layout: 'login-layout',
    //   title: "login",
    //   meta: { successCodes: SuccessCodesMeta },
    // })
    return res.redirect("/dashboard")
    // return ApiResponse.returnSuccess(res, {
    //   data: AuthorizationDto.responseLoginUser({ token: jwtToken.data.token }),
    //   message: SuccessCodesMeta.User_AUTHORIZED_SUCCESSFULLY.message,
    // })
  }

  @Route.Get({ path: "/logout" })
  async logoutUser(req: any, res: Response) {
    //req.logout();
    req.session.destroy(function() {
        res.clearCookie('connect.sid');
        res.clearCookie('remember_me');
        res.redirect('/login');
    });
    // if(req.cookies?.token){
    //   console.log("1111")
    // }else{
    //   console.log("555")
    // }
    // await service.updateSecureToken(user._id)
    // return res.render("login/index", {
    //   layout: 'login-layout',
    //   title: "login",
    //   message: SuccessCodesMeta.USER_LOGGED_OUT_SUCCESSFULLY.message,
    //   status: 1, 
    //   status_code:200,
    //   meta: { successCodes: SuccessCodesMeta },
    // })
    // return ApiResponse.returnSuccess(res, {
    //   data: {},
    //   message: SuccessCodesMeta.USER_LOGGED_OUT_SUCCESSFULLY.message,
    //   statusCode: 200,
    // })
  }
}
