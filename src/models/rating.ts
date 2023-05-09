import mongoose from "mongoose"

const { Schema } = mongoose
const schema = new Schema({
  aw_product_id: {
    type: String,
    ref: "Product",
    required: true,
  },
  reviews: {
    type: String,
  },
  average_rating: {
    type: String,
  },
  rating: {
    type: String,
  },
  number_available: {
    type: String,
  },
})

export default mongoose.model("Rating", schema)
