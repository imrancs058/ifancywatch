import { Request, Response } from "express"
import { Controller, Route } from "../../utils/route"
import SortProductService from "../../services/Sort-Product"
import SortProductModel from "../../models/product-sort";

@Controller("/sort-product")
export default class SortProductController {
  // @Route.Get({ path: "/" })
  // async sortProductPage(req: Request, res: Response) {
  //   return res.status(200).json({ message: "sort product page" })
  // }

  @Route.Post({ path: "/add-sorted-product" })
  async SaveSortedData(req: Request, res: Response) {
    await SortProductModel.deleteMany({})
    const response = await new SortProductService().addDataInSortProductTable()
    return res.status(200).json(response)
  }

  @Route.Post({ path: "/get-sorted-product" })
    async getSortedData(req: Request, res: Response) {
    const query: any = req.body
    const response = await new SortProductService().getSortedData(query)
    return res.status(200).json(response)
  }

  @Route.Post({ path: "/get-pre-owned-watches-sorted-product" })
    async getPreOwnedSortedData(req: Request, res: Response) {
    const query: any = req.body
    const response = await new SortProductService().getPreOwnedSortedData(query)
    return res.status(200).json(response)
  }

  @Route.Post({ path: "/get-sorted-strap-product" })
    async getStrapSortedData(req: Request, res: Response) {
    const query: any = req.body
    const response = await new SortProductService().getStrapSortedData(query)
    return res.status(200).json(response)
  }

  @Route.Post({ path: "/get-sorted-women-jewellery" })
    async getSortedWomenJewellery(req: Request, res: Response) {
    const query: any = req.body
    const response = await new SortProductService().getSortedWomenJewellery(query)
    return res.status(200).json(response)
  }

  @Route.Post({ path: "/get-pre-owned-sorted-women-jewellery" })
    async getPreOwnedSortedWomenJewellery(req: Request, res: Response) {
    const query: any = req.body
    const response = await new SortProductService().getPreOwnedSortedWomenJewellery(query)
    return res.status(200).json(response)
  }

  @Route.Post({ path: "/count-brand-name-filter" })
    async countBrandNameFilter(req: Request, res: Response) {
      // let category : any = req.query.category
    const response = await new SortProductService().countBrandNameFilter(req.body)
    return res.status(200).json(response)
  }

  @Route.Post({ path: "/count-strap-brand-name-filter" })
    async countStrapBrandNameFilter(req: Request, res: Response) {
      // let category : any = req.query.category
    const response = await new SortProductService().countStrapBrandNameFilter(req.body)
    return res.status(200).json(response)
  }

  @Route.Post({ path: "/count-pre-owned-brand-name-filter" })
    async countPreOwnedBrandNameFilter(req: Request, res: Response) {
      let category : any = req.query.category
    const response = await new SortProductService().countPreOwnedBrandNameFilter(category,req.body)
    return res.status(200).json(response)
  }

  @Route.Get({ path: "/count-pre-owned-jewellery-brand-name-filter" })
    async countPreOwnedJewelleryBrandNameFilter(req: Request, res: Response) {
      // let category : any = req.query.category
    const response = await new SortProductService().countPreOwnedJewelleryBrandNameFilter()
    return res.status(200).json(response)
  }
  

  @Route.Get({ path: "/count-jewellery-brand-name-filter" })
    async countJewelleryBrandNameFilter(req: Request, res: Response) {
      // let category : any = req.query.category
      let material : any = req.query.material
      let subCategory : any = req.query.subCategory
    const response = await new SortProductService().countJewelleryBrandNameFilter(material,subCategory)
    return res.status(200).json(response)
  }

  @Route.Get({ path: "/count-mens-brand-name-filter" })
    async countMensBrandNameFilter(req: Request, res: Response) {
      // let category : any = req.query.category
    const response = await new SortProductService().countMensBrandNameFilter()
    return res.status(200).json(response)
  }

  @Route.Get({ path: "/count-ladies-brand-name-filter" })
    async countLadiesBrandNameFilter(req: Request, res: Response) {
      // let category : any = req.query.category
    const response = await new SortProductService().countLadiesBrandNameFilter()
    return res.status(200).json(response)
  }

  @Route.Get({ path: "/count-gift-brand-name-filter" })
    async countGiftBrandNameFilter(req: Request, res: Response) {
      // let category : any = req.query.category
    const response = await new SortProductService().countGiftBrandNameFilter()
    return res.status(200).json(response)
  }

  @Route.Post({ path: "/count-with-brand-filter" })
  async countBrandFilter(req: Request, res: Response) {
    const response = await new SortProductService().countBrandFilter(req.body)
    return res.status(200).json(response)
  }

  @Route.Post({ path: "/count-color-brand-filter" })
  async countColorBrandFilter(req: Request, res: Response) {
    const response = await new SortProductService().countColorBrandFilter(req.body)
    return res.status(200).json(response)
  }

  @Route.Post({ path: "/count-strap-color-brand-filter" })
  async countStrapColorBrandFilter(req: Request, res: Response) {
    const response = await new SortProductService().countStrapColorBrandFilter(req.body)
    return res.status(200).json(response)
  }

  @Route.Post({ path: "/count-pre-owned-with-brand-filter" })
  async preOwnedcountBrandFilter(req: Request, res: Response) {
    const response = await new SortProductService().preOwnedcountBrandFilter(req.body)
    return res.status(200).json(response)
  }

}
