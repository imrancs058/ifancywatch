import mongoose from "mongoose"

const { Schema } = mongoose
const schema = new Schema({
     top_seller: { type: String } ,
     brand_type: { type: String } ,
    })

export default mongoose.model("TopPreOwnSeller", schema)
