import mongoose from "mongoose"

const { Schema } = mongoose
const schema = new Schema({
  aw_product_id: {
    type: String,
    required: true,
  },
  // product_name: { type: String },
  image: [{ type: String }],
})

export default mongoose.model("productImages", schema)
