import mongoose from "mongoose"

const { Schema } = mongoose
const schema = new Schema({
  aw_product_id: {
    type: String,
    ref: "Product",
    required: true,
  },
  search_price: {
    type: Number,
  },
  currency: {
    type: String,
  },
  store_price: {
    type: Number,
  },
  delivery_cost: {
    type: Number,
  },
  rrp_price: {
    type: Number,
  },
  saving: {
    type: Number,
  },
  savings_percent: {
    type: String,
  },
  base_price: {
    type: Number,
  },
  base_price_amount: {
    type: Number,
  },
  base_price_text: {
    type: String,
  },
  product_price_old: {
    type: Number,
  },
})

export default mongoose.model("Price", schema)
