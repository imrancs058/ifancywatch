import mongoose from "mongoose"

const { Schema } = mongoose
const schema = new Schema({
  file_name: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
})

export default mongoose.model("Files", schema)
