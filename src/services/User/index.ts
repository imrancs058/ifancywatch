import bcrypt from "bcrypt"
import crypto from "crypto"
import UserModel from "../../models/user"
import ErrorCodes, { ErrorCodesMeta } from "../../constants/error-codes"
import { ServiceFailedResponse, ServiceResponse, ServiceSuccessResponse } from "../../utils/service"
import { User, UserAddDto, UserServiceVerifyUserPayload, UserWithoutID } from "./types"
import { EmailDto } from "./types"
import { UserStatuses } from "../../constants/user-constants"
import { UserProfileVerificationDto } from "../../controllers/login/types"

export default class UserService {
  async add(data: UserAddDto): Promise<ServiceSuccessResponse<User> | ServiceFailedResponse> {
    try {
      const { name, email, phone, password } = data

      const userObj: UserWithoutID = {
        name,
        phone,
        password,
        status: UserStatuses.REGISTERED,
        secure_token: crypto.randomBytes(32).toString("hex"),
      }
      if (email) {
        const emailExists = await UserModel.findOne({ email })
        if (emailExists) {
          return ServiceResponse.failed({
            code: ErrorCodes.EMAIL_ALREADY_EXISTS,
            message: ErrorCodesMeta.EMAIL_ALREADY_EXISTS.message,
            status: 409,
          })
        }
        userObj.email = email
      }

      const hashedPassword = await this.hashPassword(password)

      userObj.password = hashedPassword

      const savedData = await new UserModel(userObj).save()
      return ServiceResponse.success({
        data: savedData,
        status: 201,
      })
    } catch (e: any) {
      if (e.message.includes("duplicate")) {
        return ServiceResponse.failed({
          code:
            Object.keys(e.keyPattern)[0] === "phone"
              ? ErrorCodes.PHONE_ALREADY_EXISTS
              : ErrorCodes.EMAIL_ALREADY_EXISTS,
          message:
            Object.keys(e.keyPattern)[0] === "phone"
              ? ErrorCodesMeta.PHONE_ALREADY_EXISTS.message
              : ErrorCodesMeta.EMAIL_ALREADY_EXISTS.message,
          status: 409,
        })
      }
      console.log(e)
      return ServiceResponse.failed({ code: ErrorCodes.SERVER_ERR })
    }
  }

  async delete(data: EmailDto): Promise<ServiceSuccessResponse<any> | ServiceFailedResponse> {
    console.log(data.email)
    const result = await UserModel.deleteOne( { email:data.email  } );
    if (result.deletedCount==1) {
      return ServiceResponse.success({
        data: result,
        status: 201,
      })
    }
    console.log("11")
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data: {
        message: "No User found",
      },
      status: 404,
    })
  }

  async userProfile(
    data: UserProfileVerificationDto
  ): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    try {
      const { _id } = data

      const result: any = await UserModel.findOne({ _id })

      delete result._doc.password
      delete result._doc.secure_token

      if (result) {
        return ServiceResponse.success({
          data: result._doc,
          status: 200,
        })
      }

      return ServiceResponse.failed({
        code: ErrorCodes.USER_NOT_FOUND,
        status: 404,
      })
    } catch (e) {
      console.log(e)
      return ServiceResponse.failed({ code: ErrorCodes.SERVER_ERR })
    }
  }

  async updateUserStatus(userId: string, status: UserStatuses) {
    try {
      const result: any = await UserModel.findByIdAndUpdate(userId, { status }, { new: true })
      if (result) {
        return ServiceResponse.success({
          data: {},
          status: 200,
        })
      }
      return ServiceResponse.failed({
        code: ErrorCodes.USER_NOT_FOUND,
        status: 404,
      })
    } catch (e) {
      console.log(e)
      return ServiceResponse.failed({ code: ErrorCodes.SERVER_ERR })
    }
  }

  async updateProfile(data: UserProfileVerificationDto) {
    try {
      if (data.email) {
        const result = await UserModel.findOne({ email: data.email })
        if (result) {
          return ServiceResponse.failed({
            code: ErrorCodes.EMAIL_ALREADY_EXISTS,
            status: 400,
            data: { email: data.email },
          })
        }
      }
      const result: any = await UserModel.findByIdAndUpdate(data._id, data, { new: true })
      if (result) {
        delete result._doc.password
        delete result._doc.secure_token
        delete result._doc.__v
        delete result._doc.is_active

        return ServiceResponse.success({
          data: result._doc,
          status: 200,
        })
      }
      return ServiceResponse.failed({
        code: ErrorCodes.USER_NOT_FOUND,
        status: 404,
      })
    } catch (e: any) {
      console.log(e)
      return ServiceResponse.failed({ code: ErrorCodes.SERVER_ERR })
    }
  }

  async checkPhoneExistence(phone: number) {
    const data = await UserModel.findOne({ phone })
    if (data) {
      return true
    }

    return false
  }

  async checkEmailExistence(email: string) {
    const data = await UserModel.findOne({ email })
    if (data) {
      return true
    }

    return false
  }

  async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(password, salt)

    return hashedPassword
  }

  async matchPassword(normalPassword: string, hashedPassword: string) {
    const areSame = await bcrypt.compare(normalPassword, hashedPassword)
    return areSame
  }

  async getUserByEmail(email: string) {
    const data: any = await UserModel.findOne({ email })
    if (data) {
      return data._doc
    }

    return null
  }

  async getUserByPhone(phone: number) {
    const data: any = await UserModel.findOne({ phone })
    if (data) {
      return data._doc
    }

    return null
  }

  async getUserById(_id: string) {
    const user = await UserModel.findOne({ _id })
    if (!user) return ServiceResponse.failed({ code: ErrorCodes.USER_NOT_FOUND, status: 404 })
    return ServiceResponse.success({ data: { user: user._doc } })
  }

  async updateSecureToken(userId: string) {
    await UserModel.findOneAndUpdate(
      { _id: userId },
      { $set: { secure_token: crypto.randomBytes(32).toString("hex") } },
      { new: true }
    )
  }

  async verifyUser(payload: UserServiceVerifyUserPayload) {
    const user: User = payload.email
      ? await this.getUserByEmail(payload.email)
      : await this.getUserByPhone(payload.phone!)

    if (!user) {
      return ServiceResponse.failed({
        code: ErrorCodes.USER_NOT_FOUND,
        status: 404,
        message: ErrorCodesMeta.USER_NOT_FOUND.message,
        data: { [payload.email ? "email" : "phone"]: payload.email || payload.phone },
      })
    }
    
    const arePasswordsSame = await this.matchPassword(payload.password, user.password)
    if (arePasswordsSame) return ServiceResponse.success({ data: { user } })

    return ServiceResponse.failed({
      code: ErrorCodes.WRONG_PASSWORD,
      status: 403,
      message: ErrorCodesMeta.WRONG_PASSWORD.message,
      data: { [payload.email ? "email" : "phone"]: payload.email || payload.phone },
    })
  }
}
