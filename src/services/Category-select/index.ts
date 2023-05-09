import ErrorCodes from "../../constants/error-codes"
import { ServiceFailedResponse, ServiceResponse, ServiceSuccessResponse } from "../../utils/service"
import { CurrentBrandImages } from "./types"
import CurrentBrand from "../../models/currentBrand"

export default class CategorySelectService {
  async getAllCurrentBrandImages() {
    console.log('before')
    const images = await CurrentBrand.find()
    if (images) {
      console.log('now save')
      return ServiceResponse.success({
        data: images,
        status: 201,
      })
    }
    return ServiceResponse.failed({
      code: ErrorCodes.NO_BRAND_FOUND,
      status: 404,
    })
  }

  async addProduct(
    data: CurrentBrandImages
  ): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    try {
      const existingBrandImages = await CurrentBrand.findOne({
        brand_name: data.brand_name,
      })
      if (existingBrandImages) {
        const arr: any = data.image
        arr.push(...existingBrandImages._doc.image)
        const updateBrandImages = await CurrentBrand.findOneAndUpdate(
          {
            brand_name: data.brand_name,
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

      const savedData = await CurrentBrand.create({
        brand_name: data.brand_name,
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

  //delete category
    async deleteCollection(id: string): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
        try {
            const deletedData = await CurrentBrand.findByIdAndDelete(id)
            return ServiceResponse.success({
            data: deletedData,
            status: 201,
            })
        } catch (e: any) {
            return ServiceResponse.failed({ code: ErrorCodes.SERVER_ERR })
        }
    }
}
