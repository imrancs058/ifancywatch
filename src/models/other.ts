import mongoose from "mongoose"

const { Schema } = mongoose
const schema = new Schema({
  aw_product_id: {
    type: String,
    ref: "Product",
    required: true,
  },
  basket_link: {
    type: String,
  },
})

export default mongoose.model("Other", schema)
