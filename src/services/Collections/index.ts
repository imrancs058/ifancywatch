import ErrorCodes from "../../constants/error-codes"
import { ServiceFailedResponse, ServiceResponse, ServiceSuccessResponse } from "../../utils/service"
import { Collection } from "./types"
import CollectionModel from "../../models/collection"

export default class CollectionsService {
  async getAllCollections() {
    const result = await CollectionModel.find()
    if (result) {
      return ServiceResponse.success({
        data: result,
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data: { message: "No Data found" },
      status: 404,
    })
  }

  async addCollection(data: Collection): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    try {
      const savedData = await CollectionModel.create({
        brand_name: data.brand_name,
        keyword: data.keyword,
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
  async deleteCollection(id: any): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    const result = await CollectionModel.findByIdAndRemove({
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

  async getDataAgainstKeywordFromProductTable(
    body: any
  ): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    try {
      const dt_total_length: any = await CollectionModel.count()
      const result = await CollectionModel.aggregate([
        {
          $match: {
            brand_name: body.brand_name,
            keyword: body.collection,
          },
        },
        {
          $lookup: {
            from: "products",
            let: {
              keyword: "$keyword",
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $regexMatch: {
                      input: "$product_name",
                      regex: "$$keyword",
                      options: "i",
                    },
                  },
                },
              },
              {
                $facet: {
                  data: [{ $skip: parseInt(body.start) }, { $limit: parseInt(body.length) }],
                },
              },
            ],
            as: "products",
          },
        },
      ])
      if (result) {
        return ServiceResponse.success({
          data: {
            recordsTotal: dt_total_length,
            recordsFiltered: result.length,
            data: result,
          },
          status: 201,
        })
      }
      return ServiceResponse.failed({
        code: ErrorCodes.USER_NOT_FOUND,
        data: {
          message: "No Record found",
        },
        status: 404,
      })
    } catch (error: any) {
      return ServiceResponse.failed({ code: ErrorCodes.SERVER_ERR })
    }
  }

  async getSingleDataAgainstKeywordFromProductTable(
    brand_name: any
  ): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    try {
      let keywords
      const result = await CollectionModel.aggregate([
        {
          $match: {
            brand_name: brand_name,
          },
        },
        {
          $lookup: {
            from: "product-sorts",
            //regex in pipeline
            let: {
              keyword: {
                $cond: [
                  { $eq: ["$keyword", "MENS WATCHES"] },
                  "Men's Watches",
                  {
                    $cond: [{ $eq: ["$keyword", "LADIES WATCHES"] }, "Women's Watches", "$keyword"],
                  },
                ],
              },
            },
            pipeline: [
              {
                $match: {
                  $or: [
                    {
                      $and: [
                        { product_name: { $regex: new RegExp("Watch", "i") } },
                        { product_name: { $not: { $regex: new RegExp("Bracelet Watch", "i") } } },
                        { product_name: { $not: { $regex: new RegExp("Woven Strap Watch", "i") } } },
                        { brand_name: brand_name },

                        {
                          $expr: {
                            $regexMatch: {
                              input: "$product_name",
                              regex: "$$keyword",
                              options: "i",
                            },
                          },
                        },
                      ],
                    },
                    {
                      $and: [
                        { product_name: { $regex: new RegExp("Watch", "i") } },
                        { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
                        { description: { $not: { $regex: "jewellery" } } },
                        { brand_name: brand_name },

                        {
                          $expr: {
                            $regexMatch: {
                              input: "$category_name",
                              regex: "$$keyword",
                              // options: "i",
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            as: "product",
          },
        },
        {
          $project: {
            _id: 1,
            brand_name: 1,
            keyword: 1,
            top_record: {
              $slice: ["$product", 1],
            },
          },
        },
      ])
      if (result) {
        return ServiceResponse.success({
          data: result,
          status: 201,
        })
      }
      return ServiceResponse.failed({
        code: ErrorCodes.USER_NOT_FOUND,
        data: {
          message: "No Record found",
        },
        status: 404,
      })
    } catch (error: any) {
      return ServiceResponse.failed({ code: ErrorCodes.SERVER_ERR })
    }
  }
}
