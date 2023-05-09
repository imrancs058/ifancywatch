import mongoose from "mongoose"

const { Schema } = mongoose
const schema = new Schema({
  aw_product_id: {
    type: String,
    ref: "Product",
    required: true,
  },
  delivery_restrictions: { type: String },
  delivery_weight: { type: String },
  warranty: { type: String },
  terms_of_contract: { type: String },
  delivery_time: { type: String },
  condition: { type: String },
  product_model: { type: String },
  dimensions: { type: String },
  keywords: { type: String },
  promotional_text: { type: String },
  product_type: { type: String },
})

export default mongoose.model("Delivery-And-Specification", schema)
