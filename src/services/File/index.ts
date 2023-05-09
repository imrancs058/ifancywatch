import ErrorCodes from "../../constants/error-codes"
import { ServiceFailedResponse, ServiceResponse, ServiceSuccessResponse } from "../../utils/service"
import { File } from "./types"
import FilesModel from "../../models/files"
import { ObjectId } from 'mongodb';

export default class FileService {
  async add(data: any): Promise<ServiceSuccessResponse<File> | ServiceFailedResponse> {
    try {
      const savedData = await FilesModel.create({
        file_name: data,
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
  async getAllFiles() {
    const data: any = await FilesModel.find()
    if (data) {
      return data
    }
    return null
  }

  async deleteBrand(id: string): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    const result = await FilesModel.findByIdAndRemove({
      _id: new ObjectId(id),
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
        message: "No Files found",
      },
      status: 404,
    })
  }

}
