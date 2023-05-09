import ErrorCodes from "../../constants/error-codes"
import { ServiceFailedResponse, ServiceResponse, ServiceSuccessResponse } from "../../utils/service"
import {  ProductImagesInterface } from "./types";
import BrandImagesModel from "../../models/brandImages"
import ProductSpecificationModel from "../../models/product-specification"
import ProductModel from "../../models/product"
import ProductImages from "../../models/productImages";
const mongoose = require('mongoose');

export default class ProductImagesService {

  async getAllProductImages() {
    const productImages = await ProductImages.find()
    if (productImages) {
      return ServiceResponse.success({
        data: productImages,
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data: { message: "No brand images found" },
      status: 404,
    })
  }

  async addProduct (data: ProductImagesInterface): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    try {
      const existingBrandImages = await ProductImages.findOne({
        aw_product_id: data.aw_product_id,
      })
      if (existingBrandImages) {
        const arr: any = data.image
        arr.push(...existingBrandImages._doc.image)
        const updateBrandImages = await ProductImages.findOneAndUpdate({
          aw_product_id: data.aw_product_id,
        }, {
          image: arr,
        }, {
          new: true,
        })
        return ServiceResponse.success({ data: updateBrandImages, status: 201 })
      }

      const savedData = await ProductImages.create({
        aw_product_id: data.aw_product_id,
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
  async deleteBrand(id: string): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    const result = await ProductImages.findByIdAndRemove({
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
