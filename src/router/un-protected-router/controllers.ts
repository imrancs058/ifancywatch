import AuthorizationController from "../../controllers/authorization"
import RegistrationController from "../../controllers/registration"
import UploadCsvController from "../../controllers/upload-csv"
import DashboardController from "../../controllers/dashboard"
import ProductTableController from "../../controllers/product-table"
import BrandImagesController from "../../controllers/brand-images"
import ImagesCategoryController from "../../controllers/image-category"
import ExportCategoriesController from "../../controllers/export-categories"
import ProductImageController from "../../controllers/product-images"
import CategorySelectController from "../../controllers/category-select"
import TopSellersController from "../../controllers/top-sellers"
import TopJewellerySellersController from "../../controllers/top-Jewellery"
import CollectionsController from "../../controllers/collections"
import SortProductController from "../../controllers/sort-product"
import UserAuthController from "../../controllers/registration"
// import UserProfileController from "../../controllers/user-profile"
import UserProfileController from "../../controllers/login"
import TopWatchStrapController from "../../controllers/top-watch-starp-sellers"
import TopPreOwnController from "../../controllers/top-pre-own-sellers"
const controllers: any[] = [
  RegistrationController,
  AuthorizationController,
  UserAuthController,
  UserProfileController,
  UploadCsvController,
  DashboardController,
  ProductTableController,
  BrandImagesController,
  ImagesCategoryController,
  ExportCategoriesController,
  ProductImageController,
  CategorySelectController,
  CollectionsController,
  TopSellersController,
  TopJewellerySellersController,
  SortProductController,
  TopWatchStrapController,
  TopPreOwnController
]

export default controllers
