import mongoose from "mongoose"

const { Schema } = mongoose
const schema = new Schema({
  category: { type: String },
})

export default mongoose.model("images-category", schema)
