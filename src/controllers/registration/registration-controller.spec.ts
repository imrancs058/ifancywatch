import "reflect-metadata"
import request from "supertest"
import { Application } from "express"
import loaders from "../../loaders"
import { UserStatuses } from "../../constants/user-constants"
import { ApiResponse } from "../../utils/api"
import ErrorCodes, { ErrorCodesMeta } from "../../constants/error-codes"
import { CodeVerificationUnProtectedIntents } from "../../constants/code-verification-constants"
import { TestUser } from "../../constants/test-constants"
import { SuccessCodesMeta } from "../../constants/success-codes"
import UserService from "../../services/User"

let app: Application
beforeAll(async () => {
  app = await loaders.expressLoaderTest()
})

describe("Registration Controller: /register", () => {
  describe("POST /register", () => {
    it("should register user", async () => {
      const payload = {
        name: TestUser[0].name,
        phone: TestUser[0].phone.toString(),
        email: TestUser[0].email,
        password: TestUser[0].password,
      }
      return request(app)
        .post("/register")
        .send(payload)
        .expect("Content-Type", /json/)
        .then(res => {
          const apiResponse = ApiResponse.success({
            statusCode: 201,
            message: SuccessCodesMeta.USER_REGISTERED_SUCCESSFULLY.message,
            data: {
              username: expect.any(String),
              name: expect.any(String),
              phone: expect.any(Number),
              email: payload.email,
              user_status: UserStatuses.REGISTERED,
            },
          })

          expect(res.body).toEqual(apiResponse)
        })
    })

    it("should return user already exists", async () => {
      const payload = {
        name: TestUser[0].name,
        phone: TestUser[0].phone.toString(),
        email: TestUser[0].email,
        password: TestUser[0].password,
      }
      return request(app)
        .post("/register")
        .send(payload)
        .expect("Content-Type", /json/)
        .then(res => {
          const apiResponse = ApiResponse.failed({
            statusCode: 409,
            message: ErrorCodesMeta.PHONE_ALREADY_EXISTS.message,
            errorCode: ErrorCodes.PHONE_ALREADY_EXISTS,
            data: expect.any(Object),
          })

          expect(res.body).toEqual(expect.objectContaining(apiResponse))
        })
    })
  })
})

/**
 * sent to email
 * send to phone
 * user already verified
 * email not found
 * phone not found
 * email submission error
 * phone submission error
 */
