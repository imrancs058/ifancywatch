import mongoose from "mongoose"

const { Schema } = mongoose
const schema = new Schema({
  brand_name: { type: String },
  keyword: { type: String },
})

export default mongoose.model("collection", schema)
