import mongoose from "mongoose"

const { Schema } = mongoose
const schema = new Schema({
  brand_name: { type: String },
  category: { type: String },
  productCategory: { type: String },
  description: { type: String },
  title: { type: String },
  image: [{ type: String }],
})

export default mongoose.model("brandImages", schema)
