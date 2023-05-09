import ErrorCodes from "../../constants/error-codes"
import { ServiceFailedResponse, ServiceResponse, ServiceSuccessResponse } from "../../utils/service"
import { ImagesCategory } from "./types";
import ImagesCategoryModel from "../../models/imagesCategory";

export default class BrandImagesService {
  async add(data: ImagesCategory): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    try {
      const savedData = await ImagesCategoryModel.create({
        category: data.category,
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
  async getAllBrandsWithImages() {
    const brandImages = await ImagesCategoryModel.find()
    if (brandImages) {
      return ServiceResponse.success({
        data: brandImages,
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data :  {
        message: "No brand images found"
      },
      status: 404,
    })
  }
  //get all categories
  async getAllCategories() {
    const categories = await ImagesCategoryModel.find()
    if (categories) {
      return ServiceResponse.success({
        data: categories,
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data :  {
        message: "No categories found"
      },
      status: 404,
    })
  }
  async deleteCategory(id: string) {
    const category = await ImagesCategoryModel.findByIdAndDelete(id)
    if (category) {
      return ServiceResponse.success({
        data: category,
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data :  {
        message: "No category found"
      },
      status: 404,
    })
  }
  async editCategory(data: ImagesCategory) {
    const category = await ImagesCategoryModel.findByIdAndUpdate(data)
    if (category) {
      return ServiceResponse.success({
        data: category,
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.USER_NOT_FOUND,
      data :  {
        message: "No category found"
      },
      status: 404,
    })
  }
}
