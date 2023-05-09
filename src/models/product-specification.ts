import mongoose from "mongoose"

const { Schema } = mongoose
const schema = new Schema({
  aw_product_id: {
    type: String,
    ref: "Product",
    required: true,
  },
  brand_name: {
    type: String,
  },
  brand_id: {
    type: Number,
  },
  colour: {
    type: String,
  },
  product_short_description: {
    type: String,
  },
  specifications: {
    type: String,
  },
  condition: {
    type: String,
  },
  product_model: {
    type: String,
  },
  model_number: {
    type: String,
  },
  dimensions: {
    type: String,
  },
  keywords: {
    type: String,
  },
  promotional_text: {
    type: String,
  },
  product_type: {
    type: String,
  },
})

export default mongoose.model("Product-Specification", schema)
