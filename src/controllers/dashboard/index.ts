import { Request, Response } from "express"
import { Controller, Route } from "../../utils/route"
import { SuccessCodesMeta } from "../../constants/success-codes"
import { authorizeMiddleware } from "../../middlewares/authorization"
var util=require('../../utils/utility');
@Controller("/dashboard",)
export default class DashboardController {
  @Route.Get({ path: "/" ,middlewares:[util.ensureAuthenticated]})
  async dashboardPage(req: Request, res: Response) {
    
    return res.render("dashboard/index", {
      title: "Dashboard",
      meta: { successCodes: SuccessCodesMeta },
    })
  }
}
