import multer from "multer"
import { Request } from "express"

// Multer Upload Storage
const storage = multer.diskStorage({
  destination: (req:Request, file:any, cb:any) => {
    cb(null, "./public/files")
  },
  filename: (req:Request, file:any, cb:any) => {
    cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`)
  },
})

// Filter for CSV file
const csvFilter = (req:Request, file:any, cb:any) => {
  if (file.originalname.includes("csv")) {
    cb(null, true)
  } else {
    cb("Please upload only csv file.", false)
  }
}
const upload = multer({ storage, fileFilter: csvFilter })

export default upload
