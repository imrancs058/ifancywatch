import { NextFunction, Request, Response } from "express"
import { User } from "../../services/User/types"
import { ResponseUpdatePassword } from "./types"
import { validateRequestDto } from "../../utils/dto"
import schema from "./user-profile-dto.schema"
import { ApiResponse } from "../../utils/api"
import ErrorCodes, { ErrorCodesMeta } from "../../constants/error-codes"
import { UserProfileVerificationDto } from "../../controllers/login/types"
import { ExtendedRequest } from "../../types/api"

export default class UserProfileDto {
  static async requestUserUpdateUsername(req: Request, res: Response, next: NextFunction) {
    const { error, value } = await validateRequestDto({
      dto: req.body,
      dtoSchema: schema.updateUsername,
    })

    if (error) {
      return ApiResponse.returnFailed(res, {
        statusCode: 400,
        message: ErrorCodesMeta.INVALID_BODY.message,
        errorCode: ErrorCodes.INVALID_BODY,
        data: { body: error },
      })
    }

    const reqExt = req as ExtendedRequest
    const dto: UserProfileVerificationDto = { _id: reqExt.user._id, username: value.username }

    req.body = dto

    return next()
  }

  static async requestUserUpdateProfile(req: Request, res: Response, next: NextFunction) {
    const { error, value } = await validateRequestDto({
      dto: req.body,
      dtoSchema: schema.updateProfile,
    })

    if (!value.name && !value.email && !value.address) {
      return ApiResponse.returnFailed(res, {
        statusCode: 400,
        message: ErrorCodesMeta.EMPTY_BODY_NOT_ALLOWED.message,
        errorCode: ErrorCodes.EMPTY_BODY_NOT_ALLOWED,
        data: {},
      })
    }

    if (error) {
      return ApiResponse.returnFailed(res, {
        statusCode: 400,
        message: ErrorCodesMeta.INVALID_BODY.message,
        errorCode: ErrorCodes.INVALID_BODY,
        data: { body: error },
      })
    }

    const reqExt = req as ExtendedRequest

    const dto: UserProfileVerificationDto = { _id: reqExt.user._id }
    if (value.name) dto.name = value.name
    if (value.email) dto.email = value.email
    if (value.phone) dto.phone = value.phone
    if (value.address) dto.address = value.address

    req.body = dto

    return next()
  }

  static responseUserSearch(data: User): ResponseUpdatePassword {
    return {
      user_status: data.status,
      email: data.email,
      phone: data.phone,
    }
  }
}
