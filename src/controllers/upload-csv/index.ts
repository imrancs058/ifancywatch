/* eslint-disable object-shorthand */
/* eslint-disable no-var */
/* eslint-disable global-require */
/* eslint-disable prefer-arrow-callback */
import ProductModel from "../../models/product"
/* eslint-disable linebreak-style */
import e, { Request, Response } from "express"
import csv from "csvtojson"
import fs from "fs"
import moment from "moment"
import { ApiResponse } from "../../utils/api"
import { Controller, Route } from "../../utils/route"
import { SuccessCodesMeta } from "../../constants/success-codes"
import upload from "../../utils/fileUpload"
import ProductService from "../../services/Product"
import AvailabilityService from "../../services/Availability"
import CustomService from "../../services/Custom"
import DeliveryAndTermsService from "../../services/Delivert-and-Terms"
import IDService from "../../services/Id"
import FileService from "../../services/File"
import ImagesService from "../../services/Images"
import OtherService from "../../services/Other"
// import PriceService from "../../services/Price"
import ProductCategoryService from "../../services/Product-Category"
// import ProductSpecificationService from "../../services/Product-Specification"
import RatingService from "../../services/Rating"
import TogetherService from "../../services/Together"
import client from "../../elasticsearch/connection"
import { authorizeMiddleware } from "../../middlewares/authorization"
const { parse } = require("csv-parse")
var util=require('../../utils/utility');
@Controller("/upload-csv")
export default class UploadCsvController {
  @Route.Post({ path: "/", middlewares: [upload.single("file")] })
  async uploadCsv(req: Request, res: Response) {
    await ProductModel.deleteMany({})
    const filePath: any = req!.file!.path
    var arr: any = []
    var i = 1
    var data = []
    var obj = {}
    try {
      const csvFile: any = await csv().fromFile(filePath)
      let count = 0
      fs.createReadStream(filePath)
        .pipe(parse())
        .on("data", function (row: any) {
          if (i === 1) {
            arr = [...row]
            i = 2
          } else {
            data = []
            obj = {}
            for (var j = 0; j < arr.length; j++) {
              Object.assign(obj, { [arr[j].toString()]: row[j] })
            }
            count++;
            data.push(JSON.stringify(obj))
            console.log(count)
            new ProductService().add(data).catch((err)=>{
              console.log("=========================================================================")
              console.log(err)
            })
          }
        })
        .on("end", function () {
             console.log("done")
        })
        .on("error", function (error: any) {
             console.log(error)
        })
      new FileService().add(req.file!.filename)
      // new ProductService().add(csvFile)
      // new AvailabilityService().add(csvFile)
      // new CustomService().add(csvFile)
      // new DeliveryAndTermsService().add(csvFile)
      // new IDService().add(csvFile)
      // new ImagesService().add(csvFile)
      // new OtherService().add(csvFile)
      // // new PriceService().add(csvFile)
      // new ProductCategoryService().add(csvFile)
      // // new ProductSpecificationService().add(csvFile)
      // new RatingService().add(csvFile)
    } catch (error) {
      console.log(error)
    }
    // delete csv file after reading
    // fs.unlinkSync(filePath)
    return ApiResponse.returnSuccess(res, {
      statusCode: 201,
      message: SuccessCodesMeta.USER_REGISTERED_SUCCESSFULLY.message,
      data: {},
    })
  }

  @Route.Get({ path: "/bulkadd",middlewares:[util.ensureAuthenticated]})
  async bulkaddPage(req: Request, res: Response) {
 
    // const brandNames = await new BrandImagesService().getAllBrandNames()
    // // const categoryNames = await new CategorySelectService().getAllProductCategories()
    // return res.render("top-sellers/index", { data: brandNames })
    const files = await new FileService().getAllFiles()
    console.log(files)
    return res.render("csvupload/index", { data: files, moment: moment })
  }

  @Route.Get({ path: "/deletebrand/:_id" })
  async deleteRecord(req: Request, res: Response) {
    console.log(req.params._id)
    await new FileService().deleteBrand(req.params._id)
    const files = await new FileService().getAllFiles()
    // if(files){
    //   return res.render("csvupload/index", { data: files, moment: moment })
    // }
    return res.redirect("/upload-csv/bulkadd")
  }
}
