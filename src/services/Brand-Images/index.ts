/* eslint-disable lines-between-class-members */
/* eslint-disable linebreak-style */
import ErrorCodes from "../../constants/error-codes"
import { ServiceFailedResponse, ServiceResponse, ServiceSuccessResponse } from "../../utils/service"
import { BrandImages } from "./types"
import BrandImagesModel from "../../models/brandImages"
import ProductSpecificationModel from "../../models/product-specification"
import ProductModel from "../../models/product"
import SortProductModel from "../../models/product-sort"

export default class BrandImagesService {
  async add(data: BrandImages): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    try {
      
      const existingBrandImages = await BrandImagesModel.findOne({
        brand_name: data.brand_name,
        category: data.category,
        title: data.title,
        description: data.description,
        // productCategory: data.productCategory,
      })
      if (existingBrandImages) {
        const arr: any = data.image
        arr.push(...existingBrandImages._doc.image)
        const updateBrandImages = await BrandImagesModel.findOneAndUpdate(
          {
            brand_name: data.brand_name,
            category: data.category,
            title: data.title,
            description: data.description,
          },
          {
            image: arr,
          },
          {
            new: true,
          }
        )
        return ServiceResponse.success({ data: updateBrandImages, status: 201 })
      }

      const savedData = await BrandImagesModel.create({
        brand_name: data.brand_name,
        category: data.category,
        productCategory: data.productCategory,
        description: data.description,
        title: data.title,
        image: data.image,
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

  async getAllBrandNames() {
    const brandNames = await ProductModel.find({product_name:  new RegExp('Pre-Owned', 'i')}, { brand_name: 1, _id: 0 }).distinct("brand_name")
    if (brandNames) {
      return brandNames
    }
    return null
  }

  async getAllJewelleryBrandNames() {
    const brandNames = await ProductModel.find({category_name: "Women's Jewellery"}, { brand_name: 1, _id: 0 }).distinct("brand_name")
    if (brandNames) {
      return brandNames
    }
    return null
  }

  async getAllWatchStrapBrandNames() {
    console.log("qqqqqqqq")
    const brandNames = await SortProductModel.aggregate([
      {
        $match: {
          $and: [
            // category_name ? { category_name } : {},
            {merchant_category:{  $regex : new RegExp('strap','i')  } },
            {aw_thumb_url:{ $not: { $regex : new RegExp('.gif','i') } } },
            {product_name:{ $not: { $regex : new RegExp('Pen','i') } } },
            {product_name:{ $not: { $regex : new RegExp('card holder','i') } } },
            {category_name:{ $not: { $regex : new RegExp('Jewellery','i') } } },
            {description:{ $not: { $regex : new RegExp('jewelry','i') } } },
            {description:{ $not: { $regex : 'jewellery'} } }
          ],
        },
      },
      {
        $group: {
            _id: {
                "brand_name" : "$brand_name",
            },
            // count: { $sum: 1 }
        }
      },
    ])
    if (brandNames) {
      console.log(brandNames)
      for(let i=0;i<brandNames.length;i++){
        console.log(brandNames[i]._id['brand_name'])
      }
      return brandNames
    }
    return null
  }

  async brandById(id: string) {
    const category = await BrandImagesModel.findById(id)
    if (category) {
      return ServiceResponse.success({
        data: category,
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data: {
        message: "No Brand found",
      },
      status: 404,
    })
  }

  async productById(id: string) {
    console.log('start'+id)
    const product = await SortProductModel.findById({_id:id})
    if (product) {
      console.log('end'+product)
      return ServiceResponse.success({
        data: product,
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.NO_RECORD_FOUND_WITH_THIS_ID,
      status: 404,
    })
  }

  async getProductByModelProductNumber(modelProductNumber: string) {
    console.log('start'+modelProductNumber)
    const product = await SortProductModel.findOne({mpn:modelProductNumber})
    if (product) {
      console.log('end'+product)
      return ServiceResponse.success({
        data: product,
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.NO_RECORD_FOUND_WITH_THIS_ID,
      status: 404,
    })
  }

  async brandByName(name: any) {
    const category = await BrandImagesModel.find({ brand_name: name })
    if (category) {
      return ServiceResponse.success({
        data: category,
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data: {
        message: "No Brand found",
      },
      status: 404,
    })
  }

  async brandByCategory(name: any) {
    const category = await BrandImagesModel.find({ category: name })
    if (category) {
      return ServiceResponse.success({
        data: category,
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data: {
        message: "No Brand found",
      },
      status: 404,
    })
  }

  async getAllBrandsWithImages() {
    const brandImages = await BrandImagesModel.find()
    if (brandImages) {
      return ServiceResponse.success({
        data: brandImages,
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data: { message: "No brand images found" },
      status: 404,
    })
  }

  //get brands with logo's
  async getFirstThirtyBrandsWithLogoFromCsvDataFile() {
    const brandImages = await ProductModel.aggregate([
      {
        $group: {
          _id: "$brand_name",
        },
      },
      {
        $project: {
          _id: 0,
          brand_name: "$_id",
        },
      },
    ]).limit(30)
    if (brandImages) {
      return ServiceResponse.success({
        data: brandImages,
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data: { message: "No brand images found" },
      status: 404,
    })
  }

  async getDistinctBrandData() {
    const brandImages = await SortProductModel.aggregate([
      {
        $match :{
          $and: [
            {category_name : "Men's Watches"},
            {merchant_category:{$ne:"Watch Winders"}}
          ],
        },
      },
      {
        $group: {
          _id: "$brand_name",
          doc:{$first:"$$ROOT"},
        }
      },
    ])
    if (brandImages) {
      return ServiceResponse.success({
        data: {
          total_record: await SortProductModel.count(),
          filtered_record:brandImages.length,
          data:brandImages,
        },
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data: { message: "No brand images found" },
      status: 404,
    })
  }

  async getSecondThirtyBrandsWithProductImagesFromCsvDataFile() {
    const brandImages = await ProductModel.aggregate([
      { $skip: 200 },
      { $limit: 200 },
      {
        $lookup: {
          from: "images",
          let: { product_id: "$aw_product_id" },
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
        $group: {
          _id: {
            _id: "$_id",
            brand_name: "$brand_name",
            product_image: "$images.aw_image_url",
            search_price: "$search_price",
            category_name: "$category_name",
            merchant_name: "$merchant_name",
            aw_product_id: "$aw_product_id",
            product_name: "$product_name",
            merchant_product_id: "$merchant_product_id",
            data_feed_id: "$data_feed_id",
            category_id: "$category_id",
            currency: "$currency",
            condition: "$condition",
            model_number: "$model_number",
          },
        },
      },
    ])

    if (brandImages) {
      return ServiceResponse.success({
        data: {
          total_record: await ProductModel.count(),
          filtered_record:brandImages.length,
          data:brandImages,
        },
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data: { message: "No brand images found" },
      status: 404,
    })
  }

  async getBrandsCategories() {
    const products = await ProductSpecificationModel.aggregate([
      {
        $lookup: {
          from: "products",
          let: { aw_product: "$aw_product_id" },
          pipeline: [
            { $match: { $expr: { $and: [{ $eq: ["$aw_product_id", "$$aw_product"] }] } } },
          ],
          as: "category",
        },
      },
      {
        $group: {
          _id: {
            brand_name: "$brand_name",
            category_name: "$category.category_name",
          },
        },
      },
      {
        $project: {
          _id: 0,
          aw_product_id: 1,
          // brand_name: 1,
          // brand_id: 1,s
          brand_name: "$_id.brand_name",
          "category.category_name": "$_id.category_name",
          // "category.category_id": 1,
          // "category.merchant_name": 1,
        },
      },
    ])
    if (products) {
      return ServiceResponse.success({
        data: products,
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data: { message: "No Data Found" },
      status: 404,
    })
  }

  async getByBrandName(brandName: string) {
    const products = await BrandImagesModel.find({
      brand_name: brandName,
    })
    if (products) {
      return ServiceResponse.success({
        data: products,
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data: { message: "No Data Found" },
      status: 404,
    })
  }

  // get data by brand name and category
  async getBrandImagesByBrandNameAndCategory(brandName: string, category: string) {
    const products = await ProductModel.aggregate([
      {
        $match: {
          category_name: category,
        },
      },
      {
        $lookup: {
          from: "product-specifications",
          let: { product_id: "$aw_product_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$aw_product_id", "$$product_id"] },
                    { $eq: ["$brand_name", brandName] },
                  ],
                },
              },
            },
          ],
          as: "product_specifications",
        },
      },
    ]).limit(20)
    if (products) {
      return ServiceResponse.success({
        data: products,
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data: { message: "No Data Found" },
      status: 404,
    })
  }
  
  async editBrandImage(id: string, data: BrandImages) {
    const brandImage = await BrandImagesModel.findByIdAndUpdate(id, data)
    if (brandImage) {
      return ServiceResponse.success({
        data: brandImage,
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data: {
        message: "No brand Image found",
      },
      status: 404,
    })
  }

  async deleteBrand(id: string): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    const result = await BrandImagesModel.findByIdAndRemove({
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
