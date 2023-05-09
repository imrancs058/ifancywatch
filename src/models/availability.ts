import mongoose from "mongoose"

const { Schema } = mongoose
const schema = new Schema({
  aw_product_id: {
    type: String,
    ref: "Product",
    required: true,
  },
  in_stock: { type: String },
  stock_quantity: { type: String },
  valid_from: { type: String },
  valid_to: { type: String },
  is_for_sale: { type: String },
  web_offer: { type: String },
  pre_order: { type: String },
  stock_status: { type: String },
  size_stock_status: { type: String },
  size_stock_amount: { type: String },
})

export default mongoose.model("Availability", schema)
