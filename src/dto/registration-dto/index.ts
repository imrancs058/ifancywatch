import { NextFunction, Request, Response } from "express"
import ErrorCodes, { ErrorCodesMeta } from "../../constants/error-codes"
import { User, UserAddDto } from "../../services/User/types"
import { ApiResponse } from "../../utils/api"
import { validateRequestDto } from "../../utils/dto"
import { ResponseRegisterUser } from "./types"
import schema from "../registration-dto/user-dto.schema"
import { RegistrationVerificationDto } from "../../controllers/registration/types"

export default class RegistrationDto {
  static async requestRegisterUser(req: Request, res: Response, next: NextFunction) {
    const { error, value } = await validateRequestDto({
      dto: req.body,
      dtoSchema: schema.registerUser,
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

    const dto: UserAddDto = {
      name: value.name,
      phone: parseInt(value.phone, 10),
      ...(value.email && { email: value.email }),
      password: value.password,
    }

    req.body = dto

    return next()
  }

  static responseRegisterUser(data: User): ResponseRegisterUser {
    return {
      name: data.name,
      user_status: data.status,
      email: data.email,
      phone: data.phone,
    }
  }

  static async requestRegistrationVerification(req: Request, res: Response, next: NextFunction) {
    const { error, value } = await validateRequestDto({
      dto: req.body,
      dtoSchema: schema.registrationVerification,
    })

    if (error) {
      return ApiResponse.returnFailed(res, {
        statusCode: 400,
        message: ErrorCodesMeta.INVALID_BODY.message,
        errorCode: ErrorCodes.INVALID_BODY,
        data: { body: error },
      })
    }

    const dto: RegistrationVerificationDto = {
      code: value.code,
      phone: parseInt(value.phone, 10),
    }

    req.body = dto

    return next()
  }
}
