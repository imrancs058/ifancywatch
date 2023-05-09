import mongoose from "mongoose"

const { Schema } = mongoose
const schema = new Schema({
  aw_product_id: {
    type: String,
    ref: "Product",
    required: true,
  },
  custom_1: { type: String },
  custom_2: { type: String },
  custom_3: { type: String },
  custom_4: { type: String },
  custom_5: { type: String },
  custom_6: { type: String },
  custom_7: { type: String },
  custom_8: { type: String },
  custom_9: { type: String },
})

export default mongoose.model("Custom", schema)
