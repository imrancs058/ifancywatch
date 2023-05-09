import ImagesModel from "../../models/images"
import ErrorCodes, { ErrorCodesMeta } from "../../constants/error-codes"
import { ServiceFailedResponse, ServiceResponse, ServiceSuccessResponse } from "../../utils/service"

export default class ProductService {
  async add(data: []): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    try {
      await ImagesModel.deleteMany({})
      ImagesModel.insertMany(data)
      return ServiceResponse.success({
        data: {},
        status: 201,
      })
    } catch (e: any) {
      // if (e.message.includes("duplicate")) {
      //   const savedData = await ImagesModel.updateOne({ aw_product_id: data.aw_product_id }, data)
      //   return ServiceResponse.success({
      //     data: savedData,
      //     status: 201,
      //   })
      // }
      console.log(e)
      return ServiceResponse.failed({ code: ErrorCodes.SERVER_ERR })
    }
  }

  async getByKey(key: any) {
    const data: any = await ImagesModel.findOne(key)
    if (data) {
      return data._doc
    }

    return null
  }
}
