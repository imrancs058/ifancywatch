import { NextFunction, Request, Response } from "express"
import ErrorCodes, { ErrorCodesMeta } from "../../constants/error-codes"
import { UserLoginDto } from "../../controllers/authorization/types"
import { ApiResponse } from "../../utils/api"
import { validateRequestDto } from "../../utils/dto"
import authorizationDtoSchema from "./authorization-dto.schema"
import { ResponseLoginUser } from "./types"

export default class AuthorizationDto {
  static async requestLoginUser(req: Request, res: Response, next: NextFunction) {
    const { error, value } = await validateRequestDto({
      dto: req.body,
      dtoSchema: authorizationDtoSchema.loginUser,
    })

    if (error) {
      return ApiResponse.returnFailed(res, {
        statusCode: 400,
        message: ErrorCodesMeta.INVALID_BODY.message,
        errorCode: ErrorCodes.INVALID_BODY,
        data: { body: error },
      })
    }
    if (!value.phone && !value.email) {
      return ApiResponse.returnFailed(res, {
        statusCode: 400,
        message: ErrorCodesMeta.INVALID_EMAIL_OR_PHONE.message,
        errorCode: ErrorCodes.INVALID_EMAIL_OR_PHONE,
        data: {},
      })
    }
    const dto: UserLoginDto = {
      [value.phone ? "phone" : "email"]: parseInt(value.phone, 10) || value.email,
      password: value.password,
    }
    req.body = dto

    return next()
  }

  static responseLoginUser(data: { token: string }): ResponseLoginUser {
    return { token: data.token }
  }
}
