import { Request, Response } from "express"
import multer from "multer"
import { Controller, Route } from "../../utils/route"
import TopSellersService from "../../services/Top-Sellers"
import BrandImagesService from "../../services/Brand-Images"
import { SuccessCodesMeta } from "../../constants/success-codes"
import { authorizeMiddleware } from "../../middlewares/authorization"
var util=require('../../utils/utility');
const storage = multer.diskStorage({
  destination(req: Request, file: any, callback: any) {
    callback(null, "./public/categorySelect/")
  },
  // add the extensions
  filename(req, file, callback) {
    callback(null, `${file.fieldname}-${Date.now()}-${file.originalname}`)
  },
})

// upload parameters for multer
const upload = multer({
  storage,
  limits: { fieldSize: 1024 * 1024 * 3 },
})

@Controller("/top-sellers")
export default class CategorySelectController {
  @Route.Get({ path: "/" ,middlewares:[util.ensureAuthenticated] })
  async ProductCategoryPage(req: Request, res: Response) {
    const brandNames = await new BrandImagesService().getAllBrandNames()
    // const categoryNames = await new CategorySelectService().getAllProductCategories()
    return res.render("top-sellers/index", { data: brandNames })
  }

  @Route.Get({ path: "/get_top_seller" })
  async getImageData(req: Request, res: Response) {
    const record = await new TopSellersService().getAllCurrentBrandImages()
    return res.json(record)
  }

  @Route.Post({ path: "/addtopseller" })
  // eslint-disable-next-line consistent-return
  async addPage(req: Request, res: Response) {
    // const file: any = req.files
    // eslint-disable-next-line @typescript-eslint/no-shadow
    // req.body.image = file.map((file: any) => `/public/categorySelect/${file.filename}`)
    const result = await new TopSellersService().addProduct(req.body)
    if (result.status == 0) {
      return res.send('<script>alert("Brand already exist");window.location.href="/top-sellers"</script>')
    }else {
      return res.redirect("/top-sellers")
    }
  }

  @Route.Get({ path: "/get_added_brand_data" })
  async GetTopSellerData(req: Request, res: Response) {
    let brand_type=req.query.brand_type
    console.log(brand_type)
    const record = await new TopSellersService().getTopSellerData(brand_type)
    return res.json(record)
  }

  @Route.Get({ path: "/deletebrand/:_id" })
  async deleteRecord(req: Request, res: Response) {
    await new TopSellersService().deleteBrand(req.params._id)
    return res.redirect("/top-sellers")
  }
}
