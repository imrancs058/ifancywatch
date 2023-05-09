import ErrorCodes from "../../constants/error-codes"
import { ServiceFailedResponse, ServiceResponse, ServiceSuccessResponse } from "../../utils/service"
import { CurrentBrandImages } from "./types"
import TopWatchStrapSeller from "../../models/top-watch-strap-seller"

export default class TopWatchStrapSellersService {
  async getAllCurrentBrandImages() {
    const record = await TopWatchStrapSeller.find()
    console.log(record)
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

  async getTopSellerData(brand_type:any) {
    console.log("11111")
    const record = await TopWatchStrapSeller.aggregate([
      {
        $match:{
          $or: [
            brand_type ? { brand_type} : {},
          ],
        }
      },
      {
        $lookup: {
          from: "product-sorts",
          let: {
             top_seller: "$top_seller" ,
             brand_type: "$brand_type"
            },
          pipeline: [
            { $match: {
              // $and:[
              //    {brand_name: { $regex: new RegExp("$$top_seller", "i") }},
              //    {category_name: { $regex: new RegExp("$$brand_type", "i") }},     
              // ]
              $and: [
                {
                  $expr: {
                    $eq: ['$brand_name', '$$top_seller'],
                  },
                },
                {
                  $expr: {
                    $eq: ['$category_name', '$$brand_type'],
                  },
                },
              ],
              
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
      const findOne = await TopWatchStrapSeller.findOne({top_seller:data.brand_name});
      if(findOne){
        return ServiceResponse.failed({
          code: ErrorCodes.USER_NOT_FOUND,
          data: {
            message: "Brand already exist",
          },
          status: 404,
        })
      }
      const savedData = await TopWatchStrapSeller.create({
         top_seller: data.brand_name,
         brand_type: "Watch Strap" 
        })
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
    const result = await TopWatchStrapSeller.findByIdAndRemove({
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
