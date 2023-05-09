/* eslint-disable linebreak-style */
import mongoose from "mongoose"
const { Schema } = mongoose
const schema = new Schema({
  merchant_product_id: {
    // type: Number,
    type: String,
    // unique: true,
  },
  aw_product_id: {
    type: String,
    unique: true,
  },
  data_feed_id: {
    type: Number,
  },
  product_name: {
    type: String,
  },
  description: {
    type: String,
  },
  merchant_id: {
    type: Number,
  },
  merchant_name: {
    type: String,
  },
  category_id: {
    type: Number,
  },
  category_name: {
    type: String,
  },
  merchant_category: {
    type: String,
  },
  search_price: {
    type: Number,
  },
  currency: {
    type: String,
  },
  store_price: {
    type: String,
  },
  delivery_cost: {
    // type: Number,
    type: String,
  },
  // rrp_price: {
  //   type: Number,
  // },
  saving: {
    type: Number,
  },
  savings_percent: {
    type: String,
  },
  base_price: {
    type: Number,
  },
  base_price_amount: {
    type: Number,
  },
  base_price_text: {
    type: String,
  },
  product_price_old: {
    type: Number,
  },
  brand_name: {
    type: String,
  },
  brand_id: {
    type: Number,
  },
  colour: {
    type: String,
  },
  product_short_description: {
    type: String,
  },
  specifications: {
    type: String,
  },
  condition: {
    type: String,
  },
  product_model: {
    type: String,
  },
  model_number: {
    type: String,
  },
  dimensions: {
    type: String,
  },
  keywords: {
    type: String,
  },
  promotional_text: {
    type: String,
  },
  product_type: {
    type: String,
  },
  last_updated: {
    type: String,
  },
  in_stock: { type: String },
  stock_quantity: { type: String },
  valid_from: { type: String },
  valid_to: { type: String },
  is_for_sale: { type: String },
  web_offer: { type: String },
  pre_order: { type: String },
  stock_status: { type: String },
  size_stock_status: { type: String },
  size_stock_amount: { type: String },
  custom_1: { type: String },
  custom_2: { type: String },
  custom_3: { type: String },
  custom_4: { type: String },
  custom_5: { type: String },
  custom_6: { type: String },
  custom_7: { type: String },
  custom_8: { type: String },
  custom_9: { type: String },
  delivery_restrictions: { type: String },
  delivery_weight: { type: String },
  warranty: { type: String },
  terms_of_contract: { type: String },
  delivery_time: { type: String },
  ean: {
    // type: Number,
    type: String,
  },
  isbn: {
    type: Number,
  },
  upc: {
    // type: Number,
    type: String,
  },
  aw_deep_link:{
    type: String,
  },
  mpn: {
    type: String,
  },
 
  product_GTIN: {
    // type: Number,
    type: String,
  },
  merchant_thumb_url: { type: String },
  aw_image_url: { type: String },
  aw_thumb_url: { type: String },
  large_image: { type: String },
  alternate_image: { type: String },
  alternate_image_two: { type: String },
  alternate_image_three: { type: String },
  alternate_image_four: { type: String },
  merchant_image_url: { type: String },
  basket_link: {
    type: String,
  },
  commission_group: {
    type: String,
  },
  merchant_product_category_path: {
    type: String,
  },
  merchant_product_second_category: {
    type: String,
  },
  merchant_product_third_category: {
    type: String,
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
  Color: {
    type: String,
  },
  Material: {
    type: String,
  },

})

schema.index({ description: "text" })
export default mongoose.model("Product", schema)
