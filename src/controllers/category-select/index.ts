import { Request, Response } from "express"
import multer from "multer"
import { Controller, Route } from "../../utils/route"
import CategorySelectService from "../../services/Category-select"
import BrandImagesService from "../../services/Brand-Images"
import CollectionsService from "../../services/Collections";
import { SuccessCodesMeta } from "../../constants/success-codes"
import { authorizeMiddleware } from "../../middlewares/authorization"
var util=require('../../utils/utility');
const storage = multer.diskStorage({
  destination: function (req: Request, file: any, callback: any) {
    callback(null, "./public/categorySelect/")
  },
  //add the extensions
  filename: function (req, file, callback) {
    callback(null, `${file.fieldname}-${Date.now()}-${file.originalname}`)
  },
})

// upload parameters for multer
const upload = multer({
  storage,
  limits: { fieldSize: 1024 * 1024 * 3 },
})

@Controller("/category-select")
export default class CategorySelectController {
  @Route.Get({ path: "/" ,middlewares:[util.ensureAuthenticated] })
  async ProductCategoryPage(req: Request, res: Response) {
    const brandNames = await new BrandImagesService().getAllBrandNames()
    // const categoryNames = await new CategorySelectService().getAllProductCategories()
    return res.render("category-select/index", { data: brandNames })
  }

  @Route.Get({ path: "/deletecategory/:_id" })
  async deleteRecord(req: Request, res: Response) {
    await new CategorySelectService().deleteCollection(req.params._id)
    return res.redirect("/category-select")
  }

  @Route.Get({ path: "/get_brand_with_Images" })
  async getImageData(req: Request, res: Response) {
    const Images = await new CategorySelectService().getAllCurrentBrandImages()
    return res.json(Images)
  }

  @Route.Post({ path: "/getCategorySelect", middlewares: [upload.array("image", 20)] })
  async addPage(req: Request, res: Response) {
    const file: any = req.files
    console.log(file)
    req.body.image = file.map((file: any) => `/public/categorySelect/${file.filename}`)
    const result = await new CategorySelectService().addProduct(req.body)
    if (result.status) {
      return res.redirect("/category-select")
    }
  }
}
