import ProductModel from "../../models/product"
import ErrorCodes, { ErrorCodesMeta } from "../../constants/error-codes"
import { ServiceFailedResponse, ServiceResponse, ServiceSuccessResponse } from "../../utils/service"

export default class ProductService {
  async add(data: any): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    try {
      var deta = JSON.parse(data)
      const resp = await ProductModel.create(deta)
      return ServiceResponse.success({
        data: {},
        status: 201,
      })
    } catch (e: any) {
      console.log(e)
      return ServiceResponse.failed({ code: ErrorCodes.SERVER_ERR })
    }
  }

  async getByKey(key: any) {
    const data: any = await ProductModel.findOne(key)
    if (data) {
      return data._doc
    }

    return null
  }
}
