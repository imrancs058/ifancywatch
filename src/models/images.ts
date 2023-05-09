import mongoose from "mongoose"

const { Schema } = mongoose
const schema = new Schema({
  aw_product_id: {
    type: String,
    ref: "Product",
    required: true,
  },
  merchant_thumb_url: { type: String },
  aw_image_url: { type: String },
  aw_thumb_url: { type: String },
  large_image: { type: String },
  alternate_image: { type: String },
  alternate_image_two: { type: String },
  alternate_image_three: { type: String },
  alternate_image_four: { type: String },
  merchant_image_url: { type: String },
})

export default mongoose.model("Images", schema)
