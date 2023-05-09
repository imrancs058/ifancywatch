export interface TableProduct {
  draw: string
  start: string
  length: string
  search?: {
    value: string
  }
}
export interface CategoryTable {
  category_name: string
  mens_product_name: string
  women_product_name: string
  brand_name: [string]
  minPrice: string
  maxPrice: string
  diameter: string
  water_resistant: string
  movement: string
  strap_material: string
  dial_color: string
  draw: string
  start: string
  collection: string
  ladiesWatch?: string
  length: string
  search?: {
    value: string
  }
}
