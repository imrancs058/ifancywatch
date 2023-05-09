import "reflect-metadata"
import request from "supertest"
import { Application } from "express"
import loaders from "../../loaders"
import { ApiResponse } from "../../utils/api"
import ErrorCodes, { ErrorCodesMeta } from "../../constants/error-codes"
import { TestUser } from "../../constants/test-constants"
import UserService from "../../services/User"
import { UserStatuses } from "../../constants/user-constants"
import TokenService from "../../services/Tokens"
import { SuccessCodesMeta } from "../../constants/success-codes"

let app: Application
beforeAll(async () => {
  app = await loaders.expressLoaderTest()
})

describe("User Authorization: /authorize", () => {
  describe("POST /authorize/login", () => {
    beforeAll(async () => {
      const s = new UserService()
      const userToVerify = await s.add(TestUser[0])

      s.updateUserStatus(userToVerify.data.id, UserStatuses.VERIFIED)

      await s.add(TestUser[1])
    })

    it("should return bad request", async () => {
      const payload = { email: TestUser[0].email }
      return request(app)
        .post("/authorize/login")
        .send(payload)
        .expect(400)
        .expect("Content-Type", /json/)
        .then(res => {
          const apiResponse = ApiResponse.failed({
            statusCode: 400,
            errorCode: ErrorCodes.INVALID_BODY,
            message: ErrorCodesMeta.INVALID_BODY.message,
            data: { body: expect.any(Object) },
          })

          expect(res.body).toEqual(expect.objectContaining(apiResponse))
        })
    })
    it("should return invalid user not found with this email and password", async () => {
      const payload = {
        email: TestUser[2].email,
        password: TestUser[2].password,
      }
      return request(app)
        .post("/authorize/login")
        .send(payload)
        .expect(404)
        .expect("Content-Type", /json/)
        .then(res => {
          const apiResponse = ApiResponse.failed({
            statusCode: 404,
            errorCode: ErrorCodes.USER_NOT_FOUND,
            message: ErrorCodesMeta.USER_NOT_FOUND.message,
            data: { email: payload.email },
          })

          expect(res.body).toEqual(expect.objectContaining(apiResponse))
        })
    })
    it("should return user is not verified", async () => {
      const payload = {
        email: TestUser[1].email,
        password: TestUser[1].password,
      }
      return request(app)
        .post("/authorize/login")
        .send(payload)
        .expect(401)
        .expect("Content-Type", /json/)
        .then(res => {
          const apiResponse = ApiResponse.failed({
            statusCode: 401,
            errorCode: ErrorCodes.USER_NOT_VERIFIED,
            message: ErrorCodesMeta.USER_NOT_VERIFIED.message,
            data: { email: payload.email },
          })

          expect(res.body).toEqual(expect.objectContaining(apiResponse))
        })
    })
    it("should return a valid token", async () => {
      const payload = {
        email: TestUser[0].email,
        password: TestUser[0].password,
      }
      return request(app)
        .post("/authorize/login")
        .send(payload)
        .expect(200)
        .expect("Content-Type", /json/)
        .then(res => {
          const apiResponse = ApiResponse.success({
            statusCode: 200,
            message: SuccessCodesMeta.User_AUTHORIZED_SUCCESSFULLY.message,
            data: { token: expect.any(String) },
          })

          expect(res.body).toEqual(expect.objectContaining(apiResponse))
        })
    })
  })

  describe("GET /authorize/logout", () => {
    it("should return user not authorized", () => {
      request(app)
        .post("/authorize/logout")
        .set("Authorization", "nothing here")
        .expect(401)
        .expect("Content-Type", /json/)
        .then(res => {
          const apiResponse = ApiResponse.failed({
            statusCode: 401,
            errorCode: ErrorCodes.AUTHORIZATION_FAILED,
            message: ErrorCodesMeta.AUTHORIZATION_FAILED.message,
            data: {},
          })

          expect(res.body).toEqual(expect.objectContaining(apiResponse))
        })
    })
    it("should logout the user", async () => {
      const s = new UserService()
      const userToVerify = await s.add(TestUser[0])
      s.updateUserStatus(userToVerify.data.id, UserStatuses.VERIFIED)
      const userRes = await new UserService().getUserByEmail(TestUser[0].email)
      const jwtToken = await new TokenService().createJwtToken({
        id: userRes!.id,
        token: userRes!.secure_token,
      })

      return request(app)
        .post("/authorize/logout")
        .set("Authorization", `Bearer ${jwtToken.data.token}`)
        .expect(200)
        .expect("Content-Type", /json/)
        .then(res => {
          const apiResponse = ApiResponse.success({
            statusCode: 200,
            message: SuccessCodesMeta.USER_LOGGED_OUT_SUCCESSFULLY.message,
            data: {},
          })

          expect(res.body).toEqual(expect.objectContaining(apiResponse))
        })
    })
  })
})
