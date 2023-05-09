import { Request, Response } from "express"
import { Controller, Route } from "../../utils/route"
import BrandImagesService from "../../services/Brand-Images"
import CollectionsService from "../../services/Collections"
import { SuccessCodesMeta } from "../../constants/success-codes"
import { authorizeMiddleware } from "../../middlewares/authorization"
var util=require('../../utils/utility');
@Controller("/collections")
export default class CollectionsController {
  @Route.Get({ path: "/", middlewares:[util.ensureAuthenticated] })
  async CollectionsPage(req: Request, res: Response) {
    const brandNames = await new BrandImagesService().getAllBrandNames()
    console.log(brandNames)
    return res.render("collections/index", { data: brandNames })
  }

  @Route.Post({ path: "/add-collection" })
  async addPage(req: Request, res: Response) {
    await new CollectionsService().addCollection(req.body)
    return res.redirect("/collections")
  }

  @Route.Post({ path: "/getallcollections" })
  async showTable(req: Request, res: Response) {
    const response = await new CollectionsService().getAllCollections()
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
  }

  @Route.Get({ path: "/deletecollection/:_id" })
  async deleteRecord(req: Request, res: Response) {
    await new CollectionsService().deleteCollection(req.params._id)
    return res.redirect("/collections")
  }

  @Route.Post({ path: "/getdataagainstkeywordfromproducttable" })
  async getData(req: Request, res: Response) {
    const response = await new CollectionsService().getDataAgainstKeywordFromProductTable(req.body)
    res.status(200).json(response)
  }

  @Route.Post({ path: "/getsingledataagainstkeywordfromproducttable" })
  async getSingleData(req: Request, res: Response) {
    const response = await new CollectionsService().getSingleDataAgainstKeywordFromProductTable(
      req.body.brand_name
    )
    res.status(200).json(response)
  }
}
