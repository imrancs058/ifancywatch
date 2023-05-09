
export interface SortTable {
  category_name: string
  mens_product_name: string
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
  sub_category:string
  collection: string
  sort_by: string
  material: string
  ladiesWatch?: string
  length: string
  search?: {
    value: string
  }
}
export interface SortWomenJewellery {
    category_name: string
    sub_category: string
    color: string
    product_name: string
    brand_name: [string]
    minPrice: string
    maxPrice: string
    collection: string
    material:string
    ring_size: string
    ring_material: string
    ring_color: string
    ring_weight: string
    earring_color: string
    necklaces_color: string
    bracelets_color: string
    draw: string
    sort_by: string
    start: string
    length: string
    search?: {
        value: string
    }
}
