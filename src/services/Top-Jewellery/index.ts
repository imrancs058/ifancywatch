import ErrorCodes from "../../constants/error-codes"
import { ServiceFailedResponse, ServiceResponse, ServiceSuccessResponse } from "../../utils/service"
import { CurrentBrandImages } from "./types"
// import TopSellerJewellery from "../../models/top-seller"
import TopSellerJewellery from "../../models/top-seller-jewellery"

export default class TopJewelleryService {
  
  async getAllJewelleryBrandImages() {
    const record = await TopSellerJewellery.find()
    if (record) {
      return ServiceResponse.success({
        data: record,
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data: { message: "No record found" },
      status: 404,
    })
  }

  async getTopSellerJewelleryData() {
    const record = await TopSellerJewellery.aggregate([
      {
        $lookup: {
          from: "product-sorts",
          let: { top_seller: "$top_seller" },
          pipeline: [
            { $match: {
              $expr: { $eq: ["$brand_name", "$$top_seller"] },
              category_name:{$ne:"Women's Jewellery"}
              },
            },
            { $group: { _id: "$top_seller", doc: { $first: "$$ROOT" } } },
          ],
          as: "products",
        },
      },
      // {
      //   $unwind:{path:"$images",preserveNullAndEmptyArrays:true}
      // },
    ])
    if (record) {
      return ServiceResponse.success({
        data:{
          record_filtered:record.length,
          data:record,
        },
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data: { message: "No record found" },
      status: 404,
    })
  }

  async addProduct(
      data: CurrentBrandImages
  ): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    try {
      const findOne = await TopSellerJewellery.findOne({top_seller_jewellery:data.brand_name});
      if(findOne){
        return ServiceResponse.failed({
          code: ErrorCodes.USER_NOT_FOUND,
          data: {
            message: "Brand already exist",
          },
          status: 404,
        })
      }
      const savedData = await TopSellerJewellery.create({ 
        top_seller_jewellery: data.brand_name ,
        image: data.image,
      })
      console.log(savedData)
      return ServiceResponse.success({
        data: savedData,
        status: 201,
      })
    } catch (e: any) {
      console.log(e)
      return ServiceResponse.failed({ code: ErrorCodes.SERVER_ERR })
    }
  }

  async deleteBrand(id: string): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    const result = await TopSellerJewellery.findByIdAndRemove({
      _id: id,
    })
    if (result) {
      return ServiceResponse.success({
        data: result,
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data: {
        message: "No collection found",
      },
      status: 404,
    })
  }
}
