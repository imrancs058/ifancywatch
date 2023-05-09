import { NextFunction, Request, Response } from "express"
import ErrorCodes, { ErrorCodesMeta } from "../../constants/error-codes"
import { User, UserAddDto } from "../../services/User/types"
import { ApiResponse } from "../../utils/api"
import { validateRequestDto } from "../../utils/dto"
import schema from "../registration-dto/user-dto.schema"

export default class CSVDto {
  static async requestCSV(req: Request, res: Response, next: NextFunction) {
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
}
