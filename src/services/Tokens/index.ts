import jwt from "jsonwebtoken"
import ErrorCodes from "../../constants/error-codes"
import { TokenServiceOptions } from "../../constants/service-constants"
import { ServiceResponse } from "../../utils/service"
import { TokenServiceJwtDecodedPayload, TokenServiceJwtPayload } from "./types"

export default class TokenService {
  async createJwtToken(jwtPayload: TokenServiceJwtPayload) {
    const { secret, expirationTime } = TokenServiceOptions.jwt

    const token = await jwt.sign(jwtPayload, secret, { expiresIn: `${expirationTime}s` })
    return ServiceResponse.success({ data: { token } })
  }

  async verifyAndExtractJwtToken(jwtToken: string) {
    try {
      const decoded = jwt.verify(
        jwtToken,
        TokenServiceOptions.jwt.secret
      ) as TokenServiceJwtDecodedPayload
      return ServiceResponse.success({ data: { tokenPayload: decoded } })
    } catch {
      return ServiceResponse.failed({ code: ErrorCodes.INVALID_JWT_TOKEN, status: 400 })
    }
  }
}

// secure_token: 32bytes:hex
//
