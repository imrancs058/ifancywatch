import { Request, Response } from "express"
import multer from "multer"
import { Controller, Route } from "../../utils/route"
import BrandImagesService from "../../services/Brand-Images"
import ImagesCategoryModel from "../../models/imagesCategory"
import ImagesCategoryService from "../../services/Images-Category"
import Product from "../../models/product"
import { SuccessCodesMeta } from "../../constants/success-codes"
import { authorizeMiddleware } from "../../middlewares/authorization"
var util=require('../../utils/utility');
const storage = multer.diskStorage({
  destination: function (req: Request, file: any, callback: any) {
    callback(null, "./public/brandImages")
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

@Controller("/brand-images")
export default class BrandImagesController {
  @Route.Get({ path: "/" ,middlewares:[util.ensureAuthenticated]})
  async BrandImagesPage(req: Request, res: Response) {
    const brandNames = await new BrandImagesService().getAllBrandNames()
    const cat = await ImagesCategoryModel.find({}, { category: 1, _id: 0 }).distinct("category")
    const ProductCat = await Product.find({}, { category_name: 1, _id: 0 }).distinct(
      "category_name"
    )
    return res.render("brand-images/index", {
      data: brandNames,
      category: cat,
      productCategory: ProductCat,
    })
  }

  @Route.Get({ path: "/getProductCategories" })
  async Brands(req: Request, res: Response) {
    const ProductCat = await Product.find({}, { category_name: 1, _id: 0 }).distinct(
      "category_name"
    )
    return res.status(200).json(ProductCat)
  }

  @Route.Post({ path: "/getimagedata", middlewares: [upload.array("image", 10)] })
  async addPage(req: Request, res: Response) {
    const file: any = req.files
    req.body.image = file.map((file: any) => `/public/brandImages/${file.filename}`)
    const result = await new BrandImagesService().add(req.body)
    if (result.status) {
      return res.redirect("/brand-images")
    }
  }

  @Route.Post({ path: "/getbrandwithimage" })
  async showTable(req: Request, res: Response) {
    const response = await new BrandImagesService().getAllBrandsWithImages()
    if (response.status != 1) {
      return res.status(400).json({
        status: response.status,
        message: response.message,
      })
    }
    return res.status(200).json(response)
  }

  @Route.Get({ path: "/brandportfolio" })
  async BrandPortfolio(req: Request, res: Response) {
    const brandNames = await new BrandImagesService().getAllBrandsWithImages()
    return res.status(200).json(brandNames)
  }
  @Route.Get({ path: "/productById/:id" })
  async ProductById(req: Request, res: Response) {
    const response = await new BrandImagesService().productById(req.params.id)
    if (response.status) {
      // return res.redirect("/image-category")
      return res.status(200).json(response)
    }
    return res.status(400).json(response)
  }

  @Route.Get({ path: "/brandById/:id" })
  async BrandById(req: Request, res: Response) {
    const response = await new BrandImagesService().brandById(req.params.id)
    if (response.status) {
      // return res.redirect("/image-category")
      return res.status(200).json(response)
    }
    return res.status(400).json(response)
  }

  @Route.Get({ path: "/getProductModelNumber/:modelProductNumber" })
  async BrandByMpn(req: Request, res: Response) {

    const response = await new BrandImagesService().getProductByModelProductNumber(req.params.modelProductNumber)
    if (response.status) {
      // return res.redirect("/image-category")
      return res.status(200).json(response)
    }
    return res.status(400).json(response)
  }

  @Route.Get({ path: "/brandByName" })
  async BrandByName(req: Request, res: Response) {
    const response = await new BrandImagesService().brandByName(req.query.name)
    if (response.status) {
      // return res.redirect("/image-category")
      return res.status(200).json(response)
    }
    return res.status(400).json(response)
  }

  @Route.Get({ path: "/brandByCategory" })
  async BrandByCategory(req: Request, res: Response) {
    const response = await new BrandImagesService().brandByCategory(req.query.name)
    if (response.status) {
      // return res.redirect("/image-category")
      return res.status(200).json(response)
    }
    return res.status(400).json(response)
  }
  //get first thirty brands with images
  @Route.Get({ path: "/getfirstthirtybrandswithLogo" })
  async GetFirstThirtyBrandsWithLogoPage(req: Request, res: Response) {
    const brandImages = await new BrandImagesService().getFirstThirtyBrandsWithLogoFromCsvDataFile()
    return res.status(200).json(brandImages)
  }
  //get first thirty brands with product images
  @Route.Get({ path: "/getdistinctbrandsdata" })
  async GetDistinctBrandData(req: Request, res: Response) {
    const brandImages =
   await new BrandImagesService().getDistinctBrandData()
    return res.status(200).json(brandImages.data)
  }
  //get second thirty brands with product images
  @Route.Get({ path: "/getsecondthirtybrandswithproductimages" })
  async GetSecondThirtyBrandsWithImages(req: Request, res: Response) {
    const brandImages =
      await new BrandImagesService().getSecondThirtyBrandsWithProductImagesFromCsvDataFile()
    return res.status(200).json(brandImages)
  }
  //Get By Name
  @Route.Get({ path: "/brandname" })
  async BrandNameList(req: Request, res: Response) {
    const brandName: any = req.query.brandName
    const result = await new BrandImagesService().getByBrandName(brandName)
    return res.status(200).json(result)
  }

  @Route.Get({ path: "/brandswithcategory" })
  async GetDataByBrandAndCategory(req: Request, res: Response) {
    let brandName: any = req.query.brand_name
    let category: any = req.query.category_name
    const products = await new BrandImagesService().getBrandImagesByBrandNameAndCategory(
      brandName,
      category
    )
    return res.status(200).json(products)
  }

  @Route.Put({ path: "/updatebyid/:id" })
  async updateBrandImages(req: Request, res: Response) {
    const response = await new BrandImagesService().editBrandImage(req.params.id, req.body)
    if (response.status != 1) {
      return res.status(400).json({
        status: response.status,
        message: response.message,
      })
    }
    return res.status(200).json(response)
  }
  @Route.Get({ path: "/deletebrand/:_id" })
  async deleteRecord(req: Request, res: Response) {
    await new BrandImagesService().deleteBrand(req.params._id)
    return res.redirect("/brand-images")
  }
}
