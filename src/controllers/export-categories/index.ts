import { Request, Response } from "express"
import { Controller, Route } from "../../utils/route"
import BrandImagesService from "../../services/Brand-Images"
import { createObjectCsvWriter } from "csv-writer"
import client from "../../elasticsearch/connection";
import { SuccessCodesMeta } from "../../constants/success-codes"
import { authorizeMiddleware } from "../../middlewares/authorization"
var util=require('../../utils/utility');
@Controller("/export-categories")
export default class ExportCategoriesController {
  @Route.Get({ path: "/" ,middlewares:[util.ensureAuthenticated] })
  async ExportCategoriesPage(req: Request, res: Response) {
    return res.render("export-categories/index")
  }
  @Route.Get({ path: "/brandcategorylist" })
  async BrandCategoryList(req: Request, res: Response) {
    // res.download("./public/files/Snapchat-2133350935.jpg")
    const brandNames = await new BrandImagesService().getBrandsCategories()
    const brandWithCategory: any = brandNames;
    const data:any = []
    brandWithCategory.data.map(async (brand:any)=>{
      const brandName = brand.brand_name;
      const categoryName:any = [];
      brand.category.category_name.map((category: any) => {
        categoryName.push(category)
      })
      data.push({ brandName, categoryName })
      // await client.index({
      //   index: 'csv-file-data',
      //   body:{
      //     brandName,
      //     category:categoryName
      //   }
      // })
    })
    //search data from elasticsearch
    // await client.search({
    //   index: 'csv-file-data',
    //   body: {
    //     query: {
    //       match: {
    //         brandName: "Breitling"
    //       }
    //     }
    //   }
    // }).then(function (resp:any) {
    //   console.log(resp);
    // }).catch(function (err:any) {
    //   console.log(err);
    // });

    const writer = createObjectCsvWriter({
      path: `./public/files/brandcategorylist.csv`,
      header: [
        { id: "brandName", title: "brandName" },
        { id: "category", title: "category" },
      ],
    })
    let brandArr:any=[];
    data.forEach((brand1:any)=>{
      brandArr.push({ brandName: brand1.brandName,category:"" })
      brand1.categoryName.map((category: any) => {
        brandArr.push({brandName:"", category: category })
      })
    })
    writer.writeRecords(brandArr)
      .then(() => {
        console.log("The CSV file was written successfully")
        res.redirect("/export-categories")
      })
      .catch((err:any) => {
        console.log("Error writing the CSV file", err)
      })

    // brandWithCategory.data.map((brand: any) => {
    //   const brandName = brand.brand_name
    //   const categoryName:any = []
    //   brand.category.map((category: any) => {
    //     categoryName.push(category.merchant_name)
    //   })
    //   data.push({ brandName, categoryName })
    // })
    // const writer = createObjectCsvWriter({
    //   path: "./public/files/brandcategorylist.csv",
    //   header: [
    //     { id: "brandName", title: "brandName" },
    //     { id: "category", title: "category" },
    //   ],
    // })
    // let brandArr:any=[];
    // data.forEach((brand1:any)=>{
    //   brandArr.push({ brandName: brand1.brandName,category:"" })
    //   brand1.categoryName.map((category: any) => {
    //     brandArr.push({brandName:"", category: category })
    //   })
    // })
    // writer.writeRecords(brandArr)
    //   .then(() => {
    //     console.log("The CSV file was written successfully")
    //   })
    //   .catch((err:any) => {
    //     console.log("Error writing the CSV file", err)
    //   })
    // return res.status(200).json(brandNames.data)
  }
}
