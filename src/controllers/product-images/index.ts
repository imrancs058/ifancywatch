import { Request, Response } from "express"
import multer from "multer"
import { Controller, Route } from "../../utils/route"
import ProductImagesService from "../../services/Product-Images"
import { SuccessCodesMeta } from "../../constants/success-codes"
import { authorizeMiddleware } from "../../middlewares/authorization"
var util=require('../../utils/utility');
const storage = multer.diskStorage({
  destination: function (req: Request, file: any, callback: any) {
    callback(null, "./public/productImages")
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

@Controller("/product-images")
export default class ProductImageController {
  @Route.Get({ path: "/" ,middlewares:[util.ensureAuthenticated] })
  async ProductImagesPage(req: Request, res: Response) {
    return res.render("product-images/index")
  }

  @Route.Get({ path: "/get_Image_Data" })
  async getImageData(req: Request, res: Response) {
    const productImages = await new ProductImagesService().getAllProductImages()
    return res.json(productImages)
  }

  @Route.Post({ path: "/getImageData", middlewares: [upload.array("image", 20)] })
  async addPage(req: Request, res: Response) {
    const file: any = req.files
    req.body.image = file.map(
      (file: any) => `/public/productImages/${file.filename}`
      // Not working without baseURL
      // (file: any) => `${file.filename}`
    )
    const result = await new ProductImagesService().addProduct(req.body)
    if (result.status) {
      return res.redirect("/product-images")
    }
  }
  @Route.Get({ path: "/deletebrand/:_id" })
  async deleteRecord(req: Request, res: Response) {
    console.log("123")
    await new ProductImagesService().deleteBrand(req.params._id)
    return res.redirect("/product-images")
  }
}
