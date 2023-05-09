import TokenService from "."
import { ServiceResponse } from "../../utils/service"

describe("Token Service", () => {
  const service = new TokenService()
  describe("Create JWT Token", () => {
    it("should create a valid jwt token", async () => {
      const tokenRes = await service.createJwtToken({ token: "shams", id: "shams" })

      expect(tokenRes).toEqual(
        expect.objectContaining(ServiceResponse.success({ data: { token: expect.any(String) } }))
      )
    })
  })
})
