import mongoose from "mongoose"

const { Schema } = mongoose
const schema = new Schema({
     top_seller_jewellery: { type: String },
     image: [{ type: String }]
     })

export default mongoose.model("TopSellerJewellery", schema)