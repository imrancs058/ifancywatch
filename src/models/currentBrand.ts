import mongoose from "mongoose"

const { Schema } = mongoose
const schema = new Schema({
  brand_name: { type: String },
  image: [{ type: String }],
})

export default mongoose.model("currentBrand", schema)
