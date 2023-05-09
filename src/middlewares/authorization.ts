import { NextFunction, Request, Response } from "express"
import ErrorCodes, { ErrorCodesMeta } from "../constants/error-codes"
import { ServiceStatuses } from "../constants/service-constants"
import TokenService from "../services/Tokens"
import UserService from "../services/User"
import { ExtendedRequest } from "../types/api"
import { ApiResponse } from "../utils/api"

export async function authorizeMiddleware(req: Request, res: Response, next: NextFunction) {
  const authToken = req.get("authorization")
  console.log("1")
  console.log(req.get("authorization"))
  if (
    !authToken ||
    typeof authToken !== "string" ||
    authToken.split(" ").length < 2 ||
    !authToken.split(" ")[1].length
  ) {
    return ApiResponse.returnFailed(res, {
      statusCode: 401,
      message: ErrorCodesMeta.AUTHORIZATION_FAILED.message,
      errorCode: ErrorCodes.AUTHORIZATION_FAILED,
      data: {},   
    })
  }
  console.log("2")
  const jwtToken = authToken.split(" ")?.[1]
  const tokenResponse = await new TokenService().verifyAndExtractJwtToken(jwtToken)

  if (tokenResponse.status !== ServiceStatuses.SUCCESS) {
    return ApiResponse.returnFailed(res, {
      statusCode: 401,
      message: ErrorCodesMeta.AUTHORIZATION_FAILED.message,
      errorCode: ErrorCodes.AUTHORIZATION_FAILED,
      data: {},
    })
  }
  console.log("3")
  const { id: userId, token: secureToken } = tokenResponse.data.tokenPayload

  if (
    !userId ||
    !secureToken ||
    typeof userId !== "string" ||
    typeof secureToken !== "string" ||
    !userId.trim().length ||
    !secureToken.trim().length
  ) {
    return ApiResponse.returnFailed(res, {
      statusCode: 401,
      message: ErrorCodesMeta.AUTHORIZATION_FAILED.message,
      errorCode: ErrorCodes.AUTHORIZATION_FAILED,
      data: {},
    })
  }

  const user = await new UserService().getUserById(userId)
  if (user.status !== ServiceStatuses.SUCCESS || user.data.user.secure_token !== secureToken) {
    return ApiResponse.returnFailed(res, {
      statusCode: 401,
      message: ErrorCodesMeta.AUTHORIZATION_FAILED.message,
      errorCode: ErrorCodes.AUTHORIZATION_FAILED,
      data: {},
    })
  }
  const reqExt = req as ExtendedRequest
  user.data.user.id = user.data.user._id
  reqExt.user = user.data.user
  return next()
}
