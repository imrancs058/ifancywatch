import { Request, Response } from "express"
import multer from "multer"
import { Controller, Route } from "../../utils/route"
import TopSellersService from "../../services/Top-Sellers"
import TopJewelleryService from "../../services/Top-Jewellery"
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

@Controller("/top-Jewellery")
export default class CategorySelectController {
  @Route.Get({ path: "/" ,middlewares:[util.ensureAuthenticated] })
  async productCategoryPage(req: Request, res: Response) {
    const brandNames = await new BrandImagesService().getAllJewelleryBrandNames()
    // const categoryNames = await new CategorySelectService().getAllProductCategories()
    return res.render("top-Jewellery/index", { data: brandNames })
  }

  @Route.Get({ path: "/get_top_jewellery" })
  async getImageData(req: Request, res: Response) {
    
    const record = await new TopJewelleryService().getAllJewelleryBrandImages()
    return res.json(record)
  }

@Route.Post({ path: "/addtopseller", middlewares: [upload.array("image", 20)] })
  async addPage(req: Request, res: Response) {
    const file: any = req.files
    console.log(file)
    req.body.image = file.map((file: any) => `/public/categorySelect/${file.filename}`)
    
    
    const result = await new TopJewelleryService().addProduct(req.body)
    if (result.status == 0) {
      return res.send('<script>alert("Brand already exist");window.location.href="/top-Jewellery"</script>')
    }else {
      return res.redirect("/top-Jewellery")
    }
  }

  @Route.Get({ path: "/get_jewellery_brand_with_Images" })
  async getJewelleryImagesData(req: Request, res: Response) {
    const record = await new TopJewelleryService().getAllJewelleryBrandImages()
    return res.json(record)
  }

  @Route.Get({ path: "/get_added_brand_data" })
  async GetTopSellerData(req: Request, res: Response) {
    const record = await new TopSellersService().getTopSellerData(req.params.brand_type)
    return res.json(record)
  }

  @Route.Get({ path: "/deletebrand/:_id" })
  async deleteRecord(req: Request, res: Response) {
    await new TopJewelleryService().deleteBrand(req.params._id)
    return res.redirect("/top-Jewellery")
  }
}
