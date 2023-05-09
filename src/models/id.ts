import mongoose from "mongoose"

const { Schema } = mongoose
const schema = new Schema({
  aw_product_id: {
    type: String,
    ref: "Product",
    required: true,
  },
  ean: {
    type: Number,
  },
  isbn: {
    type: Number,
  },
  upc: {
    // type: Number,
    type: String,
  },
  mpn: {
    type: String,
  },

  product_GTIN: {
    type: Number,
  },
})

export default mongoose.model("ID", schema)
