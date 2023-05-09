import mongoose from "mongoose"

const { Schema } = mongoose
const schema = new Schema({
  aw_product_id: {
    type: String,
    ref: "Product",
    required: true,
  },
  commission_group: {
    type: String,
  },
  merchant_product_category_path: {
    type: String,
  },
  merchant_product_second_category: {
    type: String,
  },
  merchant_product_third_category: {
    type: String,
  },
})

export default mongoose.model("Product-Category", schema)
