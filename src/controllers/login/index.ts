import { Request, Response } from "express"
import { ServiceStatuses } from "../../constants/service-constants"
import UserService from "../../services/User"
import { ApiResponse } from "../../utils/api"
import { Controller, Route } from "../../utils/route"
import { SuccessCodesMeta } from "../../constants/success-codes"
import { authorizeMiddleware } from "../../middlewares/authorization"
import UserProfileDto from "../../dto/user-profile-dto"
import { UserProfileVerificationDto } from "./types"

@Controller("/login")
export default class UserProfileController {

  @Route.Get({ path: "/" })
  async loginPage(req: Request, res: Response) {
    return res.render("login/index", {
      layout: 'login-layout',
      title: "login",
      meta: { successCodes: SuccessCodesMeta },
    })
  }

  @Route.Get({ path: "/profile", middlewares: [authorizeMiddleware] })
  async getProfile(req: Request, res: Response) {
    const { user }: any = req
    const userRes = await new UserService().userProfile(user)

    if (userRes.status === ServiceStatuses.FAILED) {
      return ApiResponse.returnFailed(res, {
        data: userRes.data,
        errorCode: userRes.errorCode,
        message: userRes.message,
        statusCode: userRes.statusCode,
      })
    }
    return ApiResponse.returnSuccess(res, {
      data: userRes.data,
      message: SuccessCodesMeta.USER_PROFILE.message,
    })
  }

  @Route.Put({
    path: "/profile",
    middlewares: [authorizeMiddleware, UserProfileDto.requestUserUpdateProfile],
  })
  async putProfile(req: Request, res: Response) {
    const dto: UserProfileVerificationDto = req.body
    const userRes = await new UserService().updateProfile(dto)

    if (userRes.status === ServiceStatuses.FAILED) {
      return ApiResponse.returnFailed(res, {
        data: userRes.data,
        errorCode: userRes.errorCode,
        message: userRes.message,
        statusCode: userRes.statusCode,
      })
    }
    return ApiResponse.returnSuccess(res, {
      data: userRes.data,
      message: SuccessCodesMeta.PROFILE_UPDATE_SUCCESSFUL.message,
    })
  }
}
