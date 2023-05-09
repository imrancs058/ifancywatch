import { Request, Response } from "express"
import { ServiceStatuses } from "../../constants/service-constants"
import RegistrationDto from "../../dto/upload-csv-dto"
import UserService from "../../services/User"
import { UserAddDto } from "../../services/User/types"
import { EmailDto } from "../../services/User/types"
import { ApiResponse } from "../../utils/api"
import { Controller, Route } from "../../utils/route"
import { SuccessCodesMeta } from "../../constants/success-codes"

@Controller("/registerIfancyDat")
export default class UserAuthController {
  @Route.Post({ path: "/", middlewares: [] })
  async register(req: Request, res: Response) {
    const dto: UserAddDto = req.body
    const service = new UserService()
    const addResponse = await service.add(dto)
    if (addResponse.status === ServiceStatuses.FAILED) {
      return ApiResponse.returnFailed(res, {
        statusCode: addResponse.statusCode,
        message: addResponse.message,
        data: addResponse.data,
        errorCode: addResponse.errorCode,
      })
    }

    return ApiResponse.returnSuccess(res, {
      statusCode: 201,
      message: SuccessCodesMeta.USER_REGISTERED_SUCCESSFULLY.message,
      data: {},
    })
  }

  @Route.Delete({ path: "/", middlewares: [] })
  async delete(req: Request, res: Response) {
    
    const service = new UserService()
    const deleteResponse = await service.delete(req.body)
    console.log(deleteResponse)
    if(deleteResponse.status==ServiceStatuses.FAILED){
      return ApiResponse.returnSuccess(res, {
        statusCode: 201,
        message: SuccessCodesMeta.USER_NOT_FOUND.message,
        data: {
          message: "No User found",
        },
      })
    }
    return ApiResponse.returnSuccess(res, {
      statusCode: 201,
      message: SuccessCodesMeta.USER_DELETED_SUCCESSFULLY.message,
      data: {},
    })
  }
}

/*

registration: /auth/register
verification: /auth/register/send
verification: /auth/register/verify

login: /auth/authorize/login
logout: /auth/authorize/logout

code: resend: /auth/code/send: {userId, email | phone}
code: resent without auth: /auth/code/sendWitNoAuth:
code: verify: /auth/code/verify: {userId, intent, code}: true | false

email_update: /update/email
phone_update: /update/phone

forget: password: /auth/forgetPassword: {preferred_identity: "email" | "phone"}
forget: change password: /auth/forgetPassword/update: {code, email | phone, newPassword}

email update verify: auth/updateEmail/update
phone update verify: auth/updatePhone/update

TWO-FACTOR-AUTH
FIN-MUTATION
PHONE
EMAIL
PASSWORD
REGISTRATION: ONLY FOR THE FIRST TIME.

*/

// LOGIN
// CREATE CONTROLLER
// CONTROLLER.SPEC.TS
// WRITE POSSIBLE TESTS
// CREATE INDEX.TS
// START WRITING THE ROUTE
// FIRST OF ALL WRITE THE DTOS IF REQUIRED.
// IF THERE IS A NEED FOR A SERVICE THEN WRITE IT.
// / FOR WRITING SERVICES FIRST WRITE TESTS FOR THEM
// / THEN GO FOR THE IMPLEMENTATION
