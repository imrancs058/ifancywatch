import { Request, Response } from "express"
import { Controller, Route } from "../../utils/route"
import ImagesCategoryService from "../../services/Images-Category"
import { SuccessCodesMeta } from "../../constants/success-codes"
import { authorizeMiddleware } from "../../middlewares/authorization"
var util=require('../../utils/utility');
@Controller("/image-category")
export default class ImagesCategoryController {
  @Route.Get({ path: "/" ,middlewares:[util.ensureAuthenticated] })
  async ImagesCategoryPage(req: Request, res: Response) {
    return res.render("images-category/index")
  }
  @Route.Post({ path: "/saveData" })
  async ImagesCategoryAddPage(req: Request, res: Response) {
    const result = await new ImagesCategoryService().add(req.body)
    if (result.status) {
      return res.redirect("/image-category")
    }
  }
  @Route.Post({ path: "/getimagecategories" })
  async showTable(req: Request, res: Response) {
    const response = await new ImagesCategoryService().getAllCategories()
    var obj = {
      meta: {
        page: 1,
        pages: 1,
        perpage: -1,
        total: response.data.length,
      },
      data: response.data,
    }
    return res.status(200).json(obj)

    //return res.status(200).json(response)
  }
  @Route.Post({ path: "/update" })
  async updateImagesCategory(req: Request, res: Response) {
    const response = await new ImagesCategoryService().editCategory(req.body)
    if (response.status != 1) {
      return res.status(400).json({
        status: response.status,
        message: response.message,
      })
    }
    return res.status(200).json(response)
  }
  @Route.Get({ path: "/deleteCategory/:id" })
  async DeleteCategory(req: Request, res: Response) {
    const response = await new ImagesCategoryService().deleteCategory(req.params.id)
    if (response.status) {
      return res.redirect("/image-category")
    }
  }
}
