import ProductModel from "../../models/product"
import ErrorCodes, { ErrorCodesMeta } from "../../constants/error-codes"
import { ServiceFailedResponse, ServiceResponse, ServiceSuccessResponse } from "../../utils/service"
import { TableProduct, CategoryTable } from "./types"
import SortProductModel from "../../models/product-sort"
export default class ProductService {
  async deleteBrand(id: string): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    const result = await ProductModel.findByIdAndRemove({
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
  async find(data: TableProduct): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    try {
      console.log("1111")
      const dt_total_length: any = await ProductModel.count()
      if (data.search!.value != "") {
        const result = await ProductModel.aggregate([
          {
            $match: {
              aw_product_id: {$regex: new RegExp(data.search!.value, "i")},
            },
          },
          {
            $skip: parseInt(data.start),
          },
          {
            $limit: parseInt(data.length),
          },
          {
            $lookup: {
              from: "availabilities",
              localField: "aw_product_id",
              foreignField: "aw_product_id",
              as: "availabilities",
            },
          },
          {$unwind: {path: "$availabilities", preserveNullAndEmptyArrays: true}},
          {
            $lookup: {
              from: "customs",
              localField: "aw_product_id",
              foreignField: "aw_product_id",
              as: "customs",
            },
          },
          {$unwind: {path: "$customs", preserveNullAndEmptyArrays: true}},
          {
            $lookup: {
              from: "delivery-and-specifications",
              localField: "aw_product_id",
              foreignField: "aw_product_id",
              as: "delivery_and_terms",
            },
          },
          {$unwind: {path: "$delivery_and_terms", preserveNullAndEmptyArrays: true}},
          {
            $lookup: {
              from: "ids",
              localField: "aw_product_id",
              foreignField: "aw_product_id",
              as: "ids",
            },
          },
          {$unwind: {path: "$ids", preserveNullAndEmptyArrays: true}},
          {
            $lookup: {
              from: "images",
              localField: "aw_product_id",
              foreignField: "aw_product_id",
              as: "images",
            },
          },
          {$unwind: {path: "$images", preserveNullAndEmptyArrays: true}},
          {
            $lookup: {
              from: "others",
              localField: "aw_product_id",
              foreignField: "aw_product_id",
              as: "others",
            },
          },
          {$unwind: {path: "$others", preserveNullAndEmptyArrays: true}},
          {
            $lookup: {
              from: "prices",
              localField: "aw_product_id",
              foreignField: "aw_product_id",
              as: "prices",
            },
          },
          {$unwind: {path: "$prices", preserveNullAndEmptyArrays: true}},
          {
            $lookup: {
              from: "product-categories",
              localField: "aw_product_id",
              foreignField: "aw_product_id",
              as: "product_categories",
            },
          },
          {$unwind: {path: "$product_categories", preserveNullAndEmptyArrays: true}},
          {
            $lookup: {
              from: "product-specifications",
              localField: "aw_product_id",
              foreignField: "aw_product_id",
              as: "product_specifications",
            },
          },
          {$unwind: {path: "$product_specifications", preserveNullAndEmptyArrays: true}},
          {
            $lookup: {
              from: "ratings",
              localField: "aw_product_id",
              foreignField: "aw_product_id",
              as: "ratings",
            },
          },
          {$unwind: {path: "$ratings", preserveNullAndEmptyArrays: true}},
        ])
        const refinedResponse = result.map(i => {
          const item = {
            ...i,
            ...i.availabilities,
            ...i.customs,
            ...i.delivery_and_terms,
            ...i.ids,
            ...i.images,
            ...i.others,
            ...i.prices,
            ...i.product_categories,
            ...i.product_specifications,
            ...i.ratings,
          }
          delete item.availabilities
          delete item.customs
          delete item.delivery_and_terms
          delete item.ids
          delete item.images
          delete item.others
          delete item.prices
          delete item.product_categories
          delete item.product_specifications
          delete item.ratings
          return item
        })
        return ServiceResponse.success({
          data: {
            draw: parseInt(data.draw),
            recordsTotal: dt_total_length,
            recordsFiltered: result.length,
            data: refinedResponse,
          },
          status: 201,
        })
      } else {
        const result = await ProductModel.aggregate([
          {
            $skip: parseInt(data.start),
          },
          {
            $limit: parseInt(data.length),
          },
          {
            $lookup: {
              from: "availabilities",
              localField: "aw_product_id",
              foreignField: "aw_product_id",
              as: "availabilities",
            },
          },
          {$unwind: {path: "$availabilities", preserveNullAndEmptyArrays: true}},
          {
            $lookup: {
              from: "customs",
              localField: "aw_product_id",
              foreignField: "aw_product_id",
              as: "customs",
            },
          },
          {$unwind: {path: "$customs", preserveNullAndEmptyArrays: true}},
          {
            $lookup: {
              from: "delivery-and-specifications",
              localField: "aw_product_id",
              foreignField: "aw_product_id",
              as: "delivery_and_terms",
            },
          },
          {$unwind: {path: "$delivery_and_terms", preserveNullAndEmptyArrays: true}},
          {
            $lookup: {
              from: "ids",
              localField: "aw_product_id",
              foreignField: "aw_product_id",
              as: "ids",
            },
          },
          {$unwind: {path: "$ids", preserveNullAndEmptyArrays: true}},
          {
            $lookup: {
              from: "images",
              localField: "aw_product_id",
              foreignField: "aw_product_id",
              as: "images",
            },
          },
          {$unwind: {path: "$images", preserveNullAndEmptyArrays: true}},
          {
            $lookup: {
              from: "others",
              localField: "aw_product_id",
              foreignField: "aw_product_id",
              as: "others",
            },
          },
          {$unwind: {path: "$others", preserveNullAndEmptyArrays: true}},
          {
            $lookup: {
              from: "prices",
              localField: "aw_product_id",
              foreignField: "aw_product_id",
              as: "prices",
            },
          },
          {$unwind: {path: "$prices", preserveNullAndEmptyArrays: true}},
          {
            $lookup: {
              from: "product-categories",
              localField: "aw_product_id",
              foreignField: "aw_product_id",
              as: "product_categories",
            },
          },
          {$unwind: {path: "$product_categories", preserveNullAndEmptyArrays: true}},
          {
            $lookup: {
              from: "product-specifications",
              localField: "aw_product_id",
              foreignField: "aw_product_id",
              as: "product_specifications",
            },
          },
          {$unwind: {path: "$product_specifications", preserveNullAndEmptyArrays: true}},
          {
            $lookup: {
              from: "ratings",
              localField: "aw_product_id",
              foreignField: "aw_product_id",
              as: "ratings",
            },
          },
          {$unwind: {path: "$ratings", preserveNullAndEmptyArrays: true}},
        ])
        const refinedResponse = result.map(i => {
          const item = {
            ...i,
            ...i.availabilities,
            ...i.customs,
            ...i.delivery_and_terms,
            ...i.ids,
            ...i.images,
            ...i.others,
            ...i.prices,
            ...i.product_categories,
            ...i.product_specifications,
            ...i.ratings,
          }
          delete item.availabilities
          delete item.customs
          delete item.delivery_and_terms
          delete item.ids
          delete item.images
          delete item.others
          delete item.prices
          delete item.product_categories
          delete item.product_specifications
          delete item.ratings
          return item
        })
        return ServiceResponse.success({
          data: {
            draw: parseInt(data.draw),
            recordsTotal: dt_total_length,
            recordsFiltered: dt_total_length,
            data: refinedResponse,
          },
          status: 201,
        })
      }
    } catch (error: any) {
      return ServiceResponse.failed({code: ErrorCodes.SERVER_ERR})
    }
  }

  async getAllProducts(query: any) {
    const dt_total_length: any = await ProductModel.count()
    const result = await ProductModel.aggregate([
      {
        $skip: parseInt(query.start),
      },
      {
        $limit: parseInt(query.length),
      },
    ])
    return ServiceResponse.success({
      data: {
        draw: parseInt(query.draw),
        recordsTotal: dt_total_length,
        recordsFiltered: result.length,
        data: result,
      },
      status: 201,
    })
  }

  async getDataByCategory(
      data: CategoryTable
  ): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    try {
      const dt_total_length: any = await ProductModel.count()
      const search: any = data.search!.value
      const {
        start,
        length,
        draw,
        minPrice,
        maxPrice,
        diameter,
        water_resistant,
        movement,
        strap_material,
        dial_color,
        category_name,
        brand_name,
      } = data
      const filteredRecords = await ProductModel.find({
        $or: [
          {
            product_name: {$regex: new RegExp(search, "i")},
            category_name: category_name,
            brand_name: {$in: brand_name},
            description: {$regex: new RegExp(diameter, "i")},
          },
        ],
      })
      console.log(filteredRecords.length)
      const result = await ProductModel.aggregate([
        {
          $match: {
            $and: [
              category_name ? {category_name: category_name} : {},
              brand_name
                  ? {
                    brand_name: {
                      $in: brand_name,
                    },
                  }
                  : {},
              search ? {product_name: {$regex: new RegExp(search, "i")}} : {},
              diameter ? {description: {$regex: new RegExp(diameter, "i")}} : {},
              water_resistant ? {description: {$regex: new RegExp(water_resistant, "i")}} : {},
              movement ? {description: {$regex: new RegExp(movement, "i")}} : {},
              // dial_color ? { description: { $regex: new RegExp(dial_color, "i") } } : {},
              //text index search
              dial_color ? {$text: {$search: dial_color}} : {},
              strap_material ? {description: {$regex: new RegExp(strap_material, "i")}} : {},
              minPrice ? {search_price: {$gte: parseInt(minPrice)}} : {},
              maxPrice ? {search_price: {$lte: parseInt(maxPrice)}} : {},
            ],
          },
        },
        {
          $count: "totalCount",
        },
        {
          $skip: parseInt(start),
        },
        {
          $limit: parseInt(length),
        },
        {
          $lookup: {
            from: "images",
            let: {product_id: "$aw_product_id"},
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$aw_product_id", "$$product_id"],
                  },
                },
              },
            ],
            as: "images",
          },
        },
        {
          $project: {
            aw_product_id: 1,
            category_name: 1,
            product_name: 1,
            search_price: 1,
            description: 1,
            brand_name: 1,
            "images.aw_image_url": 1,
            "images.aw_product_id": 1,
          },
        },
      ])
      return ServiceResponse.success({
        data: {
          draw: parseInt(draw),
          recordsTotal: dt_total_length,
          recordsFiltered: filteredRecords.length,
          data: result,
        },
        status: 201,
      })
    } catch (error: any) {
      return ServiceResponse.failed({code: ErrorCodes.SERVER_ERR})
    }
  }

  async getCurrentBrandWithImages(): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    const result = await ProductModel.aggregate([
      {
        $lookup: {
          from: "currentbrands",
          let: {brand_name: "$brand_name"},
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$brand_name", "$$brand_name"],
                },
              },
            },
          ],
          as: "currentBrandImages",
        },
      },
      {
        $unwind: "$currentBrandImages",
      },
      {
        $group: {
          _id: "$brand_name",
          // images: {
          //   $push: "$currentBrandImages",
          // }
        },
      },
    ])
    if (result.length > 0) {
      return ServiceResponse.success({
        data: result,
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data: {message: "No brand images found"},
      status: 404,
    })
  }

  async getDataByRecommendation(brandName: string): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    const result = await SortProductModel.aggregate([
      {
        $match:{
          $and:[
            {brand_name: brandName},
            {product_name: {$regex: new RegExp("Watch", "i")}}
          ]
        },
      }
    ]).limit(10);
    if (result.length > 0) {
      return ServiceResponse.success({
        data:{
          data: result,
          status: 201,
        }
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data: {message: "No brand found"},
      status: 404,
    })
  }
}

//remove null values from object
const removeNullDataFromObject = (product: any) => {
  Object.keys(product._doc).forEach(
    (k: any) =>
      (product._doc[k] === null ||
        product._doc[k] === undefined ||
        product._doc[k] === "" ||
        k === "_id") &&
      delete product._doc[k]
  )
  return product
}
