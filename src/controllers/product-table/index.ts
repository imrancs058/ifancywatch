import { Request, Response } from "express"
import { Controller, Route } from "../../utils/route"
import ProductTableService from "../../services/Product-Table"
import client from "../../elasticsearch/connection"
import { SuccessCodesMeta } from "../../constants/success-codes"
import { authorizeMiddleware } from "../../middlewares/authorization"
var util=require('../../utils/utility');
@Controller("/product-table")
export default class ProductTableController {
  @Route.Get({ path: "/deletebrand/:_id" })
  async deleteRecord(req: Request, res: Response) {
    console.log("product table")
    await new ProductTableService().deleteBrand(req.params._id)
    return res.redirect("/product-table")
  }
  @Route.Get({ path: "/" ,middlewares:[util.ensureAuthenticated] })
  async productTablePage(req: Request, res: Response) {
    return res.render("product-table/index")
  }
  @Route.Post({ path: "/gettabledata" })
  async bulkShowPage(req: Request, res: Response) {
    const query: any = req.body
    const response = await new ProductTableService().find(query)
    client
      .search({
        index: "csv-file-data",
        body: {
          query: {
            match: {
              brand_name: "30523469793",
            },
          },
        },
      })
      .then(function (resp: any) {
        console.log(resp)
      })
      .catch(function (err: any) {
        console.log(err)
      })
    if (response.status != 1) {
      return res.status(400).json({
        status: response.status,
        message: response.message,
      })
    }
    return res.status(200).json(response.data)
  }

  @Route.Post({ path: "/getdatabycategory" })
  async CategoryDataShowPage(req: Request, res: Response) {
    const query: any = req.body
    const response = await new ProductTableService().getDataByCategory(query)
    return res.status(200).json(response)
  }


  @Route.Post({ path: "/getCurrentBrandWithImages" })
  async showTable(req: Request, res: Response) {
    const response = await new ProductTableService().getCurrentBrandWithImages()
    if (response.status != 1) {
      return res.status(400).json({
        status: response.status,
        message: response.message,
      })
    }
    return res.status(200).json(response)
  }

  @Route.Post({ path: "/recommendation" })
  async GetDataByRecommendation(req: Request, res: Response) {
    let brandName: any = req.body.brand_name
    const products = await new ProductTableService().getDataByRecommendation(
        brandName
    )
    return res.status(200).json(products)
  }

  @Route.Get({ path: "/allproduct" })
  async allProducts(req: Request, res: Response) {
    const query: any = req.body
    const response = await new ProductTableService().getAllProducts(query)
    return res.status(200).json(response)
  }
}
