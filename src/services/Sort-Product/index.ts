import SortProductModel from "../../models/product-sort"
import ProductModel from "../../models/product"
import ErrorCodes, { ErrorCodesMeta } from "../../constants/error-codes"
import { ServiceFailedResponse, ServiceResponse, ServiceSuccessResponse } from "../../utils/service"
import { SortTable, SortWomenJewellery } from "./types"
import { log } from "util"

export default class SortProductService {
  async addDataInSortProductTable(): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    try {
      // to run mongodb on ubuntu
      // sudo systemctl start mongod
      const count = await ProductModel.count()
      let regex: any = /[0-9][0-9]mm/
      for (let i = 0; i < count; i += 1000) {
        const productData = await ProductModel.find().skip(i).limit(1000)
        if (productData.length > 0) {
          await productData.map(async (product: any) => {
            if (
              product._doc.product_name.includes("Ladies Watch") ||
              product._doc.description.includes("Ladies Watch") ||
              product._doc.product_name.includes("Panthère de") ||
              product._doc.description.includes("Panthère de") ||
              product._doc.description.includes("feminine jewelry watch")
            ) {
              // change the product_name to Women's Watches
              const sortData = new SortProductModel({
                merchant_product_id: product._doc.merchant_product_id,
                aw_product_id: product._doc.aw_product_id,
                data_feed_id: product._doc.data_feed_id,
                product_name: product._doc.product_name,
                description: product._doc.description,
                merchant_id: product._doc.merchant_id,
                merchant_name: product._doc.merchant_name,
                category_id: product._doc.category_id,
                category_name: "Women's Watches",
                merchant_category: product._doc.merchant_category,
                search_price: product._doc.search_price,
                currency: product._doc.currency,
                store_price: product._doc.store_price,
                delivery_cost: product._doc.delivery_cost,
                saving: product._doc.saving,
                savings_percent: product._doc.savings_percent,
                base_price: product._doc.base_price,
                base_price_amount: product._doc.base_price_amount,
                base_price_text: product._doc.base_price_text,
                product_price_old: product._doc.product_price_old,
                brand_name: product._doc.brand_name,
                brand_id: product._doc.brand_id,
                colour: product._doc.colour,
                product_short_description: product._doc.product_short_description,
                specifications: product._doc.specifications,
                condition: product._doc.condition,
                product_model: product._doc.product_model,
                model_number: product._doc.model_number,
                dimensions: product._doc.dimensions,
                keywords: product._doc.keywords,
                promotional_text: product._doc.promotional_text,
                product_type: product._doc.product_type,
                last_updated: product._doc.last_updated,
                in_stock: product._doc.in_stock,
                stock_quantity: product._doc.stock_quantity,
                valid_from: product._doc.valid_from,
                valid_to: product._doc.valid_to,
                is_for_sale: product._doc.is_for_sale,
                web_offer: product._doc.web_offer,
                pre_order: product._doc.pre_order,
                stock_status: product._doc.stock_status,
                size_stock_status: product._doc.size_stock_status,
                size_stock_amount: product._doc.size_stock_amount,
                custom_1: product._doc.custom_1,
                aw_deep_link: product._doc.aw_deep_link,
                custom_2: product._doc.custom_2,
                custom_3: product._doc.custom_3,
                custom_4: product._doc.custom_4,
                custom_5: product._doc.custom_5,
                custom_6: product._doc.custom_6,
                custom_7: product._doc.custom_7,
                custom_8: product._doc.custom_8,
                custom_9: product._doc.custom_9,
                delivery_restrictions: product._doc.delivery_restrictions,
                delivery_weight: product._doc.delivery_weight,
                warranty: product._doc.warranty,
                terms_of_contract: product._doc.terms_of_contract,
                delivery_time: product._doc.delivery_time,
                ean: product._doc.ean,
                isbn: product._doc.isbn,
                upc: product._doc.upc,
                mpn: product._doc.mpn,

                product_GTIN: product._doc.product_GTIN,
                merchant_thumb_url: product._doc.merchant_thumb_url,
                aw_image_url: product._doc.aw_image_url,
                aw_thumb_url: product._doc.aw_thumb_url,
                large_image_url: product._doc.large_image_url,
                alternate_image: product._doc.alternate_image,
                alternate_image_two: product._doc.alternate_image_two,
                alternate_image_three: product._doc.alternate_image_three,
                alternate_image_four: product._doc.alternate_image_four,
                merchant_image_url: product._doc.merchant_image_url,
                basket_link: product._doc.basket_link,
                commission_group: product._doc.commission_group,
                merchant_product_category_path: product._doc.merchant_product_category_path,
                merchant_product_second_category_path:
                  product._doc.merchant_product_second_category_path,
                merchant_product_third_category_path:
                  product._doc.merchant_product_third_category_path,
                reviews: product._doc.reviews,
                average_rating: product._doc.average_rating,
                rating: product._doc.rating,
                number_available: product._doc.number_available,
              })
              // dial colors

              if (Boolean(product._doc.Color)) {
                sortData.dial_color = product._doc.Color.toLowerCase()
              } else {
                if (
                  product._doc.description.includes("grey dial") ||
                  product._doc.description.includes("dial colour is grey")
                ) {
                  sortData.dial_color = "grey"
                } else if (product._doc.description.includes("black dial")) {
                  sortData.dial_color = "black"
                } else if (product._doc.description.includes("blue dial")) {
                  sortData.dial_color = "blue"
                } else if (product._doc.description.includes("blue coloured dial")) {
                  sortData.dial_color = "blue"
                } else if (
                  product._doc.description.includes("silver dial") ||
                  product._doc.description.includes("Silver dial")
                ) {
                  sortData.dial_color = "silver"
                } else if (product._doc.description.includes("silver/grey dial")) {
                  sortData.dial_color = "silver/grey"
                } else if (product._doc.description.includes("copper dial")) {
                  sortData.dial_color = "copper"
                } else if (product._doc.description.includes("bronze dial")) {
                  sortData.dial_color = "bronze"
                } else if (product._doc.description.includes("white")) {
                  sortData.dial_color = "white"
                } else if (product._doc.description.includes("White")) {
                  sortData.dial_color = "white"
                } else if (product._doc.description.includes("dark green dial")) {
                  sortData.dial_color = "dark green"
                } else if (product._doc.description.includes("Pearl dial")) {
                  sortData.dial_color = "pearl"
                } else if (product._doc.description.includes("pearl dial")) {
                  sortData.dial_color = "pearl"
                } else if (product._doc.description.includes("jewel-toned dial")) {
                  sortData.dial_color = "jewel-toned"
                } else if (product._doc.description.includes("Silver-tone dial")) {
                  sortData.dial_color = "silver-tone"
                } else if (product._doc.description.includes("brown dial")) {
                  sortData.dial_color = "brown"
                } else if (product._doc.description.includes("skeleton dial")) {
                  sortData.dial_color = "skeleton"
                } else if (product._doc.description.includes("silver opaline dial")) {
                  sortData.dial_color = "silver opaline"
                } else if (product._doc.description.includes("Mother-of-Pearl coloured dial")) {
                  sortData.dial_color = "Mother-of-Pearl coloured"
                } else if (product._doc.description.includes("green dial")) {
                  sortData.dial_color = "green"
                } else if (product._doc.description.includes("red dial")) {
                  sortData.dial_color = "red"
                } else if (product._doc.description.includes("brown dial")) {
                  sortData.dial_color = "brown"
                } else {
                  sortData.dial_color = ""
                }
              }

              // strap material
              if (Boolean(product._doc.Material)) {
                sortData.strap_material = product._doc.Material.toLowerCase()
              } else {
                if (product._doc.description.includes("fabric strap")) {
                  sortData.strap_material = "fabric"
                } else if (
                  product._doc.description.includes("leather strap") ||
                  product._doc.description.includes("leather bracelet")
                ) {
                  sortData.strap_material = "leather"
                } else if (
                  product._doc.description.includes("Stainless Steel") ||
                  product._doc.description.toLowerCase().includes("stainless steel bracelet") ||
                  product._doc.description.toLowerCase().includes("stainless steel metal strap") ||
                  product._doc.description
                    .toLowerCase()
                    .includes("stainless steel mesh bracelet") ||
                  product._doc.description.toLowerCase().includes("white gold bracelet") ||
                  product._doc.description.toLowerCase().includes("PVD coated steel bracelet") ||
                  product._doc.description
                    .toLowerCase()
                    .includes("spiral stainless steel bracelet") ||
                  product._doc.description
                    .toLowerCase()
                    .includes("stainless steel single spiral bracelet") ||
                  product._doc.description
                    .toLowerCase()
                    .includes("black stainless steel bracelet") ||
                  product._doc.description.toLowerCase().includes("steel bracelet")
                ) {
                  sortData.strap_material = "stainless steel"
                } else if (product._doc.description.includes("satin strap")) {
                  sortData.strap_material = "satin"
                } else if (product._doc.description.includes("Prestige bracelet")) {
                  sortData.strap_material = "prestige bracelet"
                } else if (product._doc.description.includes("silk strap")) {
                  sortData.strap_material = "silk"
                } else if (product._doc.description.includes("carbon fiber strap")) {
                  sortData.strap_material = "carbon fiber"
                } else if (product._doc.description.includes("titanium bracelet")) {
                  sortData.strap_material = "titanium bracelet"
                } else if (product._doc.description.includes("rubber strap")) {
                  sortData.strap_material = "rubber"
                } else if (product._doc.description.includes("black silicone integrated strap")) {
                  sortData.strap_material = "black silicone"
                } else if (product._doc.description.includes("black mesh bracelet")) {
                  sortData.strap_material = "black mesh"
                } else if (product._doc.description.includes("black stainless steel bracelet")) {
                  sortData.strap_material = "black stainless steel bracelet"
                } else {
                  sortData.strap_material = ""
                }
              }

              // diameter
              // if (product._doc.description.includes("21. 5mm")) {
              //   sortData.diameter = regex.exec(product._doc.description)[0]
              // }
              if (product._doc.description.includes("25 mm")) {
                sortData.diameter = "25mm"
              } else if (product._doc.description.includes("27mm")) {
                sortData.diameter = "27mm"
              } else if (product._doc.description.includes("29mm 18ct")) {
                sortData.diameter = "29mm"
              } else if (product._doc.description.includes("29mm")) {
                sortData.diameter = "29mm"
              } else if (product._doc.description.includes("30mm")) {
                sortData.diameter = "30mm"
              } else if (product._doc.description.includes("30 mm")) {
                sortData.diameter = "30mm"
              } else if (product._doc.description.includes("31mm")) {
                sortData.diameter = "31mm"
              } else if (product._doc.description.includes("32mm")) {
                sortData.diameter = "32mm"
              } else if (product._doc.description.includes("32. 7mm")) {
                sortData.diameter = "32.7mm"
              } else if (product._doc.description.includes("33mm")) {
                sortData.diameter = "33mm"
              } else if (product._doc.description.includes("33. 2mm")) {
                sortData.diameter = "33mm"
              } else if (product._doc.description.includes("33. 5mm")) {
                sortData.diameter = "34mm"
              } else if (product._doc.description.includes("34mm")) {
                sortData.diameter = "34mm"
              } else if (product._doc.description.includes("34. 5mm")) {
                sortData.diameter = "35mm"
              } else if (product._doc.description.includes("35 mm")) {
                sortData.diameter = "35mm"
              } else if (product._doc.description.includes("35mm")) {
                sortData.diameter = "35mm"
              } else if (product._doc.description.includes("35. 5mm")) {
                sortData.diameter = "36mm"
              } else if (product._doc.description.includes("35. 6mm")) {
                sortData.diameter = "36mm"
              } else if (product._doc.description.includes("36mm")) {
                sortData.diameter = "36mm"
              } else if (product._doc.description.includes("36. 6 mm")) {
                sortData.diameter = "36.6mm"
              } else if (product._doc.description.includes("36. 2mm")) {
                sortData.diameter = "36mm"
              } else if (product._doc.description.includes("36. 5mm")) {
                sortData.diameter = "37mm"
              } else if (product._doc.description.includes("36. 8mm")) {
                sortData.diameter = "37mm"
              } else if (
                product._doc.description.includes("37mm") ||
                product._doc.description.includes("37 mm")
              ) {
                sortData.diameter = "37mm"
              } else if (product._doc.description.includes("38mm")) {
                sortData.diameter = "38mm"
              } else if (product._doc.description.includes("38. 5mm")) {
                sortData.diameter = "39mm"
              } else if (product._doc.description.includes("39mm")) {
                sortData.diameter = "39mm"
              } else if (product._doc.description.includes("39. 5mm")) {
                sortData.diameter = "39.5mm"
              } else if (product._doc.description.includes("39. 9mm")) {
                sortData.diameter = "39. 9mm"
              } else if (product._doc.description.includes("40mm")) {
                sortData.diameter = "40mm"
              } else if (product._doc.description.includes("40. 2mm")) {
                sortData.diameter = "40mm"
              } else if (product._doc.description.includes("40. 4mm")) {
                sortData.diameter = "40mm"
              } else if (product._doc.description.includes("40. 5mm")) {
                sortData.diameter = "41mm"
              } else if (
                product._doc.description.includes("41mm") ||
                product._doc.description.includes("41mm stainless steel case") ||
                product._doc.product_name.includes("41mm")
              ) {
                sortData.diameter = "41mm"
              } else if (product._doc.description.includes("41. 5mm")) {
                sortData.diameter = "42mm"
              } else if (product._doc.description.includes("41.5mm")) {
                sortData.diameter = "42mm"
              } else if (
                product._doc.description.includes("42mm") ||
                product._doc.product_name.includes("42mm")
              ) {
                sortData.diameter = "42mm"
              } else if (product._doc.description.includes("42. 4mm")) {
                sortData.diameter = "42mm"
              } else if (product._doc.description.includes("42. 3mm")) {
                sortData.diameter = "42mm"
              } else if (
                product._doc.description.includes("43mm") ||
                product._doc.description.includes("43mm stainless steel case") ||
                product._doc.product_name.includes("43mm") ||
                product._doc.product_name.includes("43mm Quartz Chronograph")
              ) {
                sortData.diameter = "43mm"
              } else if (product._doc.description.includes("43. 5mm")) {
                sortData.diameter = "44mm"
              } else if (
                product._doc.description.includes("44mm") ||
                product._doc.product_name.includes("44mm")
              ) {
                sortData.diameter = "44mm"
              } else if (product._doc.description.includes("44. 25mm")) {
                sortData.diameter = "44.25mm"
              } else if (product._doc.description.includes("44. 5mm")) {
                sortData.diameter = "44mm"
              } else if (product._doc.description.includes("45mm")) {
                sortData.diameter = "45mm"
              } else if (product._doc.description.includes("45. 5mm")) {
                sortData.diameter = "46mm"
              } else if (product._doc.description.includes("45.5mm")) {
                sortData.diameter = "46mm"
              } else if (product._doc.description.includes("46mm")) {
                sortData.diameter = "46mm"
              } else if (product._doc.description.includes("46. 2mm")) {
                sortData.diameter = "46mm"
              } else if (product._doc.description.includes("46.5mm")) {
                sortData.diameter = "47mm"
              } else if (product._doc.description.includes("46. 5mm")) {
                sortData.diameter = "47mm"
              } else if (product._doc.description.includes("47mm")) {
                sortData.diameter = "47mm"
              } else if (product._doc.description.includes("48mm")) {
                sortData.diameter = "48mm"
              } else if (product._doc.description.includes("48.5mm")) {
                sortData.diameter = "49mm"
              } else if (product._doc.description.includes("49. 50mm")) {
                sortData.diameter = "49.50mm"
              } else {
                if (product._doc.product_name.includes("43mm")) {
                  sortData.diameter = "43mm"
                } else if (product._doc.product_name.includes("41mm")) {
                  sortData.diameter = "41mm"
                } else if (product._doc.product_name.includes("44 mm")) {
                  sortData.diameter = "44mm"
                } else if (product._doc.product_name.includes("44mm")) {
                  sortData.diameter = "44mm"
                } else if (product._doc.product_name.includes("27mm")) {
                  sortData.diameter = "27mm"
                } else {
                  sortData.diameter = ""
                }
              }

              // water_resistant
              if (
                product._doc.description.includes("30 metres") ||
                product._doc.description.includes("30 meters") ||
                product._doc.description.includes("30m")
              ) {
                sortData.water_resistant = "30 metres"
              } else if (product._doc.description.includes("30 Metres")) {
                sortData.water_resistant = "30 metres"
              } else if (product._doc.description.includes("50 metres")) {
                sortData.water_resistant = "50 metres"
              } else if (product._doc.description.includes("60 metres")) {
                sortData.water_resistant = "60 metres"
              } else if (product._doc.description.includes("100 metres")) {
                sortData.water_resistant = "100 metres"
              } else if (product._doc.description.includes("120 metres")) {
                sortData.water_resistant = "120 metres"
              } else if (product._doc.description.includes("150 metres")) {
                sortData.water_resistant = "150 metres"
              } else if (product._doc.description.includes("200 metres")) {
                sortData.water_resistant = "200 metres"
              } else if (product._doc.description.includes("300 metres")) {
                sortData.water_resistant = "300 metres"
              } else if (product._doc.description.includes("400 metres")) {
                sortData.water_resistant = "400 metres"
              } else if (product._doc.description.includes("500 metres metres")) {
                sortData.water_resistant = "500 metres"
              } else if (product._doc.description.includes("600 metres")) {
                sortData.water_resistant = "600 metres"
              } else if (product._doc.description.includes("700 metres")) {
                sortData.water_resistant = "700 metres"
              } else if (product._doc.description.includes("800 metres")) {
                sortData.water_resistant = "800 metres"
              } else {
                sortData.water_resistant = "not water resistant"
              }

              // movement
              if (product._doc.description.includes("automatic")) {
                sortData.movement = "automatic"
              } else if (product._doc.description.includes("quartz")) {
                sortData.movement = "quartz"
              } else if (product._doc.description.includes("manual wind")) {
                sortData.movement = "manual wind movement"
              } else {
                sortData.movement = ""
              }
              // now we have all the data we need to sort the products

              try {
                await sortData.save()
              } catch (e) {
                
              }
            }
            // else if(product._doc.category_name == "Women's Jewellery" || product._doc.category_name.includes("Women's Jewellery")){
            else if (
              product._doc.product_name.includes("Ring") ||
              product._doc.description.includes("Wedding Ring")
            ) {
              const sortData = new SortProductModel({
                merchant_product_id: product._doc.merchant_product_id,
                aw_product_id: product._doc.aw_product_id,
                data_feed_id: product._doc.data_feed_id,
                product_name: product._doc.product_name,
                description: product._doc.description,
                merchant_id: product._doc.merchant_id,
                merchant_name: product._doc.merchant_name,
                category_id: product._doc.category_id,
                category_name:
                  product._doc.category_name == "Women's Jewellery"
                    ? product._doc.category_name
                    : "Women's Jewellery",
                sub_category: "Ring",
                merchant_category: product._doc.merchant_category,
                search_price: product._doc.search_price,
                currency: product._doc.currency,
                store_price: product._doc.store_price,
                delivery_cost: product._doc.delivery_cost,
                saving: product._doc.saving,
                savings_percent: product._doc.savings_percent,
                base_price: product._doc.base_price,
                base_price_amount: product._doc.base_price_amount,
                base_price_text: product._doc.base_price_text,
                product_price_old: product._doc.product_price_old,
                brand_name: product._doc.brand_name,
                brand_id: product._doc.brand_id,
                colour: product._doc.colour,
                product_short_description: product._doc.product_short_description,
                specifications: product._doc.specifications,
                condition: product._doc.condition,
                product_model: product._doc.product_model,
                model_number: product._doc.model_number,
                dimensions: product._doc.dimensions,
                keywords: product._doc.keywords,
                aw_deep_link: product._doc.aw_deep_link,
                promotional_text: product._doc.promotional_text,
                product_type: product._doc.product_type,
                last_updated: product._doc.last_updated,
                in_stock: product._doc.in_stock,
                stock_quantity: product._doc.stock_quantity,
                valid_from: product._doc.valid_from,
                valid_to: product._doc.valid_to,
                is_for_sale: product._doc.is_for_sale,
                web_offer: product._doc.web_offer,
                pre_order: product._doc.pre_order,
                stock_status: product._doc.stock_status,
                size_stock_status: product._doc.size_stock_status,
                size_stock_amount: product._doc.size_stock_amount,
                custom_1: product._doc.custom_1,
                custom_2: product._doc.custom_2,
                custom_3: product._doc.custom_3,
                custom_4: product._doc.custom_4,
                custom_5: product._doc.custom_5,
                custom_6: product._doc.custom_6,
                custom_7: product._doc.custom_7,
                custom_8: product._doc.custom_8,
                custom_9: product._doc.custom_9,
                delivery_restrictions: product._doc.delivery_restrictions,
                delivery_weight: product._doc.delivery_weight,
                warranty: product._doc.warranty,
                terms_of_contract: product._doc.terms_of_contract,
                delivery_time: product._doc.delivery_time,
                ean: product._doc.ean,
                isbn: product._doc.isbn,
                upc: product._doc.upc,
                mpn: product._doc.mpn,

                product_GTIN: product._doc.product_GTIN,
                merchant_thumb_url: product._doc.merchant_thumb_url,
                aw_image_url: product._doc.aw_image_url,
                aw_thumb_url: product._doc.aw_thumb_url,
                large_image_url: product._doc.large_image_url,
                alternate_image: product._doc.alternate_image,
                alternate_image_two: product._doc.alternate_image_two,
                alternate_image_three: product._doc.alternate_image_three,
                alternate_image_four: product._doc.alternate_image_four,
                merchant_image_url: product._doc.merchant_image_url,
                basket_link: product._doc.basket_link,
                commission_group: product._doc.commission_group,
                merchant_product_category_path: product._doc.merchant_product_category_path,
                merchant_product_second_category_path:
                  product._doc.merchant_product_second_category_path,
                merchant_product_third_category_path:
                  product._doc.merchant_product_third_category_path,
                reviews: product._doc.reviews,
                average_rating: product._doc.average_rating,
                rating: product._doc.rating,
                number_available: product._doc.number_available,
              })

              //size
              if (
                product._doc.description.includes("2.5mm") ||
                product._doc.product_name.includes("2.5mm")
              ) {
                sortData.ring_size = "2.5mm"
              } else if (
                product._doc.description.includes("2. 5mm") ||
                product._doc.product_name.includes("2.5mm")
              ) {
                sortData.ring_size = "2.5mm"
              } else if (
                product._doc.description.includes("2mm") ||
                product._doc.product_name.includes("2mm")
              ) {
                sortData.ring_size = "2mm"
              } else if (
                product._doc.description.includes("3mm") ||
                product._doc.product_name.includes("3mm")
              ) {
                sortData.ring_size = "3mm"
              } else if (
                product._doc.description.includes("4mm") ||
                product._doc.product_name.includes("4mm")
              ) {
                sortData.ring_size = "4mm"
              } else if (
                product._doc.description.includes("5mm") ||
                product._doc.product_name.includes("5mm")
              ) {
                sortData.ring_size = "5mm"
              } else if (
                product._doc.description.includes("6mm") ||
                product._doc.product_name.includes("6mm")
              ) {
                sortData.ring_size = "6mm"
              } else if (
                product._doc.description.includes("7mm") ||
                product._doc.product_name.includes("7mm")
              ) {
                sortData.ring_size = "7mm"
              } else if (
                product._doc.description.includes("8mm") ||
                product._doc.product_name.includes("8mm")
              ) {
                sortData.ring_size = "8mm"
              } else {
                sortData.ring_size = ""
              }

              //Material
              if (
                product._doc.product_name.includes("Platinum") ||
                product._doc.description.includes("Platinum")
              ) {
                sortData.ring_material = "Platinum"
              } else {
                sortData.ring_material = ""
              }

              //colour
              if (
                product._doc.product_name.includes("White Gold") ||
                product._doc.description.includes("White Gold")
              ) {
                sortData.ring_color = "White Gold"
              } else if (product._doc.description.includes("gold solitaire")) {
                sortData.ring_color = "gold"
              } else if (
                product._doc.description.includes("gold plated") ||
                product._doc.description.includes("Gold plated") ||
                product._doc.description.includes("gold")
              ) {
                sortData.ring_color = "Gold"
              } else {
                sortData.ring_color = ""
              }

              //weight
              if (
                product._doc.description.includes("0.09") ||
                product._doc.description.includes("0. 09")
              ) {
                sortData.ring_weight = "0.09 carat"
              } else if (
                product._doc.description.includes("9") &&
                product._doc.product_name.includes("9 Carat")
              ) {
                sortData.ring_weight = "9 carat"
              } else if (
                product._doc.description.includes("18") &&
                product._doc.product_name.includes("18 Carat")
              ) {
                sortData.ring_weight = "18 carat"
              } else if (
                product._doc.description.includes("0. 20 carat") &&
                product._doc.product_name.includes("0.20")
              ) {
                sortData.ring_weight = "0.20 carat"
              } else if (product._doc.description.includes("0. 33")) {
                sortData.ring_weight = "0.33 carat"
              } else if (
                product._doc.description.includes("0. 44") ||
                product._doc.product_name.includes("0.44") ||
                product._doc.description.includes("0.44")
              ) {
                sortData.ring_weight = "0.44 carat"
              } else {
                sortData.ring_weight = ""
              }

              try {
                await sortData.save()
              } catch (e) {
                
              }
            } else if (
              product._doc.merchant_category.includes("earrings") ||
              product._doc.merchant_category.includes("Earrings") ||
              product._doc.merchant_category.includes("Earring") ||
              product._doc.product_name.includes("Earrings") ||
              product._doc.product_name.includes("earrings") ||
              product._doc.description.includes("Earrings")
            ) {
              const sortData = new SortProductModel({
                merchant_product_id: product._doc.merchant_product_id,
                aw_product_id: product._doc.aw_product_id,
                data_feed_id: product._doc.data_feed_id,
                product_name: product._doc.product_name,
                description: product._doc.description,
                merchant_id: product._doc.merchant_id,
                merchant_name: product._doc.merchant_name,
                category_id: product._doc.category_id,
                category_name:
                  product._doc.category_name == "Women's Jewellery"
                    ? product._doc.category_name
                    : "Women's Jewellery",
                sub_category: "Earrings",
                merchant_category: product._doc.merchant_category,
                search_price: product._doc.search_price,
                currency: product._doc.currency,
                store_price: product._doc.store_price,
                delivery_cost: product._doc.delivery_cost,

                saving: product._doc.saving,
                savings_percent: product._doc.savings_percent,
                base_price: product._doc.base_price,
                base_price_amount: product._doc.base_price_amount,
                base_price_text: product._doc.base_price_text,
                product_price_old: product._doc.product_price_old,
                brand_name: product._doc.brand_name,
                brand_id: product._doc.brand_id,
                colour: product._doc.colour,
                product_short_description: product._doc.product_short_description,
                specifications: product._doc.specifications,
                condition: product._doc.condition,
                product_model: product._doc.product_model,
                model_number: product._doc.model_number,
                dimensions: product._doc.dimensions,
                keywords: product._doc.keywords,
                aw_deep_link: product._doc.aw_deep_link,
                promotional_text: product._doc.promotional_text,
                product_type: product._doc.product_type,
                last_updated: product._doc.last_updated,
                in_stock: product._doc.in_stock,
                stock_quantity: product._doc.stock_quantity,
                valid_from: product._doc.valid_from,
                valid_to: product._doc.valid_to,
                is_for_sale: product._doc.is_for_sale,
                web_offer: product._doc.web_offer,
                pre_order: product._doc.pre_order,
                stock_status: product._doc.stock_status,
                size_stock_status: product._doc.size_stock_status,
                size_stock_amount: product._doc.size_stock_amount,
                custom_1: product._doc.custom_1,
                custom_2: product._doc.custom_2,
                custom_3: product._doc.custom_3,
                custom_4: product._doc.custom_4,
                custom_5: product._doc.custom_5,
                custom_6: product._doc.custom_6,
                custom_7: product._doc.custom_7,
                custom_8: product._doc.custom_8,
                custom_9: product._doc.custom_9,
                delivery_restrictions: product._doc.delivery_restrictions,
                delivery_weight: product._doc.delivery_weight,
                warranty: product._doc.warranty,
                terms_of_contract: product._doc.terms_of_contract,
                delivery_time: product._doc.delivery_time,
                ean: product._doc.ean,
                isbn: product._doc.isbn,
                upc: product._doc.upc,
                mpn: product._doc.mpn,

                product_GTIN: product._doc.product_GTIN,
                merchant_thumb_url: product._doc.merchant_thumb_url,
                aw_image_url: product._doc.aw_image_url,
                aw_thumb_url: product._doc.aw_thumb_url,
                large_image_url: product._doc.large_image_url,
                alternate_image: product._doc.alternate_image,
                alternate_image_two: product._doc.alternate_image_two,
                alternate_image_three: product._doc.alternate_image_three,
                alternate_image_four: product._doc.alternate_image_four,
                merchant_image_url: product._doc.merchant_image_url,
                basket_link: product._doc.basket_link,
                commission_group: product._doc.commission_group,
                merchant_product_category_path: product._doc.merchant_product_category_path,
                merchant_product_second_category_path:
                  product._doc.merchant_product_second_category_path,
                merchant_product_third_category_path:
                  product._doc.merchant_product_third_category_path,
                reviews: product._doc.reviews,
                average_rating: product._doc.average_rating,
                rating: product._doc.rating,
                number_available: product._doc.number_available,
              })

              //colour
              if (
                product._doc.product_name.includes("Ethical Rose Gold") ||
                product._doc.description.includes("rose gold")
              ) {
                sortData.earring_color = "Rose Gold"
              } else if (product._doc.product_name.includes("Ethical Yellow Gold")) {
                sortData.earring_color = "Yellow Gold"
              } else if (product._doc.product_name.includes("Ethical White Gold")) {
                sortData.earring_color = "White Gold"
              } else if (
                product._doc.description.includes("gold plated") ||
                product._doc.description.includes("Gold plated") ||
                product._doc.description.includes("gold")
              ) {
                sortData.earring_color = "Gold"
              } else {
                sortData.earring_color = ""
              }

              try {
                await sortData.save()
              } catch (e) {
                
              }
            } else if (
              product._doc.merchant_category.includes("necklaces") ||
              product._doc.merchant_category.includes("Necklaces") ||
              product._doc.merchant_category.includes("Necklace") ||
              product._doc.product_name.includes("Necklace") ||
              product._doc.description.includes("Necklace")
            ) {
              const sortData = new SortProductModel({
                merchant_product_id: product._doc.merchant_product_id,
                aw_product_id: product._doc.aw_product_id,
                data_feed_id: product._doc.data_feed_id,
                product_name: product._doc.product_name,
                description: product._doc.description,
                merchant_id: product._doc.merchant_id,
                merchant_name: product._doc.merchant_name,
                category_id: product._doc.category_id,
                category_name:
                  product._doc.category_name == "Women's Jewellery"
                    ? product._doc.category_name
                    : "Women's Jewellery",
                sub_category: "Necklaces",
                merchant_category: product._doc.merchant_category,
                search_price: product._doc.search_price,
                currency: product._doc.currency,
                store_price: product._doc.store_price,
                delivery_cost: product._doc.delivery_cost,
                saving: product._doc.saving,
                savings_percent: product._doc.savings_percent,
                base_price: product._doc.base_price,
                base_price_amount: product._doc.base_price_amount,
                base_price_text: product._doc.base_price_text,
                product_price_old: product._doc.product_price_old,
                brand_name: product._doc.brand_name,
                brand_id: product._doc.brand_id,
                colour: product._doc.colour,
                product_short_description: product._doc.product_short_description,
                specifications: product._doc.specifications,
                condition: product._doc.condition,
                product_model: product._doc.product_model,
                model_number: product._doc.model_number,
                dimensions: product._doc.dimensions,
                keywords: product._doc.keywords,
                aw_deep_link: product._doc.aw_deep_link,
                promotional_text: product._doc.promotional_text,
                product_type: product._doc.product_type,
                last_updated: product._doc.last_updated,
                in_stock: product._doc.in_stock,
                stock_quantity: product._doc.stock_quantity,
                valid_from: product._doc.valid_from,
                valid_to: product._doc.valid_to,
                is_for_sale: product._doc.is_for_sale,
                web_offer: product._doc.web_offer,
                pre_order: product._doc.pre_order,
                stock_status: product._doc.stock_status,
                size_stock_status: product._doc.size_stock_status,
                size_stock_amount: product._doc.size_stock_amount,
                custom_1: product._doc.custom_1,
                custom_2: product._doc.custom_2,
                custom_3: product._doc.custom_3,
                custom_4: product._doc.custom_4,
                custom_5: product._doc.custom_5,
                custom_6: product._doc.custom_6,
                custom_7: product._doc.custom_7,
                custom_8: product._doc.custom_8,
                custom_9: product._doc.custom_9,
                delivery_restrictions: product._doc.delivery_restrictions,
                delivery_weight: product._doc.delivery_weight,
                warranty: product._doc.warranty,
                terms_of_contract: product._doc.terms_of_contract,
                delivery_time: product._doc.delivery_time,
                ean: product._doc.ean,
                isbn: product._doc.isbn,
                upc: product._doc.upc,
                mpn: product._doc.mpn,

                product_GTIN: product._doc.product_GTIN,
                merchant_thumb_url: product._doc.merchant_thumb_url,
                aw_image_url: product._doc.aw_image_url,
                aw_thumb_url: product._doc.aw_thumb_url,
                large_image_url: product._doc.large_image_url,
                alternate_image: product._doc.alternate_image,
                alternate_image_two: product._doc.alternate_image_two,
                alternate_image_three: product._doc.alternate_image_three,
                alternate_image_four: product._doc.alternate_image_four,
                merchant_image_url: product._doc.merchant_image_url,
                basket_link: product._doc.basket_link,
                commission_group: product._doc.commission_group,
                merchant_product_category_path: product._doc.merchant_product_category_path,
                merchant_product_second_category_path:
                  product._doc.merchant_product_second_category_path,
                merchant_product_third_category_path:
                  product._doc.merchant_product_third_category_path,
                reviews: product._doc.reviews,
                average_rating: product._doc.average_rating,
                rating: product._doc.rating,
                number_available: product._doc.number_available,
              })

              //colour
              if (
                product._doc.description.includes("rose gold") ||
                product._doc.description.includes("Rose Gold")
              ) {
                sortData.necklaces_color = "Rose Gold"
              } else if (
                product._doc.description.includes("yellow gold") ||
                product._doc.description.includes("Yellow Gold")
              ) {
                sortData.necklaces_color = "Yellow Gold"
              } else if (
                product._doc.description.includes("white gold") ||
                product._doc.description.includes("White Gold")
              ) {
                sortData.necklaces_color = "White Gold"
              } else if (
                product._doc.description.includes("gold plated") ||
                product._doc.description.includes("Gold plated") ||
                product._doc.description.includes("gold")
              ) {
                sortData.necklaces_color = "Gold"
              } else {
                sortData.necklaces_color = ""
              }

              try {
                await sortData.save()
              } catch (e) {
                
              }
            } else if (
              product._doc.merchant_category.includes("bracelets") ||
              product._doc.merchant_category.includes("Bracelets") ||
              product._doc.product_name.includes("Bangle") ||
              product._doc.product_name.includes("Bracelet") ||
              product._doc.description.includes("Bracelet")
            ) {
              const sortData = new SortProductModel({
                merchant_product_id: product._doc.merchant_product_id,
                aw_product_id: product._doc.aw_product_id,
                data_feed_id: product._doc.data_feed_id,
                product_name: product._doc.product_name,
                description: product._doc.description,
                merchant_id: product._doc.merchant_id,
                merchant_name: product._doc.merchant_name,
                category_id: product._doc.category_id,
                category_name:
                  product._doc.category_name == "Women's Jewellery"
                    ? product._doc.category_name
                    : "Women's Jewellery",
                sub_category: "Bracelets",
                merchant_category: product._doc.merchant_category,
                search_price: product._doc.search_price,
                currency: product._doc.currency,
                store_price: product._doc.store_price,
                delivery_cost: product._doc.delivery_cost,
                saving: product._doc.saving,
                savings_percent: product._doc.savings_percent,
                base_price: product._doc.base_price,
                base_price_amount: product._doc.base_price_amount,
                base_price_text: product._doc.base_price_text,
                product_price_old: product._doc.product_price_old,
                brand_name: product._doc.brand_name,
                brand_id: product._doc.brand_id,
                colour: product._doc.colour,
                product_short_description: product._doc.product_short_description,
                specifications: product._doc.specifications,
                condition: product._doc.condition,
                product_model: product._doc.product_model,
                model_number: product._doc.model_number,
                dimensions: product._doc.dimensions,
                keywords: product._doc.keywords,
                aw_deep_link: product._doc.aw_deep_link,
                promotional_text: product._doc.promotional_text,
                product_type: product._doc.product_type,
                last_updated: product._doc.last_updated,
                in_stock: product._doc.in_stock,
                stock_quantity: product._doc.stock_quantity,
                valid_from: product._doc.valid_from,
                valid_to: product._doc.valid_to,
                is_for_sale: product._doc.is_for_sale,
                web_offer: product._doc.web_offer,
                pre_order: product._doc.pre_order,
                stock_status: product._doc.stock_status,
                size_stock_status: product._doc.size_stock_status,
                size_stock_amount: product._doc.size_stock_amount,
                custom_1: product._doc.custom_1,
                custom_2: product._doc.custom_2,
                custom_3: product._doc.custom_3,
                custom_4: product._doc.custom_4,
                custom_5: product._doc.custom_5,
                custom_6: product._doc.custom_6,
                custom_7: product._doc.custom_7,
                custom_8: product._doc.custom_8,
                custom_9: product._doc.custom_9,
                delivery_restrictions: product._doc.delivery_restrictions,
                delivery_weight: product._doc.delivery_weight,
                warranty: product._doc.warranty,
                terms_of_contract: product._doc.terms_of_contract,
                delivery_time: product._doc.delivery_time,
                ean: product._doc.ean,
                isbn: product._doc.isbn,
                upc: product._doc.upc,
                mpn: product._doc.mpn,

                product_GTIN: product._doc.product_GTIN,
                merchant_thumb_url: product._doc.merchant_thumb_url,
                aw_image_url: product._doc.aw_image_url,
                aw_thumb_url: product._doc.aw_thumb_url,
                large_image_url: product._doc.large_image_url,
                alternate_image: product._doc.alternate_image,
                alternate_image_two: product._doc.alternate_image_two,
                alternate_image_three: product._doc.alternate_image_three,
                alternate_image_four: product._doc.alternate_image_four,
                merchant_image_url: product._doc.merchant_image_url,
                basket_link: product._doc.basket_link,
                commission_group: product._doc.commission_group,
                merchant_product_category_path: product._doc.merchant_product_category_path,
                merchant_product_second_category_path:
                  product._doc.merchant_product_second_category_path,
                merchant_product_third_category_path:
                  product._doc.merchant_product_third_category_path,
                reviews: product._doc.reviews,
                average_rating: product._doc.average_rating,
                rating: product._doc.rating,
                number_available: product._doc.number_available,
              })

              //colour
              if (
                product._doc.description.includes("rose gold") ||
                product._doc.description.includes("Rose Gold")
              ) {
                sortData.bracelets_color = "Rose Gold"
              } else if (
                product._doc.description.includes("yellow gold") ||
                product._doc.description.includes("Yellow Gold")
              ) {
                sortData.bracelets_color = "Yellow Gold"
              } else if (
                product._doc.description.includes("white gold") ||
                product._doc.description.includes("White Gold")
              ) {
                sortData.bracelets_color = "White Gold"
              } else if (
                product._doc.description.includes("gold plated") ||
                product._doc.description.includes("Gold plated") ||
                product._doc.description.includes("gold")
              ) {
                sortData.bracelets_color = "Gold"
              } else {
                sortData.bracelets_color = ""
              }

              try {
                await sortData.save()
              } catch (e) {
                
              }
            } else if (
              product._doc.product_name.includes("Charm") ||
              product._doc.merchant_category.includes("Charm")
            ) {
              const sortData = new SortProductModel({
                merchant_product_id: product._doc.merchant_product_id,
                aw_product_id: product._doc.aw_product_id,
                data_feed_id: product._doc.data_feed_id,
                product_name: product._doc.product_name,
                description: product._doc.description,
                merchant_id: product._doc.merchant_id,
                merchant_name: product._doc.merchant_name,
                category_id: product._doc.category_id,
                category_name:
                  product._doc.category_name == "Women's Jewellery"
                    ? product._doc.category_name
                    : "Women's Jewellery",
                sub_category: "Charm",
                merchant_category: product._doc.merchant_category,
                search_price: product._doc.search_price,
                currency: product._doc.currency,
                store_price: product._doc.store_price,
                delivery_cost: product._doc.delivery_cost,
                saving: product._doc.saving,
                savings_percent: product._doc.savings_percent,
                base_price: product._doc.base_price,
                base_price_amount: product._doc.base_price_amount,
                base_price_text: product._doc.base_price_text,
                product_price_old: product._doc.product_price_old,
                brand_name: product._doc.brand_name,
                brand_id: product._doc.brand_id,
                colour: product._doc.colour,
                product_short_description: product._doc.product_short_description,
                specifications: product._doc.specifications,
                condition: product._doc.condition,
                product_model: product._doc.product_model,
                model_number: product._doc.model_number,
                dimensions: product._doc.dimensions,
                keywords: product._doc.keywords,
                aw_deep_link: product._doc.aw_deep_link,
                promotional_text: product._doc.promotional_text,
                product_type: product._doc.product_type,
                last_updated: product._doc.last_updated,
                in_stock: product._doc.in_stock,
                stock_quantity: product._doc.stock_quantity,
                valid_from: product._doc.valid_from,
                valid_to: product._doc.valid_to,
                is_for_sale: product._doc.is_for_sale,
                web_offer: product._doc.web_offer,
                pre_order: product._doc.pre_order,
                stock_status: product._doc.stock_status,
                size_stock_status: product._doc.size_stock_status,
                size_stock_amount: product._doc.size_stock_amount,
                custom_1: product._doc.custom_1,
                custom_2: product._doc.custom_2,
                custom_3: product._doc.custom_3,
                custom_4: product._doc.custom_4,
                custom_5: product._doc.custom_5,
                custom_6: product._doc.custom_6,
                custom_7: product._doc.custom_7,
                custom_8: product._doc.custom_8,
                custom_9: product._doc.custom_9,
                delivery_restrictions: product._doc.delivery_restrictions,
                delivery_weight: product._doc.delivery_weight,
                warranty: product._doc.warranty,
                terms_of_contract: product._doc.terms_of_contract,
                delivery_time: product._doc.delivery_time,
                ean: product._doc.ean,
                isbn: product._doc.isbn,
                upc: product._doc.upc,
                mpn: product._doc.mpn,

                product_GTIN: product._doc.product_GTIN,
                merchant_thumb_url: product._doc.merchant_thumb_url,
                aw_image_url: product._doc.aw_image_url,
                aw_thumb_url: product._doc.aw_thumb_url,
                large_image_url: product._doc.large_image_url,
                alternate_image: product._doc.alternate_image,
                alternate_image_two: product._doc.alternate_image_two,
                alternate_image_three: product._doc.alternate_image_three,
                alternate_image_four: product._doc.alternate_image_four,
                merchant_image_url: product._doc.merchant_image_url,
                basket_link: product._doc.basket_link,
                commission_group: product._doc.commission_group,
                merchant_product_category_path: product._doc.merchant_product_category_path,
                merchant_product_second_category_path:
                  product._doc.merchant_product_second_category_path,
                merchant_product_third_category_path:
                  product._doc.merchant_product_third_category_path,
                reviews: product._doc.reviews,
                average_rating: product._doc.average_rating,
                rating: product._doc.rating,
                number_available: product._doc.number_available,
              })

              try {
                await sortData.save()
              } catch (e) {
                
              }
            } else if (
              product._doc.product_name.includes("Pendant") ||
              product._doc.description.includes("Pendant")
            ) {
              const sortData = new SortProductModel({
                merchant_product_id: product._doc.merchant_product_id,
                aw_product_id: product._doc.aw_product_id,
                data_feed_id: product._doc.data_feed_id,
                product_name: product._doc.product_name,
                description: product._doc.description,
                merchant_id: product._doc.merchant_id,
                merchant_name: product._doc.merchant_name,
                category_id: product._doc.category_id,
                category_name:
                  product._doc.category_name == "Women's Jewellery"
                    ? product._doc.category_name
                    : "Women's Jewellery",
                sub_category: "Pendant",
                merchant_category: product._doc.merchant_category,
                search_price: product._doc.search_price,
                currency: product._doc.currency,
                store_price: product._doc.store_price,
                delivery_cost: product._doc.delivery_cost,
                saving: product._doc.saving,
                savings_percent: product._doc.savings_percent,
                base_price: product._doc.base_price,
                base_price_amount: product._doc.base_price_amount,
                base_price_text: product._doc.base_price_text,
                product_price_old: product._doc.product_price_old,
                brand_name: product._doc.brand_name,
                brand_id: product._doc.brand_id,
                colour: product._doc.colour,
                product_short_description: product._doc.product_short_description,
                specifications: product._doc.specifications,
                condition: product._doc.condition,
                product_model: product._doc.product_model,
                model_number: product._doc.model_number,
                dimensions: product._doc.dimensions,
                keywords: product._doc.keywords,
                aw_deep_link: product._doc.aw_deep_link,
                promotional_text: product._doc.promotional_text,
                product_type: product._doc.product_type,
                last_updated: product._doc.last_updated,
                in_stock: product._doc.in_stock,
                stock_quantity: product._doc.stock_quantity,
                valid_from: product._doc.valid_from,
                valid_to: product._doc.valid_to,
                is_for_sale: product._doc.is_for_sale,
                web_offer: product._doc.web_offer,
                pre_order: product._doc.pre_order,
                stock_status: product._doc.stock_status,
                size_stock_status: product._doc.size_stock_status,
                size_stock_amount: product._doc.size_stock_amount,
                custom_1: product._doc.custom_1,
                custom_2: product._doc.custom_2,
                custom_3: product._doc.custom_3,
                custom_4: product._doc.custom_4,
                custom_5: product._doc.custom_5,
                custom_6: product._doc.custom_6,
                custom_7: product._doc.custom_7,
                custom_8: product._doc.custom_8,
                custom_9: product._doc.custom_9,
                delivery_restrictions: product._doc.delivery_restrictions,
                delivery_weight: product._doc.delivery_weight,
                warranty: product._doc.warranty,
                terms_of_contract: product._doc.terms_of_contract,
                delivery_time: product._doc.delivery_time,
                ean: product._doc.ean,
                isbn: product._doc.isbn,
                upc: product._doc.upc,
                mpn: product._doc.mpn,

                product_GTIN: product._doc.product_GTIN,
                merchant_thumb_url: product._doc.merchant_thumb_url,
                aw_image_url: product._doc.aw_image_url,
                aw_thumb_url: product._doc.aw_thumb_url,
                large_image_url: product._doc.large_image_url,
                alternate_image: product._doc.alternate_image,
                alternate_image_two: product._doc.alternate_image_two,
                alternate_image_three: product._doc.alternate_image_three,
                alternate_image_four: product._doc.alternate_image_four,
                merchant_image_url: product._doc.merchant_image_url,
                basket_link: product._doc.basket_link,
                commission_group: product._doc.commission_group,
                merchant_product_category_path: product._doc.merchant_product_category_path,
                merchant_product_second_category_path:
                  product._doc.merchant_product_second_category_path,
                merchant_product_third_category_path:
                  product._doc.merchant_product_third_category_path,
                reviews: product._doc.reviews,
                average_rating: product._doc.average_rating,
                rating: product._doc.rating,
                number_available: product._doc.number_available,
              })

              if (
                product._doc.product_name.includes("Stainless Steel") ||
                product._doc.description.includes("Stainless Steel")
              ) {
                sortData.pendant_material = "Stainless Steel"
              } else if (
                product._doc.product_name.includes("Leather") ||
                product._doc.description.includes("Leather")
              ) {
                sortData.pendant_material = "Leather"
              } else {
                sortData.pendant_material = ""
              }

              if (
                product._doc.product_name.includes("Gold Tone") ||
                product._doc.description.includes("Gold Tone")
              ) {
                sortData.pendant_color = "Gold Tone"
              } else {
                sortData.pendant_color = ""
              }

    
              try {
                await sortData.save()
              } catch (e) {
                
              }
            } else if (
              product._doc.product_name.includes("Cuff Links") ||
              product._doc.product_name.includes("Cufflinks") ||
              product._doc.description.includes("Cuff links") ||
              product._doc.description.includes("cuff links")
            ) {
              const sortData = new SortProductModel({
                merchant_product_id: product._doc.merchant_product_id,
                aw_product_id: product._doc.aw_product_id,
                data_feed_id: product._doc.data_feed_id,
                product_name: product._doc.product_name,
                description: product._doc.description,
                merchant_id: product._doc.merchant_id,
                merchant_name: product._doc.merchant_name,
                category_id: product._doc.category_id,
                category_name:
                  product._doc.category_name == "Women's Jewellery"
                    ? product._doc.category_name
                    : "Women's Jewellery",
                sub_category: "Cuff links",
                merchant_category: product._doc.merchant_category,
                search_price: product._doc.search_price,
                currency: product._doc.currency,
                store_price: product._doc.store_price,
                delivery_cost: product._doc.delivery_cost,

                saving: product._doc.saving,
                savings_percent: product._doc.savings_percent,
                base_price: product._doc.base_price,
                base_price_amount: product._doc.base_price_amount,
                base_price_text: product._doc.base_price_text,
                product_price_old: product._doc.product_price_old,
                brand_name: product._doc.brand_name,
                brand_id: product._doc.brand_id,
                colour: product._doc.colour,
                product_short_description: product._doc.product_short_description,
                specifications: product._doc.specifications,
                condition: product._doc.condition,
                product_model: product._doc.product_model,
                model_number: product._doc.model_number,
                dimensions: product._doc.dimensions,
                keywords: product._doc.keywords,
                aw_deep_link: product._doc.aw_deep_link,
                promotional_text: product._doc.promotional_text,
                product_type: product._doc.product_type,
                last_updated: product._doc.last_updated,
                in_stock: product._doc.in_stock,
                stock_quantity: product._doc.stock_quantity,
                valid_from: product._doc.valid_from,
                valid_to: product._doc.valid_to,
                is_for_sale: product._doc.is_for_sale,
                web_offer: product._doc.web_offer,
                pre_order: product._doc.pre_order,
                stock_status: product._doc.stock_status,
                size_stock_status: product._doc.size_stock_status,
                size_stock_amount: product._doc.size_stock_amount,
                custom_1: product._doc.custom_1,
                custom_2: product._doc.custom_2,
                custom_3: product._doc.custom_3,
                custom_4: product._doc.custom_4,
                custom_5: product._doc.custom_5,
                custom_6: product._doc.custom_6,
                custom_7: product._doc.custom_7,
                custom_8: product._doc.custom_8,
                custom_9: product._doc.custom_9,
                delivery_restrictions: product._doc.delivery_restrictions,
                delivery_weight: product._doc.delivery_weight,
                warranty: product._doc.warranty,
                terms_of_contract: product._doc.terms_of_contract,
                delivery_time: product._doc.delivery_time,
                ean: product._doc.ean,
                isbn: product._doc.isbn,
                upc: product._doc.upc,
                mpn: product._doc.mpn,

                product_GTIN: product._doc.product_GTIN,
                merchant_thumb_url: product._doc.merchant_thumb_url,
                aw_image_url: product._doc.aw_image_url,
                aw_thumb_url: product._doc.aw_thumb_url,
                large_image_url: product._doc.large_image_url,
                alternate_image: product._doc.alternate_image,
                alternate_image_two: product._doc.alternate_image_two,
                alternate_image_three: product._doc.alternate_image_three,
                alternate_image_four: product._doc.alternate_image_four,
                merchant_image_url: product._doc.merchant_image_url,
                basket_link: product._doc.basket_link,
                commission_group: product._doc.commission_group,
                merchant_product_category_path: product._doc.merchant_product_category_path,
                merchant_product_second_category_path:
                  product._doc.merchant_product_second_category_path,
                merchant_product_third_category_path:
                  product._doc.merchant_product_third_category_path,
                reviews: product._doc.reviews,
                average_rating: product._doc.average_rating,
                rating: product._doc.rating,
                number_available: product._doc.number_available,
              })

     
              try {
                await sortData.save()
              } catch (e) {
                
              }
            } else if (
              product._doc.product_name.includes("watch") ||
              product._doc.product_name.includes("Watch") ||
              product._doc.category_name.includes("Men's Watches") ||
              product._doc.merchant_category.includes("Accessories") ||
              product._doc.merchant_category.includes("Gift") ||
              product._doc.product_name.includes("Pen")
            ) {
              let cat, subCategory
              if (
                product._doc.product_name.includes("watch") ||
                product._doc.product_name.includes("Watch") ||
                product._doc.category_name.includes("Men's Watches")
              ) {
                if (
                  !product._doc.product_name.includes("Watch Roll") &&
                  !product._doc.product_name.includes("Watch Box")
                ) {
                  cat = product._doc.category_name ? product._doc.category_name : "Men's Watches"
                }
              } else if (product._doc.merchant_category.includes("Accessories")) {
                cat = "Accessories"
                if (product._doc.product_name.includes("Watch Roll")) {
                  subCategory = "Watch Roll"
                } else if (product._doc.product_name.includes("Watch Box")) {
                  subCategory = "Watch Box"
                }
              } else if (product._doc.merchant_category.includes("Gift")) {
                cat = "Accessories"
                subCategory = "Gift"
              } else if (
                product._doc.product_name.includes("Pen") &&
                !product._doc.product_name.includes("Pendulum")
              ) {
                cat = "Accessories"
                subCategory = "Pen"
              }
              const sortData = new SortProductModel({
                merchant_product_id: product._doc.merchant_product_id,
                aw_product_id: product._doc.aw_product_id,
                data_feed_id: product._doc.data_feed_id,
                product_name: product._doc.product_name,
                description: product._doc.description,
                merchant_id: product._doc.merchant_id,
                merchant_name: product._doc.merchant_name,
                category_id: product._doc.category_id,
                // category_name: product._doc.category_name ? product._doc.category_name : "Men's Watches",
                category_name: cat,
                sub_category: subCategory,
                merchant_category: product._doc.merchant_category,
                search_price: product._doc.search_price,
                currency: product._doc.currency,
                store_price: product._doc.store_price,
                delivery_cost: product._doc.delivery_cost,
                saving: product._doc.saving,
                savings_percent: product._doc.savings_percent,
                base_price: product._doc.base_price,
                base_price_amount: product._doc.base_price_amount,
                base_price_text: product._doc.base_price_text,
                product_price_old: product._doc.product_price_old,
                brand_name: product._doc.brand_name,
                brand_id: product._doc.brand_id,
                colour: product._doc.colour,
                product_short_description: product._doc.product_short_description,
                specifications: product._doc.specifications,
                condition: product._doc.condition,
                product_model: product._doc.product_model,
                model_number: product._doc.model_number,
                dimensions: product._doc.dimensions,
                keywords: product._doc.keywords,
                aw_deep_link: product._doc.aw_deep_link,
                promotional_text: product._doc.promotional_text,
                product_type: product._doc.product_type,
                last_updated: product._doc.last_updated,
                in_stock: product._doc.in_stock,
                stock_quantity: product._doc.stock_quantity,
                valid_from: product._doc.valid_from,
                valid_to: product._doc.valid_to,
                is_for_sale: product._doc.is_for_sale,
                web_offer: product._doc.web_offer,
                pre_order: product._doc.pre_order,
                stock_status: product._doc.stock_status,
                size_stock_status: product._doc.size_stock_status,
                size_stock_amount: product._doc.size_stock_amount,
                custom_1: product._doc.custom_1,
                custom_2: product._doc.custom_2,
                custom_3: product._doc.custom_3,
                custom_4: product._doc.custom_4,
                custom_5: product._doc.custom_5,
                custom_6: product._doc.custom_6,
                custom_7: product._doc.custom_7,
                custom_8: product._doc.custom_8,
                custom_9: product._doc.custom_9,
                delivery_restrictions: product._doc.delivery_restrictions,
                delivery_weight: product._doc.delivery_weight,
                warranty: product._doc.warranty,
                terms_of_contract: product._doc.terms_of_contract,
                delivery_time: product._doc.delivery_time,
                ean: product._doc.ean,
                isbn: product._doc.isbn,
                upc: product._doc.upc,
                mpn: product._doc.mpn,

                product_GTIN: product._doc.product_GTIN,
                merchant_thumb_url: product._doc.merchant_thumb_url,
                aw_image_url: product._doc.aw_image_url,
                aw_thumb_url: product._doc.aw_thumb_url,
                large_image_url: product._doc.large_image_url,
                alternate_image: product._doc.alternate_image,
                alternate_image_two: product._doc.alternate_image_two,
                alternate_image_three: product._doc.alternate_image_three,
                alternate_image_four: product._doc.alternate_image_four,
                merchant_image_url: product._doc.merchant_image_url,
                basket_link: product._doc.basket_link,
                commission_group: product._doc.commission_group,
                merchant_product_category_path: product._doc.merchant_product_category_path,
                merchant_product_second_category_path:
                  product._doc.merchant_product_second_category_path,
                merchant_product_third_category_path:
                  product._doc.merchant_product_third_category_path,
                reviews: product._doc.reviews,
                average_rating: product._doc.average_rating,
                rating: product._doc.rating,
                number_available: product._doc.number_available,
              })
              // dial colors

              if (Boolean(product._doc.Color)) {
                sortData.dial_color = product._doc.Color.toLowerCase()
              } else {
                if (
                  product._doc.description.includes("grey dial") ||
                  product._doc.description.includes("dial colour is grey")
                ) {
                  sortData.dial_color = "grey"
                } else if (product._doc.description.includes("black dial")) {
                  sortData.dial_color = "black"
                } else if (product._doc.description.includes("blue dial")) {
                  sortData.dial_color = "blue"
                } else if (product._doc.description.includes("blue coloured dial")) {
                  sortData.dial_color = "blue"
                } else if (
                  product._doc.description.includes("silver dial") ||
                  product._doc.description.includes("Silver dial")
                ) {
                  sortData.dial_color = "silver"
                } else if (product._doc.description.includes("silver/grey dial")) {
                  sortData.dial_color = "silver/grey"
                } else if (product._doc.description.includes("copper dial")) {
                  sortData.dial_color = "copper"
                } else if (product._doc.description.includes("bronze dial")) {
                  sortData.dial_color = "bronze"
                } else if (product._doc.description.includes("white")) {
                  sortData.dial_color = "white"
                } else if (product._doc.description.includes("White")) {
                  sortData.dial_color = "white"
                } else if (product._doc.description.includes("dark green dial")) {
                  sortData.dial_color = "dark green"
                } else if (product._doc.description.includes("Pearl dial")) {
                  sortData.dial_color = "pearl"
                } else if (product._doc.description.includes("pearl dial")) {
                  sortData.dial_color = "pearl"
                } else if (product._doc.description.includes("jewel-toned dial")) {
                  sortData.dial_color = "jewel-toned"
                } else if (product._doc.description.includes("Silver-tone dial")) {
                  sortData.dial_color = "Silver-tone"
                } else if (product._doc.description.includes("brown dial")) {
                  sortData.dial_color = "brown"
                } else if (product._doc.description.includes("skeleton dial")) {
                  sortData.dial_color = "skeleton"
                } else if (product._doc.description.includes("silver opaline dial")) {
                  sortData.dial_color = "silver opaline"
                } else if (product._doc.description.includes("Mother-of-Pearl coloured dial")) {
                  sortData.dial_color = "Mother-of-Pearl coloured"
                } else if (product._doc.description.includes("green dial")) {
                  sortData.dial_color = "green"
                } else if (product._doc.description.includes("red dial")) {
                  sortData.dial_color = "red"
                } else if (product._doc.description.includes("brown dial")) {
                  sortData.dial_color = "brown"
                } else {
                  sortData.dial_color = ""
                }
              }
              if (Boolean(product._doc.Material)) {
                sortData.strap_material = product._doc.Material.toLowerCase()
              } else {
                // strap material
                if (product._doc.description.includes("fabric strap")) {
                  sortData.strap_material = "fabric"
                } else if (
                  product._doc.description.includes("leather strap") ||
                  product._doc.description.includes("leather bracelet")
                ) {
                  sortData.strap_material = "leather"
                } else if (
                  product._doc.description.includes("Stainless Steel") ||
                  product._doc.description.toLowerCase().includes("stainless steel bracelet") ||
                  product._doc.description.toLowerCase().includes("stainless steel metal strap") ||
                  product._doc.description
                    .toLowerCase()
                    .includes("stainless steel mesh bracelet") ||
                  product._doc.description.toLowerCase().includes("white gold bracelet") ||
                  product._doc.description.toLowerCase().includes("PVD coated steel bracelet") ||
                  product._doc.description
                    .toLowerCase()
                    .includes("spiral stainless steel bracelet") ||
                  product._doc.description
                    .toLowerCase()
                    .includes("stainless steel single spiral bracelet") ||
                  product._doc.description
                    .toLowerCase()
                    .includes("black stainless steel bracelet") ||
                  product._doc.description.toLowerCase().includes("steel bracelet")
                ) {
                  sortData.strap_material = "stainless steel"
                } else if (product._doc.description.includes("satin strap")) {
                  sortData.strap_material = "satin"
                } else if (product._doc.description.includes("Prestige bracelet")) {
                  sortData.strap_material = "Prestige bracelet"
                } else if (product._doc.description.includes("silk strap")) {
                  sortData.strap_material = "silk"
                } else if (product._doc.description.includes("carbon fiber strap")) {
                  sortData.strap_material = "carbon fiber"
                } else if (product._doc.description.includes("titanium bracelet")) {
                  sortData.strap_material = "titanium bracelet"
                } else if (product._doc.description.includes("rubber strap")) {
                  sortData.strap_material = "rubber"
                } else if (product._doc.description.includes("black silicone integrated strap")) {
                  sortData.strap_material = "black silicone"
                } else if (product._doc.description.includes("black mesh bracelet")) {
                  sortData.strap_material = "black mesh"
                } else if (product._doc.description.includes("black stainless steel bracelet")) {
                  sortData.strap_material = "black stainless steel bracelet"
                } else {
                  sortData.strap_material = ""
                }
              }

              // diameter
              // if (product._doc.description.includes("21. 5mm")) {
              //   sortData.diameter = regex.exec(product._doc.description)[0]
              // }
              if (product._doc.description.includes("25 mm")) {
                sortData.diameter = "25mm"
              } else if (product._doc.description.includes("27mm")) {
                sortData.diameter = "27mm"
              } else if (product._doc.description.includes("29mm 18ct")) {
                sortData.diameter = "29mm"
              } else if (product._doc.description.includes("29mm")) {
                sortData.diameter = "29mm"
              } else if (product._doc.description.includes("30mm")) {
                sortData.diameter = "30mm"
              } else if (product._doc.description.includes("30 mm")) {
                sortData.diameter = "30mm"
              } else if (product._doc.description.includes("31mm")) {
                sortData.diameter = "31mm"
              } else if (product._doc.description.includes("32mm")) {
                sortData.diameter = "32mm"
              } else if (product._doc.description.includes("32. 7mm")) {
                sortData.diameter = "32.7mm"
              } else if (product._doc.description.includes("33mm")) {
                sortData.diameter = "33mm"
              } else if (product._doc.description.includes("33. 2mm")) {
                sortData.diameter = "33mm"
              } else if (product._doc.description.includes("33. 5mm")) {
                sortData.diameter = "34mm"
              } else if (product._doc.description.includes("34mm")) {
                sortData.diameter = "34mm"
              } else if (product._doc.description.includes("34. 5mm")) {
                sortData.diameter = "35mm"
              } else if (product._doc.description.includes("35 mm")) {
                sortData.diameter = "35mm"
              } else if (product._doc.description.includes("35mm")) {
                sortData.diameter = "35mm"
              } else if (product._doc.description.includes("35. 5mm")) {
                sortData.diameter = "36mm"
              } else if (product._doc.description.includes("35. 6mm")) {
                sortData.diameter = "36mm"
              } else if (product._doc.description.includes("36mm")) {
                sortData.diameter = "36mm"
              } else if (product._doc.description.includes("36. 6 mm")) {
                sortData.diameter = "36.6mm"
              } else if (product._doc.description.includes("36. 2mm")) {
                sortData.diameter = "36mm"
              } else if (product._doc.description.includes("36. 5mm")) {
                sortData.diameter = "37mm"
              } else if (product._doc.description.includes("36. 8mm")) {
                sortData.diameter = "37mm"
              } else if (
                product._doc.description.includes("37mm") ||
                product._doc.description.includes("37 mm")
              ) {
                sortData.diameter = "37mm"
              } else if (product._doc.description.includes("38mm")) {
                sortData.diameter = "38mm"
              } else if (product._doc.description.includes("38. 5mm")) {
                sortData.diameter = "39mm"
              } else if (product._doc.description.includes("39mm")) {
                sortData.diameter = "39mm"
              } else if (product._doc.description.includes("39. 5mm")) {
                sortData.diameter = "39.5mm"
              } else if (product._doc.description.includes("39. 9mm")) {
                sortData.diameter = "39. 9mm"
              } else if (product._doc.description.includes("40mm")) {
                sortData.diameter = "40mm"
              } else if (product._doc.description.includes("40. 2mm")) {
                sortData.diameter = "40mm"
              } else if (product._doc.description.includes("40. 4mm")) {
                sortData.diameter = "40mm"
              } else if (product._doc.description.includes("40. 5mm")) {
                sortData.diameter = "41mm"
              } else if (
                product._doc.description.includes("41mm") ||
                product._doc.description.includes("41mm stainless steel case") ||
                product._doc.product_name.includes("41mm")
              ) {
                sortData.diameter = "41mm"
              } else if (product._doc.description.includes("43. 5mm")) {
                sortData.diameter = "44mm"
              } else if (product._doc.description.includes("41. 5mm")) {
                sortData.diameter = "42mm"
              } else if (product._doc.description.includes("41.5mm")) {
                sortData.diameter = "42mm"
              } else if (
                product._doc.description.includes("42mm") ||
                product._doc.product_name.includes("42mm")
              ) {
                sortData.diameter = "42mm"
              } else if (product._doc.description.includes("42. 4mm")) {
                sortData.diameter = "42mm"
              } else if (product._doc.description.includes("42. 3mm")) {
                sortData.diameter = "42mm"
              } else if (
                product._doc.description.includes("43mm") ||
                product._doc.description.includes("43mm stainless steel case") ||
                product._doc.product_name.includes("43mm") ||
                product._doc.product_name.includes("43mm Quartz Chronograph")
              ) {
                sortData.diameter = "43mm"
              } else if (
                product._doc.description.includes("44mm") ||
                product._doc.product_name.includes("44mm")
              ) {
                sortData.diameter = "44mm"
              } else if (product._doc.description.includes("44. 25mm")) {
                sortData.diameter = "44.25mm"
              } else if (product._doc.description.includes("44. 5mm")) {
                sortData.diameter = "44mm"
              } else if (product._doc.description.includes("45mm")) {
                sortData.diameter = "45mm"
              } else if (product._doc.description.includes("45. 5mm")) {
                sortData.diameter = "46mm"
              } else if (product._doc.description.includes("45.5mm")) {
                sortData.diameter = "46mm"
              } else if (product._doc.description.includes("46mm")) {
                sortData.diameter = "46mm"
              } else if (product._doc.description.includes("46. 2mm")) {
                sortData.diameter = "46mm"
              } else if (product._doc.description.includes("46.5mm")) {
                sortData.diameter = "47mm"
              } else if (product._doc.description.includes("46. 5mm")) {
                sortData.diameter = "47mm"
              } else if (product._doc.description.includes("47mm")) {
                sortData.diameter = "47mm"
              } else if (product._doc.description.includes("48mm")) {
                sortData.diameter = "48mm"
              } else if (product._doc.description.includes("48.5mm")) {
                sortData.diameter = "49mm"
              } else if (product._doc.description.includes("49. 50mm")) {
                sortData.diameter = "49.50mm"
              } else {
                if (product._doc.product_name.includes("43mm")) {
                  sortData.diameter = "43mm"
                } else if (product._doc.product_name.includes("41mm")) {
                  sortData.diameter = "41mm"
                } else if (product._doc.product_name.includes("44 mm")) {
                  sortData.diameter = "44mm"
                } else if (product._doc.product_name.includes("44mm")) {
                  sortData.diameter = "44mm"
                } else if (product._doc.product_name.includes("27mm")) {
                  sortData.diameter = "27mm"
                } else {
                  sortData.diameter = ""
                }
              }

              // water_resistant
              if (
                product._doc.description.includes("30 metres") ||
                product._doc.description.includes("30 meters") ||
                product._doc.description.includes("30m")
              ) {
                sortData.water_resistant = "30 metres"
              } else if (product._doc.description.includes("30 Metres")) {
                sortData.water_resistant = "30 metres"
              } else if (product._doc.description.includes("50 metres")) {
                sortData.water_resistant = "50 metres"
              } else if (product._doc.description.includes("60 metres")) {
                sortData.water_resistant = "60 metres"
              } else if (product._doc.description.includes("100 metres")) {
                sortData.water_resistant = "100 metres"
              } else if (product._doc.description.includes("120 metres")) {
                sortData.water_resistant = "120 metres"
              } else if (product._doc.description.includes("150 metres")) {
                sortData.water_resistant = "150 metres"
              } else if (product._doc.description.includes("200 metres")) {
                sortData.water_resistant = "200 metres"
              } else if (product._doc.description.includes("300 metres")) {
                sortData.water_resistant = "300 metres"
              } else if (product._doc.description.includes("400 metres")) {
                sortData.water_resistant = "400 metres"
              } else if (product._doc.description.includes("500 metres metres")) {
                sortData.water_resistant = "500 metres"
              } else if (product._doc.description.includes("600 metres")) {
                sortData.water_resistant = "600 metres"
              } else if (product._doc.description.includes("700 metres")) {
                sortData.water_resistant = "700 metres"
              } else if (product._doc.description.includes("800 metres")) {
                sortData.water_resistant = "800 metres"
              } else {
                sortData.water_resistant = "not water resistant"
              }

              // movement
              if (product._doc.description.includes("automatic")) {
                sortData.movement = "automatic"
              } else if (product._doc.description.includes("quartz")) {
                sortData.movement = "quartz"
              } else if (product._doc.description.includes("Quartz")) {
                sortData.movement = "quartz"
              } else if (product._doc.description.includes("manual wind")) {
                sortData.movement = "manual wind movement"
              } else {
                sortData.movement = ""
              }
              // now save the data

              try {
                await sortData.save()
              } catch (e) {
                
              }
            }
          })
        }
      }
      return ServiceResponse.success({
        data: { message: "Successfully Normalize the data" },
        status: 201,
      })
    } catch (error) {
      return ServiceResponse.failed({ code: ErrorCodes.DATA_NOT_SAVED })
    }
  }

  async getStrapSortedData(
    data: SortTable
  ): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    try {
      const search: any = data.search!.value
      const {
        start,
        length,
        draw,
        minPrice,
        maxPrice,
        diameter,
        material,
        collection,
        water_resistant,
        movement,
        strap_material,
        sub_category,
        dial_color,
        category_name,
        brand_name,
        sort_by,
      } = data
      const result: any = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              // category_name ? { category_name } : {},
              { merchant_category: { $regex: new RegExp("strap", "i") } },
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { category_name: { $not: { $regex: new RegExp("Jewellery", "i") } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              // {description:{ $regex : "watch" } },
              //{description:{  $regex : new RegExp('strap','i')  } },
              // brand_name
              //     ? { brand_name: { $in: [new RegExp(`${brand_name}`,'i')] } }
              //     : {},
              brand_name ? { brand_name: { $in: [`${brand_name}`] } } : {},
              search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
              // diameter ? { diameter: { $regex: new RegExp(diameter, "i") } } : {},
              diameter ? { diameter } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              // water_resistant
              //     ? { water_resistant: { $regex: new RegExp(water_resistant, "i") } }
              //     : {},
              water_resistant ? { water_resistant } : {},
              movement ? { movement: { $regex: new RegExp(movement, "i") } } : {},
              movement ? { movement } : {},
              strap_material ? { strap_material: { $regex: new RegExp(strap_material, "i") } } : {},
              // strap_material ? { strap_material } : {},
              // dial_color ? { dial_color: { $regex: new RegExp(dial_color, "i") } } : {},
              dial_color ? { dial_color } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },

        {
          $facet: {
            metadata: [{ $count: "total" }],
            data: [
              { $skip: parseInt(start) },
              { $limit: parseInt(length) },
              {
                $sort:
                  sort_by === "asc"
                    ? { search_price: 1 }
                    : sort_by === "desc"
                    ? { search_price: -1 }
                    : { search_price: 1 },
              },
            ],
          },
        },
        {
          $project: {
            data: 1,
            metadata: 1,
          },
        },
      ])
      if (result[0].data.length > 0) {
        return ServiceResponse.success({
          data: {
            draw: parseInt(draw),
            recordsTotal: result[0].metadata[0].total,
            recordsFiltered: result[0].data.length,
            data: result[0].data,
          },
          status: 201,
        })
      }
      return ServiceResponse.success({
        data: {
          message: "No data found",
        },
        status: 200,
      })
    } catch (error) {
      return ServiceResponse.failed({ code: ErrorCodes.NO_CATEGORY_EXISTS })
    }
  }

  async getPreOwnedSortedData(data: SortTable): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    try {
      const search: any = data.search!.value
      const {
        start,
        length,
        draw,
        minPrice,
        maxPrice,
        diameter,
        material,
        collection,
        water_resistant,
        movement,
        strap_material,
        sub_category,
        dial_color,
        category_name,
        brand_name,
        sort_by,
      } = data
      if (category_name == "Men's Watches") {
        const result: any = await SortProductModel.aggregate([
          {
            $match: {
              category_name: "Men's Watches",
              $and: [
              brand_name ? { brand_name } : {},
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { product_name: { $not: { $regex: "ladies" } } },
              { product_name: { $not: { $regex: "Ladies" } } },
              { product_name: { $regex: new RegExp("Pre-Owned", "i") } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $not: { $regex: "ladies" } } },
              { description: { $not: { $regex: "Ladies" } } },
                // brand_name
                //     ? { brand_name: { $in: [`${brand_name}`] } }
                //     : {},
                search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                // diameter ? { diameter: { $regex: new RegExp(diameter, "i") } } : {},
                diameter ? { diameter } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                // water_resistant
                //     ? { water_resistant: { $regex: new RegExp(water_resistant, "i") } }
                //     : {},
                water_resistant ? { water_resistant } : {},
                movement ? { movement: { $regex: new RegExp(movement, "i") } } : {},
                movement ? { movement } : {},
                strap_material
                  ? { strap_material: { $regex: new RegExp(strap_material, "i") } }
                  : {},
                // strap_material ? { strap_material } : {},
                // dial_color ? { dial_color: { $regex: new RegExp(dial_color, "i") } } : {},
                dial_color ? { dial_color } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $facet: {
              metadata: [{ $count: "total" }],
              data: [
                { $skip: parseInt(start) },
                { $limit: parseInt(length) },
                {
                  $sort:
                    sort_by === "asc"
                      ? { search_price: 1 }
                      : sort_by === "desc"
                      ? { search_price: -1 }
                      : { search_price: 1 },
                },
              ],
            },
          },
          {
            $project: {
              data: 1,
              metadata: 1,
            },
          },
        ])
        if (result[0].data.length > 0) {
          return ServiceResponse.success({
            data: {
              draw: parseInt(draw),
              recordsTotal: result[0].metadata[0].total,
              recordsFiltered: result[0].data.length,
              data: result[0].data,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 200,
        })
      } else if (category_name == "Women's Watches") {
        const result: any = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { product_name: { $not: { $regex: "Mens" } } },
              { product_name: { $not: { $regex: "Men" } } },
              { product_name: { $not: { $regex: "mens" } } },
              { product_name: { $not: { $regex: "men" } } },
              { product_name: { $regex: new RegExp("Pre-Owned", "i") } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              // { description: { $regex: "watch" } },
                // brand_name
                //     ? { brand_name: { $in: [new RegExp(`${brand_name}`,'i')] } }
                //     : {},
                search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                // diameter ? { diameter: { $regex: new RegExp(diameter, "i") } } : {},
                diameter ? { diameter } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                // water_resistant
                //     ? { water_resistant: { $regex: new RegExp(water_resistant, "i") } }
                //     : {},
                water_resistant ? { water_resistant } : {},
                movement ? { movement: { $regex: new RegExp(movement, "i") } } : {},
                movement ? { movement } : {},
                strap_material
                  ? { strap_material: { $regex: new RegExp(strap_material, "i") } }
                  : {},
                // strap_material ? { strap_material } : {},
                // dial_color ? { dial_color: { $regex: new RegExp(dial_color, "i") } } : {},
                dial_color ? { dial_color } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $facet: {
              metadata: [{ $count: "total" }],
              data: [
                { $skip: parseInt(start) },
                { $limit: parseInt(length) },
                {
                  $sort:
                    sort_by === "asc"
                      ? { search_price: 1 }
                      : sort_by === "desc"
                      ? { search_price: -1 }
                      : { search_price: 1 },
                },
              ],
            },
          },
          {
            $project: {
              data: 1,
              metadata: 1,
            },
          },
        ])
        if (result[0].data.length > 0) {
          return ServiceResponse.success({
            data: {
              draw: parseInt(draw),
              recordsTotal: result[0].metadata[0].total,
              recordsFiltered: result[0].data.length,
              data: result[0].data,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 200,
        })
      }
      return ServiceResponse.success({
        data: {
          message: "No data found",
        },
        status: 200,
      })
    } catch (error) {
      return ServiceResponse.failed({ code: ErrorCodes.NO_CATEGORY_EXISTS })
    }
  }

  async getSortedData(data: SortTable): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    try {
      const search: any = data.search!.value
      const {
        start,
        length,
        draw,
        minPrice,
        maxPrice,
        diameter,
        material,
        collection,
        water_resistant,
        movement,
        strap_material,
        sub_category,
        dial_color,
        category_name,
        brand_name,
        sort_by,
      } = data
      if (category_name === "Accessories") {
        if (sub_category === "Watch Box" || sub_category === "Watch Roll") {
          const result: any = await SortProductModel.aggregate([
            {
              $match: {
                $and: [
                  { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                  category_name ? { category_name } : {},
                  { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                  // sub_category ? {product_name:{   $regex : new RegExp(sub_category,'i')  } } :{},
                  sub_category ? { sub_category } : {},
                  { sub_category: { $ne: "null" } },
                  // sub_category ? { sub_category } : {},
                  { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
                  { description: { $not: { $regex: "jewellery" } } },
                  // {description:{ $regex : "watch" } },
                  // brand_name
                  //     ? { brand_name: { $in: [new RegExp(`${brand_name}`,'i')] } }
                  //     : {},
                  brand_name ? { brand_name: { $in: [`${brand_name}`] } } : {},
                  search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                  // diameter ? { diameter: { $regex: new RegExp(diameter, "i") } } : {},
                  diameter ? { diameter } : {},
                  collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                  // water_resistant
                  //     ? { water_resistant: { $regex: new RegExp(water_resistant, "i") } }
                  //     : {},
                  water_resistant ? { water_resistant } : {},
                  movement ? { movement: { $regex: new RegExp(movement, "i") } } : {},
                  movement ? { movement } : {},
                  strap_material
                    ? { strap_material: { $regex: new RegExp(strap_material, "i") } }
                    : {},
                  // strap_material ? { strap_material } : {},
                  // dial_color ? { dial_color: { $regex: new RegExp(dial_color, "i") } } : {},
                  dial_color ? { dial_color } : {},
                  minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                  maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
                ],
              },
            },
            {
              $facet: {
                metadata: [{ $count: "total" }],
                data: [
                  { $skip: parseInt(start) },
                  { $limit: parseInt(length) },
                  {
                    $sort:
                      sort_by === "asc"
                        ? { search_price: 1 }
                        : sort_by === "desc"
                        ? { search_price: -1 }
                        : { search_price: 1 },
                  },
                ],
              },
            },
            {
              $project: {
                data: 1,
                metadata: 1,
              },
            },
          ])
          if (result[0].data.length > 0) {
            return ServiceResponse.success({
              data: {
                draw: parseInt(draw),
                recordsTotal: result[0].metadata[0].total,
                recordsFiltered: result[0].data.length,
                data: result[0].data,
              },
              status: 201,
            })
          }
          return ServiceResponse.success({
            data: {
              message: "No data found",
            },
            status: 200,
          })
        } else if (sub_category == "Gift") {
          const result: any = await SortProductModel.aggregate([
            {
              $match: {
                $and: [
                  category_name ? { category_name } : {},
                  { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("BallPoint", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("Rollerball", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("Robberball", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("Doyle", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("fineliner", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                  { description: { $not: { $regex: new RegExp("Pen", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                  sub_category ? { sub_category } : {},
                  { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
                  { description: { $not: { $regex: "jewellery" } } },
                  // {description:{ $regex : "watch" } },
                  // brand_name
                  //     ? { brand_name: { $in: [new RegExp(`${brand_name}`,'i')] } }
                  //     : {},
                  brand_name ? { brand_name: { $in: [`${brand_name}`] } } : {},
                  search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                  // diameter ? { diameter: { $regex: new RegExp(diameter, "i") } } : {},
                  diameter ? { diameter } : {},
                  collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                  // water_resistant
                  //     ? { water_resistant: { $regex: new RegExp(water_resistant, "i") } }
                  //     : {},
                  water_resistant ? { water_resistant } : {},
                  movement ? { movement: { $regex: new RegExp(movement, "i") } } : {},
                  movement ? { movement } : {},
                  strap_material
                    ? { strap_material: { $regex: new RegExp(strap_material, "i") } }
                    : {},
                  // strap_material ? { strap_material } : {},
                  // dial_color ? { dial_color: { $regex: new RegExp(dial_color, "i") } } : {},
                  dial_color ? { dial_color } : {},
                  minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                  maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
                ],
              },
            },
            {
              $facet: {
                metadata: [{ $count: "total" }],
                data: [
                  { $skip: parseInt(start) },
                  { $limit: parseInt(length) },
                  {
                    $sort:
                      sort_by === "asc"
                        ? { search_price: 1 }
                        : sort_by === "desc"
                        ? { search_price: -1 }
                        : { search_price: 1 },
                  },
                ],
              },
            },
            {
              $project: {
                data: 1,
                metadata: 1,
              },
            },
          ])
          if (result[0].data.length > 0) {
            return ServiceResponse.success({
              data: {
                draw: parseInt(draw),
                recordsTotal: result[0].metadata[0].total,
                recordsFiltered: result[0].data.length,
                data: result[0].data,
              },
              status: 201,
            })
          }
          return ServiceResponse.success({
            data: {
              message: "No data found",
            },
            status: 200,
          })
        } else {
          const result: any = await SortProductModel.aggregate([
            {
              $match: {
                $and: [
                  category_name ? { category_name } : {},
                  { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                  // {category_name:"Men's Watches"},
                  // {product_name:{ $not: { $regex : new RegExp('Pen','i') } } },
                  { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                  sub_category ? { sub_category } : {},
                  { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
                  { description: { $not: { $regex: "jewellery" } } },
                  // {description:{ $regex : "watch" } },
                  // brand_name
                  //     ? { brand_name: { $in: [new RegExp(`${brand_name}`,'i')] } }
                  //     : {},
                  brand_name ? { brand_name: { $in: [`${brand_name}`] } } : {},
                  search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                  // diameter ? { diameter: { $regex: new RegExp(diameter, "i") } } : {},
                  diameter ? { diameter } : {},
                  collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                  // water_resistant
                  //     ? { water_resistant: { $regex: new RegExp(water_resistant, "i") } }
                  //     : {},
                  water_resistant ? { water_resistant } : {},
                  movement ? { movement: { $regex: new RegExp(movement, "i") } } : {},
                  movement ? { movement } : {},
                  strap_material
                    ? { strap_material: { $regex: new RegExp(strap_material, "i") } }
                    : {},
                  // strap_material ? { strap_material } : {},
                  // dial_color ? { dial_color: { $regex: new RegExp(dial_color, "i") } } : {},
                  dial_color ? { dial_color } : {},
                  minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                  maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
                ],
              },
            },
            {
              $facet: {
                metadata: [{ $count: "total" }],
                data: [
                  { $skip: parseInt(start) },
                  { $limit: parseInt(length) },
                  {
                    $sort:
                      sort_by === "asc"
                        ? { search_price: 1 }
                        : sort_by === "desc"
                        ? { search_price: -1 }
                        : { search_price: 1 },
                  },
                ],
              },
            },
            {
              $project: {
                data: 1,
                metadata: 1,
              },
            },
          ])
          if (result[0].data.length > 0) {
            return ServiceResponse.success({
              data: {
                draw: parseInt(draw),
                recordsTotal: result[0].metadata[0].total,
                recordsFiltered: result[0].data.length,
                data: result[0].data,
              },
              status: 201,
            })
          }
          return ServiceResponse.success({
            data: {
              message: "No data found",
            },
            status: 200,
          })
        }
      } else if (category_name == "Pen") {
        const result: any = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                category_name ? { category_name } : {},
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                // {category_name:"Men's Watches"},
                // {product_name:{ $not: { $regex : new RegExp('Pen','i') } } },
                // {product_name:{ $not: { $regex : new RegExp('card holder','i') } } },
                { description: { $eq: { $regex: new RegExp("watch", "i") } } },
                //{description:{ $not: { $regex : new RegExp('Jewelry','i') } } },
                // brand_name
                //     ? { brand_name: { $in: [new RegExp(`${brand_name}`,'i')] } }
                //     : {},
                brand_name ? { brand_name: { $in: [`${brand_name}`] } } : {},
                search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                // diameter ? { diameter: { $regex: new RegExp(diameter, "i") } } : {},
                diameter ? { diameter } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                // water_resistant
                //     ? { water_resistant: { $regex: new RegExp(water_resistant, "i") } }
                //     : {},
                water_resistant ? { water_resistant } : {},
                movement ? { movement: { $regex: new RegExp(movement, "i") } } : {},
                movement ? { movement } : {},
                strap_material
                  ? { strap_material: { $regex: new RegExp(strap_material, "i") } }
                  : {},
                // strap_material ? { strap_material } : {},
                // dial_color ? { dial_color: { $regex: new RegExp(dial_color, "i") } } : {},
                dial_color ? { dial_color } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $facet: {
              metadata: [{ $count: "total" }],
              data: [
                { $skip: parseInt(start) },
                { $limit: parseInt(length) },
                {
                  $sort:
                    sort_by === "asc"
                      ? { search_price: 1 }
                      : sort_by === "desc"
                      ? { search_price: -1 }
                      : { search_price: 1 },
                },
              ],
            },
          },
          {
            $project: {
              data: 1,
              metadata: 1,
            },
          },
        ])
        if (result[0].data.length > 0) {
          return ServiceResponse.success({
            data: {
              draw: parseInt(draw),
              recordsTotal: result[0].metadata[0].total,
              recordsFiltered: result[0].data.length,
              data: result[0].data,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 200,
        })
      } else if (category_name == "Women's Jewellery") {
        const result: any = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                category_name ? { category_name } : {},
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                // {category_name:"Men's Watches"},
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                material ? { product_name: { $regex: new RegExp("Gold", "i") } } : {},
                material ? { description: { $regex: new RegExp("gold", "i") } } : {},
                material ? { product_name: { $regex: new RegExp("silver", "i") } } : {},
                material ? { description: { $regex: new RegExp("Silver", "i") } } : {},
                // {description:{ $not: { $regex : 'watch'} } },
                // {description:{ $regex : "jewellery" } },
                // {description:{ $regex : "jewelry" } },
                // brand_name
                //     ? { brand_name: { $in: [new RegExp(`${brand_name}`,'i')] } }
                //     : {},
                brand_name ? { brand_name: { $in: [`${brand_name}`] } } : {},
                search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                // diameter ? { diameter: { $regex: new RegExp(diameter, "i") } } : {},
                diameter ? { diameter } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                // water_resistant
                //     ? { water_resistant: { $regex: new RegExp(water_resistant, "i") } }
                //     : {},
                water_resistant ? { water_resistant } : {},
                movement ? { movement: { $regex: new RegExp(movement, "i") } } : {},
                movement ? { movement } : {},
                strap_material
                  ? { strap_material: { $regex: new RegExp(strap_material, "i") } }
                  : {},
                // strap_material ? { strap_material } : {},
                // dial_color ? { dial_color: { $regex: new RegExp(dial_color, "i") } } : {},
                dial_color ? { dial_color } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $facet: {
              metadata: [{ $count: "total" }],
              data: [
                { $skip: parseInt(start) },
                { $limit: parseInt(length) },
                {
                  $sort:
                    sort_by === "asc"
                      ? { search_price: 1 }
                      : sort_by === "desc"
                      ? { search_price: -1 }
                      : { search_price: 1 },
                },
              ],
            },
          },
          {
            $project: {
              data: 1,
              metadata: 1,
            },
          },
        ])
        if (result[0].data.length > 0) {
          return ServiceResponse.success({
            data: {
              draw: parseInt(draw),
              recordsTotal: result[0].metadata[0].total,
              recordsFiltered: result[0].data.length,
              data: result[0].data,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 200,
        })
      } else if (category_name == "Men's Watches") {
        const result: any = await SortProductModel.aggregate([
          {
            $match: {
              category_name: "Men's Watches",
              $and: [
                brand_name ? { brand_name } : {},
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { product_name: { $not: { $regex: "ladies" } } },
                { product_name: { $not: { $regex: "Ladies" } } },
                { description: { $not: { $regex: new RegExp("Watch Band", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Watch Band", "i") } } },
                { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
                { description: { $not: { $regex: "jewellery" } } },
                { description: { $not: { $regex: "ladies" } } },
                { description: { $not: { $regex: "Ladies" } } },
                { description: { $not: { $regex: new RegExp("Winder", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Winder", "i") } } },
                { product_name: { $regex: new RegExp("Watch", "i") } },
                { product_name: { $not: { $regex: new RegExp("Nurses", "i") } } },
                { description: { $regex: "watch" } },
                // brand_name
                //     ? { brand_name: { $in: [`${brand_name}`] } }
                //     : {},
                search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                // diameter ? { diameter: { $regex: new RegExp(diameter, "i") } } : {},
                diameter ? { diameter } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                // water_resistant
                //     ? { water_resistant: { $regex: new RegExp(water_resistant, "i") } }
                //     : {},
                water_resistant ? { water_resistant } : {},
                movement ? { movement: { $regex: new RegExp(movement, "i") } } : {},
                movement ? { movement } : {},
                strap_material
                  ? { strap_material: { $regex: new RegExp(strap_material, "i") } }
                  : {},
                // strap_material ? { strap_material } : {},
                // dial_color ? { dial_color: { $regex: new RegExp(dial_color, "i") } } : {},
                dial_color ? { dial_color } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $facet: {
              metadata: [{ $count: "total" }],
              data: [
                { $skip: parseInt(start) },
                { $limit: parseInt(length) },
                {
                  $sort:
                    sort_by === "asc"
                      ? { search_price: 1 }
                      : sort_by === "desc"
                      ? { search_price: -1 }
                      : { search_price: 1 },
                },
              ],
            },
          },
          {
            $project: {
              data: 1,
              metadata: 1,
            },
          },
        ])
        if (result[0].data.length > 0) {
          return ServiceResponse.success({
            data: {
              draw: parseInt(draw),
              recordsTotal: result[0].metadata[0].total,
              recordsFiltered: result[0].data.length,
              data: result[0].data,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 200,
        })
      } else if (category_name == "Women's Watches") {
        const result: any = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { product_name: { $not: { $regex: "Mens" } } },
                { product_name: { $not: { $regex: "Men" } } },
                { product_name: { $not: { $regex: "mens" } } },
                { product_name: { $not: { $regex: "men" } } },
                { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
                { description: { $regex: "watch" } },
                // brand_name
                //     ? { brand_name: { $in: [new RegExp(`${brand_name}`,'i')] } }
                //     : {},
                search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                // diameter ? { diameter: { $regex: new RegExp(diameter, "i") } } : {},
                diameter ? { diameter } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                // water_resistant
                //     ? { water_resistant: { $regex: new RegExp(water_resistant, "i") } }
                //     : {},
                water_resistant ? { water_resistant } : {},
                movement ? { movement: { $regex: new RegExp(movement, "i") } } : {},
                movement ? { movement } : {},
                strap_material
                  ? { strap_material: { $regex: new RegExp(strap_material, "i") } }
                  : {},
                // strap_material ? { strap_material } : {},
                // dial_color ? { dial_color: { $regex: new RegExp(dial_color, "i") } } : {},
                dial_color ? { dial_color } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $facet: {
              metadata: [{ $count: "total" }],
              data: [
                { $skip: parseInt(start) },
                { $limit: parseInt(length) },
                {
                  $sort:
                    sort_by === "asc"
                      ? { search_price: 1 }
                      : sort_by === "desc"
                      ? { search_price: -1 }
                      : { search_price: 1 },
                },
              ],
            },
          },
          {
            $project: {
              data: 1,
              metadata: 1,
            },
          },
        ])
        if (result[0].data.length > 0) {
          return ServiceResponse.success({
            data: {
              draw: parseInt(draw),
              recordsTotal: result[0].metadata[0].total,
              recordsFiltered: result[0].data.length,
              data: result[0].data,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 200,
        })
      } else {
        
        const result: any = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                category_name ? { category_name } : {},
                // {category_name:"Men's Watches"},
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { category_name: { $not: { $regex: new RegExp("Jewellery", "i") } } },
                { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
                { description: { $not: { $regex: "jewellery" } } },
                { description: { $regex: "watch" } },
                // brand_name
                //     ? { brand_name: { $in: [new RegExp(`${brand_name}`,'i')] } }
                //     : {},
                brand_name ? { brand_name: { $in: [`${brand_name}`] } } : {},
                search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                // diameter ? { diameter: { $regex: new RegExp(diameter, "i") } } : {},
                diameter ? { diameter } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                // water_resistant
                //     ? { water_resistant: { $regex: new RegExp(water_resistant, "i") } }
                //     : {},
                water_resistant ? { water_resistant } : {},
                movement ? { movement: { $regex: new RegExp(movement, "i") } } : {},
                movement ? { movement } : {},
                strap_material
                  ? { strap_material: { $regex: new RegExp(strap_material, "i") } }
                  : {},
                // strap_material ? { strap_material } : {},
                // dial_color ? { dial_color: { $regex: new RegExp(dial_color, "i") } } : {},
                dial_color ? { dial_color } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $facet: {
              metadata: [{ $count: "total" }],
              data: [
                { $skip: parseInt(start) },
                { $limit: parseInt(length) },
                {
                  $sort:
                    sort_by === "asc"
                      ? { search_price: 1 }
                      : sort_by === "desc"
                      ? { search_price: -1 }
                      : { search_price: 1 },
                },
              ],
            },
          },
          {
            $project: {
              data: 1,
              metadata: 1,
            },
          },
        ])
        if (result[0].data.length > 0) {
          return ServiceResponse.success({
            data: {
              draw: parseInt(draw),
              recordsTotal: result[0].metadata[0].total,
              recordsFiltered: result[0].data.length,
              data: result[0].data,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 200,
        })
      }
    } catch (error) {
      return ServiceResponse.failed({ code: ErrorCodes.NO_CATEGORY_EXISTS })
    }
  }

  async getPreOwnedSortedWomenJewellery(
    data: SortWomenJewellery
  ): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    try {
      let search: any = data.search!.value
      let {
        start,
        length,
        draw,
        minPrice,
        maxPrice,
        collection,
        category_name,
        sub_category,
        brand_name,
        ring_size,
        color,
        ring_material,
        material,
        ring_color,
        ring_weight,
        earring_color,
        necklaces_color,
        bracelets_color,
        sort_by,
      } = data
      if (sub_category === "Rings" || sub_category === "rings") {
        sub_category = "Ring"

        const result: any = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                category_name ? { category_name } : {},
                sub_category ? { sub_category } : {},
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                // sub_category ? {sub_category:{   $regex : new RegExp("Ring",'i')  } } :{},
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                { description: { $regex: new RegExp("Pre-Owned", "i") } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                material ? { description: { $regex: new RegExp(material, "i") } } : {},
                ring_size ? { ring_size: { $regex: new RegExp(ring_size, "i") } } : {},
                ring_material ? { ring_material: { $regex: new RegExp(ring_material, "i") } } : {},
                ring_color ? { ring_color: { $regex: new RegExp(ring_color, "i") } } : {},
                color ? { ring_color: { $regex: new RegExp(color, "i") } } : {},
                ring_weight ? { ring_weight: { $regex: new RegExp(ring_weight, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $facet: {
              metadata: [{ $count: "total" }],
              data: [
                { $skip: parseInt(start) },
                { $limit: parseInt(length) },
                {
                  $sort:
                    sort_by === "asc"
                      ? { search_price: 1 }
                      : sort_by === "desc"
                      ? { search_price: -1 }
                      : { search_price: 1 },
                },
              ],
            },
          },
          {
            $project: {
              data: 1,
              metadata: 1,
            },
          },
        ])
        if (result[0].data.length > 0) {
          return ServiceResponse.success({
            data: {
              draw: parseInt(draw),
              recordsTotal: result[0].metadata[0].total,
              recordsFiltered: result[0].data.length,
              data: result[0].data,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 201,
        })
      } else if (sub_category === "Earrings" || sub_category === "earrings") {
        const result: any = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                category_name ? { category_name } : {},
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                // sub_category ? { sub_category } : {},
                sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                { description: { $regex: new RegExp("Pre-Owned", "i") } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                earring_color ? { earring_color: { $regex: new RegExp(earring_color, "i") } } : {},
                color ? { earring_color: { $regex: new RegExp(color, "i") } } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                material ? { description: { $regex: new RegExp(material, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $facet: {
              metadata: [{ $count: "total" }],
              data: [
                { $skip: parseInt(start) },
                { $limit: parseInt(length) },
                {
                  $sort:
                    sort_by === "asc"
                      ? { search_price: 1 }
                      : sort_by === "desc"
                      ? { search_price: -1 }
                      : { search_price: 1 },
                },
              ],
            },
          },
          {
            $project: {
              data: 1,
              metadata: 1,
            },
          },
        ])
        if (result[0].data.length > 0) {
          return ServiceResponse.success({
            data: {
              draw: parseInt(draw),
              recordsTotal: result[0].metadata[0].total,
              recordsFiltered: result[0].data.length,
              data: result[0].data,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 201,
        })
      } else if (sub_category === "Necklaces" || sub_category === "necklaces") {
        const result: any = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                category_name ? { category_name } : {},
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                // sub_category ? { sub_category } : {},
                sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { description: { $regex: new RegExp("Pre-Owned", "i") } },
                brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                necklaces_color
                  ? { necklaces_color: { $regex: new RegExp(necklaces_color, "i") } }
                  : {},
                color ? { necklaces_color: { $regex: new RegExp(color, "i") } } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                material ? { description: { $regex: new RegExp(material, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $facet: {
              metadata: [{ $count: "total" }],
              data: [
                { $skip: parseInt(start) },
                { $limit: parseInt(length) },
                {
                  $sort:
                    sort_by === "asc"
                      ? { search_price: 1 }
                      : sort_by === "desc"
                      ? { search_price: -1 }
                      : { search_price: 1 },
                },
              ],
            },
          },
          {
            $project: {
              data: 1,
              metadata: 1,
            },
          },
        ])
        if (result[0].data.length > 0) {
          return ServiceResponse.success({
            data: {
              draw: parseInt(draw),
              recordsTotal: result[0].metadata[0].total,
              recordsFiltered: result[0].data.length,
              data: result[0].data,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 201,
        })
      } else if (sub_category === "Bracelets" || sub_category === "bracelets") {
        const result: any = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                category_name ? { category_name } : {},
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                // sub_category ? { sub_category } : {},
                sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { description: { $regex: new RegExp("Pre-Owned", "i") } },
                brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                bracelets_color
                  ? { bracelets_color: { $regex: new RegExp(bracelets_color, "i") } }
                  : {},
                color ? { bracelets_color: { $regex: new RegExp(color, "i") } } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                material ? { description: { $regex: new RegExp(material, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $facet: {
              metadata: [{ $count: "total" }],
              data: [
                { $skip: parseInt(start) },
                { $limit: parseInt(length) },
                {
                  $sort:
                    sort_by === "asc"
                      ? { search_price: 1 }
                      : sort_by === "desc"
                      ? { search_price: -1 }
                      : { search_price: 1 },
                },
              ],
            },
          },
          {
            $project: {
              data: 1,
              metadata: 1,
            },
          },
        ])
        if (result[0].data.length > 0) {
          return ServiceResponse.success({
            data: {
              draw: parseInt(draw),
              recordsTotal: result[0].metadata[0].total,
              recordsFiltered: result[0].data.length,
              data: result[0].data,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 201,
        })
      } else if (sub_category === "Charm" || sub_category === "charm") {
        const result: any = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                category_name ? { category_name } : {},
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                // sub_category ? { sub_category } : {},
                sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { description: { $regex: new RegExp("Pre-Owned", "i") } },
                brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                material ? { description: { $regex: new RegExp(material, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $facet: {
              metadata: [{ $count: "total" }],
              data: [
                { $skip: parseInt(start) },
                { $limit: parseInt(length) },
                {
                  $sort:
                    sort_by === "asc"
                      ? { search_price: 1 }
                      : sort_by === "desc"
                      ? { search_price: -1 }
                      : { search_price: 1 },
                },
              ],
            },
          },
          {
            $project: {
              data: 1,
              metadata: 1,
            },
          },
        ])
        if (result[0].data.length > 0) {
          return ServiceResponse.success({
            data: {
              draw: parseInt(draw),
              recordsTotal: result[0].metadata[0].total,
              recordsFiltered: result[0].data.length,
              data: result[0].data,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 201,
        })
      } else if (sub_category === "Cuff links") {
        const result: any = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                category_name ? { category_name } : {},
                // sub_category ? { sub_category } : {},
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { description: { $regex: new RegExp("Pre-Owned", "i") } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                material ? { description: { $regex: new RegExp(material, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $facet: {
              metadata: [{ $count: "total" }],
              data: [
                { $skip: parseInt(start) },
                { $limit: parseInt(length) },
                {
                  $sort:
                    sort_by === "asc"
                      ? { search_price: 1 }
                      : sort_by === "desc"
                      ? { search_price: -1 }
                      : { search_price: 1 },
                },
              ],
            },
          },
          {
            $project: {
              data: 1,
              metadata: 1,
            },
          },
        ])
        if (result[0].data.length > 0) {
          return ServiceResponse.success({
            data: {
              draw: parseInt(draw),
              recordsTotal: result[0].metadata[0].total,
              recordsFiltered: result[0].data.length,
              data: result[0].data,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 201,
        })
      } else {
        let result: any = 0
        if (material === "Gold" || material === "gold") {
          result = await SortProductModel.aggregate([
            {
              $match: {
                $and: [
                  category_name ? { category_name } : {},
                  { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                  // sub_category ? { sub_category } : {},
                  sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                  { description: { $not: { $regex: new RegExp("watch", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                  { description: { $regex: new RegExp("Pre-Owned", "i") } },
                  { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                  brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                  search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                  collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                  material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                  { description: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                  // material ? {description:{   $regex : new RegExp(material,'i')  } } : {},
                  minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                  maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
                ],
              },
            },
            {
              $facet: {
                metadata: [{ $count: "total" }],
                data: [
                  { $skip: parseInt(start) },
                  { $limit: parseInt(length) },
                  {
                    $sort:
                      sort_by === "asc"
                        ? { search_price: 1 }
                        : sort_by === "desc"
                        ? { search_price: -1 }
                        : { search_price: 1 },
                  },
                ],
              },
            },
            {
              $project: {
                data: 1,
                metadata: 1,
              },
            },
          ])
        } else if (material === "Silver" || material === "silver") {
          result = await SortProductModel.aggregate([
            {
              $match: {
                $and: [
                  category_name ? { category_name } : {},
                  // sub_category ? { sub_category } : {},
                  { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                  sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                  { description: { $not: { $regex: new RegExp("watch", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                  { description: { $regex: new RegExp("Pre-Owned", "i") } },
                  { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                  brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                  search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                  collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                  material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                  { description: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                  { description: { $not: { $regex: new RegExp("Rose", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("Rose", "i") } } },
                  { description: { $not: { $regex: new RegExp("Gold", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("Gold", "i") } } },
                  // material ? {description:{   $regex : new RegExp(material,'i')  } } : {},
                  minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                  maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
                ],
              },
            },
            {
              $facet: {
                metadata: [{ $count: "total" }],
                data: [
                  { $skip: parseInt(start) },
                  { $limit: parseInt(length) },
                  {
                    $sort:
                      sort_by === "asc"
                        ? { search_price: 1 }
                        : sort_by === "desc"
                        ? { search_price: -1 }
                        : { search_price: 1 },
                  },
                ],
              },
            },
            {
              $project: {
                data: 1,
                metadata: 1,
              },
            },
          ])
        } else {
          result = await SortProductModel.aggregate([
            {
              $match: {
                $and: [
                  category_name ? { category_name } : {},
                  { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                  // sub_category ? { sub_category } : {},
                  sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                  { description: { $not: { $regex: new RegExp("watch", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                  { description: { $regex: new RegExp("Pre-Owned", "i") } },
                  brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                  search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                  collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                  material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                  // material ? {description:{   $regex : new RegExp(material,'i')  } } : {},
                  minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                  maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
                ],
              },
            },
            {
              $facet: {
                metadata: [{ $count: "total" }],
                data: [
                  { $skip: parseInt(start) },
                  { $limit: parseInt(length) },
                  {
                    $sort:
                      sort_by === "asc"
                        ? { search_price: 1 }
                        : sort_by === "desc"
                        ? { search_price: -1 }
                        : { search_price: 1 },
                  },
                ],
              },
            },
            {
              $project: {
                data: 1,
                metadata: 1,
              },
            },
          ])
        }
        if (result[0].data.length > 0) {
          return ServiceResponse.success({
            data: {
              draw: parseInt(draw),
              recordsTotal: result[0].metadata[0].total,
              recordsFiltered: result[0].data.length,
              data: result[0].data,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 201,
        })
      }
    } catch (error) {
      return ServiceResponse.failed({ code: ErrorCodes.NO_CATEGORY_EXISTS })
    }
  }

  async getSortedWomenJewellery(
    data: SortWomenJewellery
  ): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    try {
      let search: any = data.search!.value
      let {
        start,
        length,
        draw,
        minPrice,
        maxPrice,
        collection,
        category_name,
        sub_category,
        brand_name,
        ring_size,
        color,
        ring_material,
        material,
        ring_color,
        ring_weight,
        earring_color,
        necklaces_color,
        bracelets_color,
        sort_by,
      } = data
      if (sub_category === "Rings" || sub_category === "rings") {
        let result: any
        if (color == "Gold" || color == "gold") {
          result = await SortProductModel.aggregate([
            {
              $match: {
                $and: [
                  category_name ? { category_name } : {},
                  // sub_category ? { sub_category } : {},
                  sub_category ? { sub_category: { $regex: new RegExp("ring", "i") } } : {},
                  { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                  { description: { $not: { $regex: new RegExp("watch", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                  brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                  search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                  collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                  ring_color ? { ring_color: { $regex: new RegExp(ring_color, "i") } } : {},
                  color ? { ring_color: { $regex: new RegExp(color, "i") } } : {},
                  { ring_color: { $not: { $regex: new RegExp("rose gold", "i") } } },
                  { ring_color: { $not: { $regex: new RegExp("yellow gold", "i") } } },
                  { ring_color: { $not: { $regex: new RegExp("white gold", "i") } } },
                  { sub_category: { $not: { $regex: new RegExp("Earrings", "i") } } },
                  material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                  material ? { description: { $regex: new RegExp(material, "i") } } : {},
                  minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                  maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
                ],
              },
            },
            {
              $facet: {
                metadata: [{ $count: "total" }],
                data: [
                  { $skip: parseInt(start) },
                  { $limit: parseInt(length) },
                  {
                    $sort:
                      sort_by === "asc"
                        ? { search_price: 1 }
                        : sort_by === "desc"
                        ? { search_price: -1 }
                        : { search_price: 1 },
                  },
                ],
              },
            },
            {
              $project: {
                data: 1,
                metadata: 1,
              },
            },
          ])
        } else {
          result = await SortProductModel.aggregate([
            {
              $match: {
                $and: [
                  category_name ? { category_name } : {},
                  // sub_category ? { sub_category } : {},
                  { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                  sub_category ? { sub_category: { $regex: new RegExp("ring", "i") } } : {},
                  { description: { $not: { $regex: new RegExp("watch", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                  brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                  search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                  collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                  ring_color ? { ring_color: { $regex: new RegExp(ring_color, "i") } } : {},
                  color ? { ring_color: { $regex: new RegExp(color, "i") } } : {},
                  { sub_category: { $not: { $regex: new RegExp("Earrings", "i") } } },
                  material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                  material ? { description: { $regex: new RegExp(material, "i") } } : {},
                  minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                  maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
                ],
              },
            },
            {
              $facet: {
                metadata: [{ $count: "total" }],
                data: [
                  { $skip: parseInt(start) },
                  { $limit: parseInt(length) },
                  {
                    $sort:
                      sort_by === "asc"
                        ? { search_price: 1 }
                        : sort_by === "desc"
                        ? { search_price: -1 }
                        : { search_price: 1 },
                  },
                ],
              },
            },
            {
              $project: {
                data: 1,
                metadata: 1,
              },
            },
          ])
        }
        if (result[0].data.length > 0) {
          return ServiceResponse.success({
            data: {
              draw: parseInt(draw),
              recordsTotal: result[0].metadata[0].total,
              recordsFiltered: result[0].data.length,
              data: result[0].data,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 201,
        })
      } else if (sub_category === "Earrings" || sub_category === "earrings") {
        let result: any
        if (color == "Gold" || color == "gold") {
          result = await SortProductModel.aggregate([
            {
              $match: {
                $and: [
                  category_name ? { category_name } : {},
                  { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                  // sub_category ? { sub_category } : {},
                  sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                  { description: { $not: { $regex: new RegExp("watch", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                  brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                  search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                  collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                  earring_color
                    ? { earring_color: { $regex: new RegExp(earring_color, "i") } }
                    : {},
                  color ? { earring_color: { $regex: new RegExp(color, "i") } } : {},
                  { earring_color: { $not: { $regex: new RegExp("rose gold", "i") } } },
                  { earring_color: { $not: { $regex: new RegExp("yellow gold", "i") } } },
                  { earring_color: { $not: { $regex: new RegExp("white gold", "i") } } },
                  material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                  material ? { description: { $regex: new RegExp(material, "i") } } : {},
                  minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                  maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
                ],
              },
            },
            {
              $facet: {
                metadata: [{ $count: "total" }],
                data: [
                  { $skip: parseInt(start) },
                  { $limit: parseInt(length) },
                  {
                    $sort:
                      sort_by === "asc"
                        ? { search_price: 1 }
                        : sort_by === "desc"
                        ? { search_price: -1 }
                        : { search_price: 1 },
                  },
                ],
              },
            },
            {
              $project: {
                data: 1,
                metadata: 1,
              },
            },
          ])
        } else {
          result = await SortProductModel.aggregate([
            {
              $match: {
                $and: [
                  category_name ? { category_name } : {},
                  { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                  // sub_category ? { sub_category } : {},
                  sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                  { description: { $not: { $regex: new RegExp("watch", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                  brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                  search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                  collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                  earring_color
                    ? { earring_color: { $regex: new RegExp(earring_color, "i") } }
                    : {},
                  color ? { earring_color: { $regex: new RegExp(color, "i") } } : {},
                  material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                  material ? { description: { $regex: new RegExp(material, "i") } } : {},
                  minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                  maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
                ],
              },
            },
            {
              $facet: {
                metadata: [{ $count: "total" }],
                data: [
                  { $skip: parseInt(start) },
                  { $limit: parseInt(length) },
                  {
                    $sort:
                      sort_by === "asc"
                        ? { search_price: 1 }
                        : sort_by === "desc"
                        ? { search_price: -1 }
                        : { search_price: 1 },
                  },
                ],
              },
            },
            {
              $project: {
                data: 1,
                metadata: 1,
              },
            },
          ])
        }
        if (result[0].data.length > 0) {
          return ServiceResponse.success({
            data: {
              draw: parseInt(draw),
              recordsTotal: result[0].metadata[0].total,
              recordsFiltered: result[0].data.length,
              data: result[0].data,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 201,
        })
      } else if (sub_category === "Necklaces" || sub_category === "necklaces") {
        let result: any
        if (color == "Gold" || color == "gold") {
          result = await SortProductModel.aggregate([
            {
              $match: {
                $and: [
                  category_name ? { category_name } : {},
                  { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                  // sub_category ? { sub_category } : {},
                  sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                  { description: { $not: { $regex: new RegExp("watch", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                  brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                  search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                  collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                  necklaces_color
                    ? { necklaces_color: { $regex: new RegExp(necklaces_color, "i") } }
                    : {},
                  color ? { necklaces_color: { $regex: new RegExp(color, "i") } } : {},
                  { necklaces_color: { $not: { $regex: new RegExp("rose gold", "i") } } },
                  { necklaces_color: { $not: { $regex: new RegExp("yellow gold", "i") } } },
                  { necklaces_color: { $not: { $regex: new RegExp("white gold", "i") } } },
                  material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                  material ? { description: { $regex: new RegExp(material, "i") } } : {},
                  minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                  maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
                ],
              },
            },
            {
              $facet: {
                metadata: [{ $count: "total" }],
                data: [
                  { $skip: parseInt(start) },
                  { $limit: parseInt(length) },
                  {
                    $sort:
                      sort_by === "asc"
                        ? { search_price: 1 }
                        : sort_by === "desc"
                        ? { search_price: -1 }
                        : { search_price: 1 },
                  },
                ],
              },
            },
            {
              $project: {
                data: 1,
                metadata: 1,
              },
            },
          ])
        } else {
          result = await SortProductModel.aggregate([
            {
              $match: {
                $and: [
                  category_name ? { category_name } : {},
                  { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                  // sub_category ? { sub_category } : {},
                  sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                  { description: { $not: { $regex: new RegExp("watch", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                  brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                  search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                  collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                  necklaces_color
                    ? { necklaces_color: { $regex: new RegExp(necklaces_color, "i") } }
                    : {},
                  color ? { necklaces_color: { $regex: new RegExp(color, "i") } } : {},
                  material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                  material ? { description: { $regex: new RegExp(material, "i") } } : {},
                  minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                  maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
                ],
              },
            },
            {
              $facet: {
                metadata: [{ $count: "total" }],
                data: [
                  { $skip: parseInt(start) },
                  { $limit: parseInt(length) },
                  {
                    $sort:
                      sort_by === "asc"
                        ? { search_price: 1 }
                        : sort_by === "desc"
                        ? { search_price: -1 }
                        : { search_price: 1 },
                  },
                ],
              },
            },
            {
              $project: {
                data: 1,
                metadata: 1,
              },
            },
          ])
        }
        if (result[0].data.length > 0) {
          return ServiceResponse.success({
            data: {
              draw: parseInt(draw),
              recordsTotal: result[0].metadata[0].total,
              recordsFiltered: result[0].data.length,
              data: result[0].data,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 201,
        })
      } else if (sub_category === "Bracelets" || sub_category === "bracelets") {
        let result: any
        if (color == "Gold" || color == "gold") {
          result = await SortProductModel.aggregate([
            {
              $match: {
                $and: [
                  category_name ? { category_name } : {},
                  { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                  // sub_category ? { sub_category } : {},
                  sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                  { description: { $not: { $regex: new RegExp("watch", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                  brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                  search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                  collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                  bracelets_color
                    ? { bracelets_color: { $regex: new RegExp(bracelets_color, "i") } }
                    : {},
                  color ? { bracelets_color: { $regex: new RegExp(color, "i") } } : {},
                  { bracelets_color: { $not: { $regex: new RegExp("rose gold", "i") } } },
                  { bracelets_color: { $not: { $regex: new RegExp("yellow gold", "i") } } },
                  { bracelets_color: { $not: { $regex: new RegExp("white gold", "i") } } },
                  material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                  material ? { description: { $regex: new RegExp(material, "i") } } : {},
                  minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                  maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
                ],
              },
            },
            {
              $facet: {
                metadata: [{ $count: "total" }],
                data: [
                  { $skip: parseInt(start) },
                  { $limit: parseInt(length) },
                  {
                    $sort:
                      sort_by === "asc"
                        ? { search_price: 1 }
                        : sort_by === "desc"
                        ? { search_price: -1 }
                        : { search_price: 1 },
                  },
                ],
              },
            },
            {
              $project: {
                data: 1,
                metadata: 1,
              },
            },
          ])
        } else {
          result = await SortProductModel.aggregate([
            {
              $match: {
                $and: [
                  category_name ? { category_name } : {},
                  // sub_category ? { sub_category } : {},
                  { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                  sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                  { description: { $not: { $regex: new RegExp("watch", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                  brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                  search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                  collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                  bracelets_color
                    ? { bracelets_color: { $regex: new RegExp(bracelets_color, "i") } }
                    : {},
                  color ? { bracelets_color: { $regex: new RegExp(color, "i") } } : {},
                  material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                  material ? { description: { $regex: new RegExp(material, "i") } } : {},
                  minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                  maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
                ],
              },
            },
            {
              $facet: {
                metadata: [{ $count: "total" }],
                data: [
                  { $skip: parseInt(start) },
                  { $limit: parseInt(length) },
                  {
                    $sort:
                      sort_by === "asc"
                        ? { search_price: 1 }
                        : sort_by === "desc"
                        ? { search_price: -1 }
                        : { search_price: 1 },
                  },
                ],
              },
            },
            {
              $project: {
                data: 1,
                metadata: 1,
              },
            },
          ])
        }

        if (result[0].data.length > 0) {
          return ServiceResponse.success({
            data: {
              draw: parseInt(draw),
              recordsTotal: result[0].metadata[0].total,
              recordsFiltered: result[0].data.length,
              data: result[0].data,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 201,
        })
      } else if (sub_category === "Charm" || sub_category === "charm") {
        const result: any = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                category_name ? { category_name } : {},
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                // sub_category ? { sub_category } : {},
                sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                material ? { description: { $regex: new RegExp(material, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $facet: {
              metadata: [{ $count: "total" }],
              data: [
                { $skip: parseInt(start) },
                { $limit: parseInt(length) },
                {
                  $sort:
                    sort_by === "asc"
                      ? { search_price: 1 }
                      : sort_by === "desc"
                      ? { search_price: -1 }
                      : { search_price: 1 },
                },
              ],
            },
          },
          {
            $project: {
              data: 1,
              metadata: 1,
            },
          },
        ])
        if (result[0].data.length > 0) {
          return ServiceResponse.success({
            data: {
              draw: parseInt(draw),
              recordsTotal: result[0].metadata[0].total,
              recordsFiltered: result[0].data.length,
              data: result[0].data,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 201,
        })
      } else if (sub_category === "Cuff links") {
        const result: any = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                category_name ? { category_name } : {},
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                // sub_category ? { sub_category } : {},
                sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                material ? { description: { $regex: new RegExp(material, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $facet: {
              metadata: [{ $count: "total" }],
              data: [
                { $skip: parseInt(start) },
                { $limit: parseInt(length) },
                {
                  $sort:
                    sort_by === "asc"
                      ? { search_price: 1 }
                      : sort_by === "desc"
                      ? { search_price: -1 }
                      : { search_price: 1 },
                },
              ],
            },
          },
          {
            $project: {
              data: 1,
              metadata: 1,
            },
          },
        ])
        if (result[0].data.length > 0) {
          return ServiceResponse.success({
            data: {
              draw: parseInt(draw),
              recordsTotal: result[0].metadata[0].total,
              recordsFiltered: result[0].data.length,
              data: result[0].data,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 201,
        })
      } else {
        let result: any = 0
        if (material === "Gold" || material === "gold") {
          result = await SortProductModel.aggregate([
            {
              $match: {
                $and: [
                  { colour: { $ne: "Cream" } },
                  { colour: { $ne: "Blue" } },
                  { colour: { $ne: "Multi-Coloured" } },
                  { colour: { $ne: "Black" } },
                  { colour: { $ne: "White" } },
                  { colour: { $ne: "Champagne" } },
                  { colour: { $ne: "Skeleton" } },
                  { colour: { $ne: "Silver" } },
                  { colour: { $ne: "Rose Gold" } },
                  { colour: { $ne: "Green" } },
                  { colour: { $ne: "Mother of Pearl" } },
                  { colour: { $ne: "Two Colour" } },
                  { colour: { $ne: "blue/pink" } },
                  { colour: { $ne: "multi" } },
                  { colour: { $ne: "" } },
                  { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                  category_name ? { category_name } : {},
                  sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                  color ? { colour: { $regex: new RegExp(color, "i") } } : {},
                  { description: { $not: { $regex: new RegExp("watch", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                  brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                  search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                  collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                  material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                  { description: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                  // material ? {description:{   $regex : new RegExp(material,'i')  } } : {},
                  minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                  maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
                  { sub_category: { $not: { $regex: new RegExp("null", "i") } } },
                  { sub_category: { $ne: "null" } },
                ],
              },
            },
            {
              $facet: {
                metadata: [{ $count: "total" }],
                data: [
                  { $skip: parseInt(start) },
                  { $limit: parseInt(length) },
                  {
                    $sort:
                      sort_by === "asc"
                        ? { search_price: 1 }
                        : sort_by === "desc"
                        ? { search_price: -1 }
                        : { search_price: 1 },
                  },
                ],
              },
            },
            {
              $project: {
                data: 1,
                metadata: 1,
              },
            },
          ])
        } else if (material === "Silver" || material === "silver") {
          result = await SortProductModel.aggregate([
            {
              $match: {
                $and: [
                  { colour: { $ne: "Cream" } },
                  { colour: { $ne: "Grey" } },
                  { colour: { $ne: "Blue" } },
                  { colour: { $ne: "Multi-Coloured" } },
                  { colour: { $ne: "Black" } },
                  { colour: { $ne: "White" } },
                  { colour: { $ne: "Champagne" } },
                  { colour: { $ne: "Skeleton" } },
                  { colour: { $ne: "Rose Gold" } },
                  { colour: { $ne: "Green" } },
                  { colour: { $ne: "Mother of Pearl" } },
                  { colour: { $ne: "Two Colour" } },
                  { colour: { $ne: "blue/pink" } },
                  { colour: { $ne: "multi" } },
                  { colour: { $ne: "" } },
                  { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                  category_name ? { category_name } : {},
                  { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                  sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                  { description: { $not: { $regex: new RegExp("watch", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                  color ? { colour: { $regex: new RegExp(color, "i") } } : {},
                  brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                  search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                  collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                  material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                  { description: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                  { description: { $not: { $regex: new RegExp("Rose", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("Rose", "i") } } },
                  { description: { $not: { $regex: new RegExp("Gold", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("Gold", "i") } } },
                  // material ? {description:{   $regex : new RegExp(material,'i')  } } : {},
                  minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                  maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
                ],
              },
            },
            {
              $facet: {
                metadata: [{ $count: "total" }],
                data: [
                  { $skip: parseInt(start) },
                  { $limit: parseInt(length) },
                  {
                    $sort:
                      sort_by === "asc"
                        ? { search_price: 1 }
                        : sort_by === "desc"
                        ? { search_price: -1 }
                        : { search_price: 1 },
                  },
                ],
              },
            },
            {
              $project: {
                data: 1,
                metadata: 1,
              },
            },
          ])
        } else if (material === "rose gold" || material === "Rose Gold") {
          result = await SortProductModel.aggregate([
            {
              $match: {
                $and: [
                  { colour: { $ne: "Cream" } },
                  { colour: { $ne: "Grey" } },
                  { colour: { $ne: "Blue" } },
                  { colour: { $ne: "Multi-Coloured" } },
                  { colour: { $ne: "Black" } },
                  { colour: { $ne: "White" } },
                  { colour: { $ne: "Champagne" } },
                  { colour: { $ne: "Skeleton" } },
                  { colour: { $ne: "Green" } },
                  { colour: { $ne: "Mother of Pearl" } },
                  { colour: { $ne: "Two Colour" } },
                  { colour: { $ne: "blue/pink" } },
                  { colour: { $ne: "multi" } },
                  { colour: { $ne: "" } },
                  { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                  category_name ? { category_name } : {},
                  { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                  sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                  { description: { $not: { $regex: new RegExp("watch", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                  color ? { colour: { $regex: new RegExp(color, "i") } } : {},
                  brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                  search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                  collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                  material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                  // material ? {description:{   $regex : new RegExp(material,'i')  } } : {},
                  minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                  maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
                ],
              },
            },
            {
              $facet: {
                metadata: [{ $count: "total" }],
                data: [
                  { $skip: parseInt(start) },
                  { $limit: parseInt(length) },
                  {
                    $sort:
                      sort_by === "asc"
                        ? { search_price: 1 }
                        : sort_by === "desc"
                        ? { search_price: -1 }
                        : { search_price: 1 },
                  },
                ],
              },
            },
            {
              $project: {
                data: 1,
                metadata: 1,
              },
            },
          ])
        } else if (material === "platinum" || material === "Platinum") {
          result = await SortProductModel.aggregate([
            {
              $match: {
                $and: [
                  //   {colour:{$ne: "Cream"}},
                  // {colour:{$ne: "Grey"}},
                  // {colour:{$ne: "Blue"}},
                  // {colour:{$ne: "Multi-Coloured"}},
                  // {colour:{$ne: "Black"}},
                  // {colour:{$ne: "White"}},
                  // {colour:{$ne: "Champagne"}},
                  // {colour:{$ne: "Skeleton"}},
                  // {colour:{$ne: "Green"}},
                  // {colour:{$ne: "Mother of Pearl"}},
                  // {colour:{$ne: "Two Colour"}},
                  // {colour:{$ne: "blue/pink"}},
                  // {colour:{$ne: "multi"}},
                  // {colour:{$ne: ""}},
                  { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                  category_name ? { category_name } : {},
                  brand_name ? { brand_name } : {},
                  color ? { product_name: { $regex: new RegExp(color, "i") } } : {},
                  { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                  // {description:{ $not: { $regex : new RegExp('Rose Gold','i') } } },
                  // {product_name:{ $not: { $regex : new RegExp('Rose Gold','i') } } },
                  // {description:{ $not: { $regex : new RegExp('Rose','i') } } },
                  // {product_name:{ $not: { $regex : new RegExp('Rose','i') } } },
                  // {description:{ $not: { $regex : new RegExp('Gold','i') } } },
                  // {product_name:{ $not: { $regex : new RegExp('Gold','i') } } },
                  { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                  { description: { $not: { $regex: new RegExp("watch", "i") } } },
                  sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                  brand_name ? { brand_name: { $in: [new RegExp(`${brand_name}`, "i")] } } : {},
                  search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                  collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                  material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                  minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                  maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
                  { sub_category: { $not: { $regex: new RegExp("null", "i") } } },
                  { sub_category: { $ne: "null" } },
                ],
              },
            },
            {
              $facet: {
                metadata: [{ $count: "total" }],
                data: [
                  { $skip: parseInt(start) },
                  { $limit: parseInt(length) },
                  {
                    $sort:
                      sort_by === "asc"
                        ? { search_price: 1 }
                        : sort_by === "desc"
                        ? { search_price: -1 }
                        : { search_price: 1 },
                  },
                ],
              },
            },
            {
              $project: {
                data: 1,
                metadata: 1,
              },
            },
          ])
        } else if (color == "Gold" || color == "gold") {
          result = await SortProductModel.aggregate([
            {
              $match: {
                $and: [
                  { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                  category_name ? { category_name } : {},
                  brand_name ? { brand_name } : {},
                  // color ? {product_name:{   $regex : new RegExp(color,'i')  } } :{},
                  // color ? {necklaces_color:{   $regex : new RegExp(color,'i')  } } :{},
                  // color ? {bracelets_color:{   $regex : new RegExp(color,'i')  } } :{},
                  { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                  { necklaces_color: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                  { bracelets_color: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                  { earring_color: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                  { ring_color: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                  { necklaces_color: { $not: { $regex: new RegExp("Yellow Gold", "i") } } },
                  { bracelets_color: { $not: { $regex: new RegExp("Yellow Gold", "i") } } },
                  { earring_color: { $not: { $regex: new RegExp("Yellow Gold", "i") } } },
                  { ring_color: { $not: { $regex: new RegExp("Yellow Gold", "i") } } },
                  { necklaces_color: { $not: { $regex: new RegExp("White Gold", "i") } } },
                  { bracelets_color: { $not: { $regex: new RegExp("White Gold", "i") } } },
                  { earring_color: { $not: { $regex: new RegExp("White Gold", "i") } } },
                  { ring_color: { $not: { $regex: new RegExp("White Gold", "i") } } },
                  // {description:{ $not: { $regex : new RegExp('Rose Gold','i') } } },
                  // {product_name:{ $not: { $regex : new RegExp('Rose Gold','i') } } },
                  // {description:{ $not: { $regex : new RegExp('Rose','i') } } },
                  // {product_name:{ $not: { $regex : new RegExp('Rose','i') } } },
                  // {description:{ $not: { $regex : new RegExp('Gold','i') } } },
                  // {product_name:{ $not: { $regex : new RegExp('Gold','i') } } },
                  { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                  { description: { $not: { $regex: new RegExp("watch", "i") } } },
                  sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                  // brand_name
                  //     ? { brand_name: { $in: [new RegExp(`${brand_name}`,'i')] } }
                  //     : {},
                  search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                  collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                  material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                  minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                  maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
                  { sub_category: { $not: { $regex: new RegExp("null", "i") } } },
                  { sub_category: { $ne: "null" } },
                ],
                $or: [
                  color ? { necklaces_color: { $regex: new RegExp(color, "i") } } : {},
                  color ? { bracelets_color: { $regex: new RegExp(color, "i") } } : {},
                  color ? { earring_color: { $regex: new RegExp(color, "i") } } : {},
                  color ? { ring_color: { $regex: new RegExp(color, "i") } } : {},
                ],
              },
            },
            {
              $facet: {
                metadata: [{ $count: "total" }],
                data: [
                  { $skip: parseInt(start) },
                  { $limit: parseInt(length) },
                  {
                    $sort:
                      sort_by === "asc"
                        ? { search_price: 1 }
                        : sort_by === "desc"
                        ? { search_price: -1 }
                        : { search_price: 1 },
                  },
                ],
              },
            },
            {
              $project: {
                data: 1,
                metadata: 1,
              },
            },
          ])
        } else {
          result = await SortProductModel.aggregate([
            {
              $match: {
                $and: [
                  // {colour:{$ne: "Cream"}},
                  // {colour:{$ne: "Grey"}},
                  // {colour:{$ne: "Blue"}},
                  // {colour:{$ne: "Multi-Coloured"}},
                  // {colour:{$ne: "Black"}},
                  // {colour:{$ne: "White"}},
                  // {colour:{$ne: "Champagne"}},
                  // {colour:{$ne: "Skeleton"}},
                  // {colour:{$ne: "Green"}},
                  // {colour:{$ne: "Mother of Pearl"}},
                  // {colour:{$ne: "Two Colour"}},
                  // {colour:{$ne: "blue/pink"}},
                  // {colour:{$ne: "multi"}},
                  // {colour:{$ne: ""}},
                  // {earring_color:{$ne: ""}},
                  // {earring_color:{$ne: null}},
                  { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                  category_name ? { category_name } : {},
                  brand_name ? { brand_name } : {},
                  // color ? {product_name:{   $regex : new RegExp(color,'i')  } } :{},
                  // color ? {necklaces_color:{   $regex : new RegExp(color,'i')  } } :{},
                  // color ? {bracelets_color:{   $regex : new RegExp(color,'i')  } } :{},
                  { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                  { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                  // {description:{ $not: { $regex : new RegExp('Rose Gold','i') } } },
                  // {product_name:{ $not: { $regex : new RegExp('Rose Gold','i') } } },
                  // {description:{ $not: { $regex : new RegExp('Rose','i') } } },
                  // {product_name:{ $not: { $regex : new RegExp('Rose','i') } } },
                  // {description:{ $not: { $regex : new RegExp('Gold','i') } } },
                  // {product_name:{ $not: { $regex : new RegExp('Gold','i') } } },
                  { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                  { description: { $not: { $regex: new RegExp("watch", "i") } } },
                  sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                  // brand_name
                  //     ? { brand_name: { $in: [new RegExp(`${brand_name}`,'i')] } }
                  //     : {},
                  search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
                  collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                  material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                  minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                  maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
                  { sub_category: { $not: { $regex: new RegExp("null", "i") } } },
                  { sub_category: { $ne: "null" } },
                ],
                $or: [
                  color ? { necklaces_color: { $regex: new RegExp(color, "i") } } : {},
                  color ? { bracelets_color: { $regex: new RegExp(color, "i") } } : {},
                  color ? { earring_color: { $regex: new RegExp(color, "i") } } : {},
                  color ? { ring_color: { $regex: new RegExp(color, "i") } } : {},
                  color ? { bracelets_color: { $regex: new RegExp(color, "i") } } : {},
                ],
              },
            },
            {
              $facet: {
                metadata: [{ $count: "total" }],
                data: [
                  { $skip: parseInt(start) },
                  { $limit: parseInt(length) },
                  {
                    $sort:
                      sort_by === "asc"
                        ? { search_price: 1 }
                        : sort_by === "desc"
                        ? { search_price: -1 }
                        : { search_price: 1 },
                  },
                ],
              },
            },
            {
              $project: {
                data: 1,
                metadata: 1,
              },
            },
          ])
        }
        if (result[0].data.length > 0) {
          return ServiceResponse.success({
            data: {
              draw: parseInt(draw),
              recordsTotal: result[0].metadata[0].total,
              recordsFiltered: result[0].data.length,
              data: result[0].data,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 201,
        })
      }
    } catch (error) {
      return ServiceResponse.failed({ code: ErrorCodes.NO_CATEGORY_EXISTS })
    }
  }

  async countStrapBrandNameFilter(
    data: SortTable
  ): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    const search: any = data.search?.value
    const {
      start,
      length,
      draw,
      minPrice,
      maxPrice,
      diameter,
      material,
      collection,
      water_resistant,
      movement,
      strap_material,
      sub_category,
      dial_color,
      category_name,
      brand_name,
      sort_by,
    } = data
    let result
    result = await SortProductModel.aggregate([
      {
        $match: {
          $and: [
            // category_name ? { category_name } : {},
            { merchant_category: { $regex: new RegExp("strap", "i") } },
            { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
            { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
            { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
            { category_name: { $not: { $regex: new RegExp("Jewellery", "i") } } },
            { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
            { description: { $not: { $regex: "jewellery" } } },
            // {description:{ $regex : "watch" } },
            //{description:{  $regex : new RegExp('strap','i')  } },
            // brand_name
            //     ? { brand_name: { $in: [new RegExp(`${brand_name}`,'i')] } }
            //     : {},
            brand_name ? { brand_name: { $in: [`${brand_name}`] } } : {},
            search ? { product_name: { $regex: new RegExp(search, "i") } } : {},
            // diameter ? { diameter: { $regex: new RegExp(diameter, "i") } } : {},
            diameter ? { diameter } : {},
            collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
            // water_resistant
            //     ? { water_resistant: { $regex: new RegExp(water_resistant, "i") } }
            //     : {},
            water_resistant ? { water_resistant } : {},
            movement ? { movement: { $regex: new RegExp(movement, "i") } } : {},
            movement ? { movement } : {},
            strap_material ? { strap_material: { $regex: new RegExp(strap_material, "i") } } : {},
            // strap_material ? { strap_material } : {},
            // dial_color ? { dial_color: { $regex: new RegExp(dial_color, "i") } } : {},
            dial_color ? { dial_color } : {},
            minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
            maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
          ],
        },
      },
      {
        $group: {
          _id: {
            brand_name: "$brand_name",
          },
          count: { $sum: 1 },
        },
      },
    ])
    return ServiceResponse.success({
      data: { data: result },
      status: 201,
    })
  }

  async countBrandNameFilter(data: any): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    const { category, collection, sub_category, minPrice, maxPrice } = data
    let result

    if (category === "Men's Watches") {
      result = await SortProductModel.aggregate([
        {
          $match: {
            category_name: "Men's Watches",
            $and: [
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { description: { $not: { $regex: new RegExp("Watch Band", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Watch Band", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { product_name: { $not: { $regex: "ladies" } } },
              { product_name: { $not: { $regex: "Ladies" } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $not: { $regex: "ladies" } } },
              { description: { $not: { $regex: "Ladies" } } },
              { description: { $not: { $regex: new RegExp("Winder", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Winder", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Nurses", "i") } } },
              { product_name: { $regex: new RegExp("Watch", "i") } },
              { description: { $regex: "watch" } },
              // {sub_category:{ $not: { $regex : new RegExp('null','i') } } },
              // {sub_category:{ $ne: 'null' } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              brand_name: "$brand_name",
            },
            count: { $sum: 1 },
          },
        },
      ])
    } else if (category === "Women's Watches") {
      result = await SortProductModel.aggregate([
        {
          $match: {
            category_name: "Women's Watches",
            $and: [
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { product_name: { $not: { $regex: "Mens" } } },
              { product_name: { $not: { $regex: "Men" } } },
              { product_name: { $not: { $regex: "mens" } } },
              { product_name: { $not: { $regex: "men" } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $regex: "watch" } },
              { sub_category: { $not: { $regex: new RegExp("null", "i") } } },
              { sub_category: { $ne: "null" } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              brand_name: "$brand_name",
            },
            count: { $sum: 1 },
          },
        },
      ])
    } else if (category === "Accessories") {
      if (sub_category == "Gift") {
        result = await SortProductModel.aggregate([
          {
            $match: {
              category_name: "Accessories",
              $and: [
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { product_name: { $not: { $regex: new RegExp("BallPoint", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Rollerball", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Robberball", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Doyle", "i") } } },
                { product_name: { $not: { $regex: new RegExp("fineliner", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { description: { $not: { $regex: new RegExp("Pen", "i") } } },
                // {product_name:{ $not: { $regex : new RegExp('Pen','i') } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
                { description: { $not: { $regex: "jewellery" } } },
                // sub_category ? {product_name:{   $regex : new RegExp(sub_category,'i')  } } :{},
                // sub_category ? { sub_category } : {},
                // {description:{ $regex : "watch" } },
                sub_category ? { sub_category } : {},
                { sub_category: { $ne: "null" } },
                // sub_category ? {sub_category:{   $regex : new RegExp(sub_category,'i')  } } :{},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                brand_name: "$brand_name",
              },
              count: { $sum: 1 },
            },
          },
        ])
      } else {
        result = await SortProductModel.aggregate([
          {
            $match: {
              category_name: "Accessories",
              $and: [
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                // {product_name:{ $not: { $regex : new RegExp('Pen','i') } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
                { description: { $not: { $regex: "jewellery" } } },
                // sub_category ? {product_name:{   $regex : new RegExp(sub_category,'i')  } } :{},
                // sub_category ? { sub_category } : {},
                // {description:{ $regex : "watch" } },
                sub_category ? { sub_category } : {},
                { sub_category: { $ne: "null" } },
                // sub_category ? {sub_category:{   $regex : new RegExp(sub_category,'i')  } } :{},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                brand_name: "$brand_name",
              },
              count: { $sum: 1 },
            },
          },
        ])
      }
    } else {
      result = await SortProductModel.aggregate([
        {
          $match: {
            category_name: category,
            $and: [
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              brand_name: "$brand_name",
            },
            count: { $sum: 1 },
          },
        },
      ])
    }

    return ServiceResponse.success({
      data: { data: result },
      status: 201,
    })
  }

  async countPreOwnedBrandNameFilter(
    category: string,
    data: any
  ): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    const {category_name, collection, minPrice, maxPrice } = data
   
    let result
    if (category_name === "Men's Watches") {
      console.log("11111")
      result = await SortProductModel.aggregate([
        {
          $match: {
            category_name: "Men's Watches",
            $and: [
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { product_name: { $not: { $regex: "ladies" } } },
              { product_name: { $not: { $regex: "Ladies" } } },
              { product_name: { $regex: new RegExp("Pre-Owned", "i") } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $not: { $regex: "ladies" } } },
              { description: { $not: { $regex: "Ladies" } } },
              // { description: { $regex: "watch" } },
              // { sub_category: { $not: { $regex: new RegExp("null", "i") } } },
              // { sub_category: { $ne: "null" } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              brand_name: "$brand_name",
            },
            count: { $sum: 1 },
          },
        },
      ])
    } else if (category_name === "Women's Watches") {
      result = await SortProductModel.aggregate([
        {
          $match: {
            category_name: "Women's Watches",
            $and: [
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { product_name: { $not: { $regex: "Mens" } } },
              { product_name: { $not: { $regex: "Men" } } },
              { product_name: { $not: { $regex: "mens" } } },
              { product_name: { $not: { $regex: "men" } } },
              { product_name: { $regex: new RegExp("Pre-Owned", "i") } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              // { description: { $regex: "watch" } },
              // { sub_category: { $not: { $regex: new RegExp("null", "i") } } },
              // { sub_category: { $ne: "null" } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              brand_name: "$brand_name",
            },
            count: { $sum: 1 },
          },
        },
      ])
    } else if (category_name === "Accessories") {
      result = await SortProductModel.aggregate([
        {
          $match: {
            category_name: "Accessories",
            $and: [
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $regex: "watch" } },
              { sub_category: { $not: { $regex: new RegExp("null", "i") } } },
              { sub_category: { $ne: "null" } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              brand_name: "$brand_name",
            },
            count: { $sum: 1 },
          },
        },
      ])
    } else {
      result = await SortProductModel.aggregate([
        {
          $match: {
            category_name: category,
            $and: [
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              brand_name: "$brand_name",
            },
            count: { $sum: 1 },
          },
        },
      ])
    }

    return ServiceResponse.success({
      data: { data: result },
      status: 201,
    })
  }

  async countPreOwnedJewelleryBrandNameFilter(): Promise<
    ServiceSuccessResponse | ServiceFailedResponse
  > {
    const result = await SortProductModel.aggregate([
      {
        $match: {
          category_name: "Women's Jewellery",
          $and: [
            { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
            { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
            { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
            { description: { $regex: new RegExp("Pre-Owned", "i") } },
            // {description:{ $eq: { $regex : new RegExp('Pre-Owned','i') } } },
            // {sub_category:{ $not: { $regex : new RegExp('null','i') } } },
            // {sub_category:{ $ne: 'null' } },
          ],
        },
      },
      {
        $group: {
          _id: {
            Jewellery_Brand: "$brand_name",
          },
          count: { $sum: 1 },
        },
      },
    ])
    return ServiceResponse.success({
      data: { data: result },
      status: 201,
    })
  }

  async countJewelleryBrandNameFilter(
    material: string,
    subCategory: string
  ): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    let result: any = 0
    if (material == "Gold" || material == "gold") {
      result = await SortProductModel.aggregate([
        {
          $match: {
            category_name: "Women's Jewellery",
            $and: [
              { colour: { $ne: "Cream" } },
              { colour: { $ne: "Blue" } },
              { colour: { $ne: "Multi-Coloured" } },
              { colour: { $ne: "Black" } },
              { colour: { $ne: "White" } },
              { colour: { $ne: "Champagne" } },
              { colour: { $ne: "Skeleton" } },
              { colour: { $ne: "Silver" } },
              { colour: { $ne: "Rose Gold" } },
              { colour: { $ne: "Green" } },
              { colour: { $ne: "Mother of Pearl" } },
              { colour: { $ne: "Two Colour" } },
              { colour: { $ne: "blue/pink" } },
              { colour: { $ne: "multi" } },
              { colour: { $ne: "" } },
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
              { description: { $not: { $regex: new RegExp("watch", "i") } } },
              material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
              { description: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
              { sub_category: { $not: { $regex: new RegExp("null", "i") } } },
              { sub_category: { $ne: "null" } },
            ],
          },
        },
        {
          $group: {
            _id: {
              Jewellery_Brand: "$brand_name",
            },
            count: { $sum: 1 },
          },
        },
      ])
    } else if (material == "Silver" || material == "silver") {
      result = await SortProductModel.aggregate([
        {
          $match: {
            category_name: "Women's Jewellery",
            $and: [
              { colour: { $ne: "Cream" } },
              { colour: { $ne: "Grey" } },
              { colour: { $ne: "Blue" } },
              { colour: { $ne: "Multi-Coloured" } },
              { colour: { $ne: "Black" } },
              { colour: { $ne: "White" } },
              { colour: { $ne: "Champagne" } },
              { colour: { $ne: "Skeleton" } },
              { colour: { $ne: "Rose Gold" } },
              { colour: { $ne: "Green" } },
              { colour: { $ne: "Mother of Pearl" } },
              { colour: { $ne: "Two Colour" } },
              { colour: { $ne: "blue/pink" } },
              { colour: { $ne: "multi" } },
              { colour: { $ne: "" } },
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
              { description: { $not: { $regex: new RegExp("watch", "i") } } },
              material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
              // material ? {colour:{   $regex : new RegExp(material,'i')  } } :{},
              { description: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
              { description: { $not: { $regex: new RegExp("Rose", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Rose", "i") } } },
              { description: { $not: { $regex: new RegExp("Gold", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Gold", "i") } } },
              { sub_category: { $not: { $regex: new RegExp("null", "i") } } },
              { sub_category: { $ne: "null" } },
            ],
          },
        },
        {
          $group: {
            _id: {
              Jewellery_Brand: "$brand_name",
            },
            count: { $sum: 1 },
          },
        },
      ])
    } else if (material == "rose gold" || material == "Rose Gold") {
      result = await SortProductModel.aggregate([
        {
          $match: {
            category_name: "Women's Jewellery",
            $and: [
              { colour: { $ne: "Cream" } },
              { colour: { $ne: "Grey" } },
              { colour: { $ne: "Blue" } },
              { colour: { $ne: "Multi-Coloured" } },
              { colour: { $ne: "Black" } },
              { colour: { $ne: "White" } },
              { colour: { $ne: "Champagne" } },
              { colour: { $ne: "Skeleton" } },
              { colour: { $ne: "Green" } },
              { colour: { $ne: "Mother of Pearl" } },
              { colour: { $ne: "Two Colour" } },
              { colour: { $ne: "blue/pink" } },
              { colour: { $ne: "multi" } },
              { colour: { $ne: "" } },
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
              { description: { $not: { $regex: new RegExp("watch", "i") } } },
              material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
              // material ? {colour:{   $regex : new RegExp(material,'i')  } } :{},
              { sub_category: { $not: { $regex: new RegExp("null", "i") } } },
              { sub_category: { $ne: "null" } },
            ],
          },
        },
        {
          $group: {
            _id: {
              Jewellery_Brand: "$brand_name",
            },
            count: { $sum: 1 },
          },
        },
      ])
    } else {
      if (subCategory == "rings" || subCategory == "Rings") {
        result = await SortProductModel.aggregate([
          {
            $match: {
              category_name: "Women's Jewellery",
              $and: [
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                subCategory ? { sub_category: { $regex: new RegExp("ring", "i") } } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                { sub_category: { $not: { $regex: new RegExp("Earrings", "i") } } },
                { sub_category: { $not: { $regex: new RegExp("null", "i") } } },
                { sub_category: { $ne: "null" } },
              ],
            },
          },
          {
            $group: {
              _id: {
                Jewellery_Brand: "$brand_name",
              },
              count: { $sum: 1 },
            },
          },
        ])
      } else {
        result = await SortProductModel.aggregate([
          {
            $match: {
              category_name: "Women's Jewellery",
              $and: [
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                subCategory ? { sub_category: { $regex: new RegExp(subCategory, "i") } } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                { sub_category: { $not: { $regex: new RegExp("null", "i") } } },
                { sub_category: { $ne: "null" } },
              ],
            },
          },
          {
            $group: {
              _id: {
                Jewellery_Brand: "$brand_name",
              },
              count: { $sum: 1 },
            },
          },
        ])
      }
    }

    return ServiceResponse.success({
      data: { data: result },
      status: 201,
    })
  }

  async countMensBrandNameFilter(): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    const result = await SortProductModel.aggregate([
      {
        $match: {
          category_name: "Men's Watches",
          $and: [
            { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
            { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
            { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
            { product_name: { $not: { $regex: "ladies" } } },
            { product_name: { $not: { $regex: "Ladies" } } },
            { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
            { description: { $not: { $regex: "jewellery" } } },
            { description: { $not: { $regex: "ladies" } } },
            { description: { $not: { $regex: "Ladies" } } },
            { description: { $regex: "watch" } },
            { sub_category: { $not: { $regex: new RegExp("null", "i") } } },
            { sub_category: { $ne: "null" } },
          ],
        },
      },
      {
        $group: {
          _id: {
            "Mens's_brand": "$brand_name",
          },
          count: { $sum: 1 },
        },
      },
    ])
    return ServiceResponse.success({
      data: { data: result },
      status: 201,
    })
  }

  async countLadiesBrandNameFilter(): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    const result = await SortProductModel.aggregate([
      {
        $match: {
          category_name: "Women's Watches",
          $and: [
            { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
            { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
            { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
            { product_name: { $not: { $regex: "Mens" } } },
            { product_name: { $not: { $regex: "Men" } } },
            { product_name: { $not: { $regex: "mens" } } },
            { product_name: { $not: { $regex: "men" } } },
            { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
            { description: { $regex: "watch" } },
            { sub_category: { $not: { $regex: new RegExp("null", "i") } } },
            { sub_category: { $ne: "null" } },
          ],
        },
      },
      {
        $group: {
          _id: {
            Ladies_Brand: "$brand_name",
          },
          count: { $sum: 1 },
        },
      },
    ])
    return ServiceResponse.success({
      data: { data: result },
      status: 201,
    })
  }

  async countGiftBrandNameFilter(): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    const result = await SortProductModel.aggregate([
      {
        $match: {
          category_name: "Gift",
          $and: [
            { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
            { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
            { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
            { sub_category: { $not: { $regex: new RegExp("null", "i") } } },
            { sub_category: { $ne: "null" } },
          ],
        },
      },
      {
        $group: {
          _id: {
            Gift_Brand: "$brand_name",
          },
          count: { $sum: 1 },
        },
      },
    ])
    return ServiceResponse.success({
      data: { data: result },
      status: 201,
    })
  }

  async countBrandFilter(data: any): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    const { brand_name, category_name, sub_category, collection, minPrice, maxPrice, material } =
      data
    if (category_name === "Men's Watches") {
      const strapMaterialResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { strap_material: { $ne: "" } },
              { strap_material: { $ne: null } },
              category_name ? { category_name } : {},
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { product_name: { $not: { $regex: "ladies" } } },
              { product_name: { $not: { $regex: "Ladies" } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $not: { $regex: "ladies" } } },
              { description: { $not: { $regex: "Ladies" } } },
              { description: { $not: { $regex: new RegExp("Watch Band", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Watch Band", "i") } } },
              { description: { $not: { $regex: new RegExp("Winder", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Winder", "i") } } },
              { product_name: { $regex: new RegExp("Watch", "i") } },
              { product_name: { $not: { $regex: new RegExp("Nurses", "i") } } },
              { description: { $regex: "watch" } },
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              strap_material: "$strap_material",
            },
            count: { $sum: 1 },
          },
        },
        // {
        //   $project: {
        //     "strap_material": {
        //       $cond: {
        //         if: {
        //           $or:[
        //             {$eq:["$strap_material", null ]},
        //             {$eq:["$strap_material", "" ]},
        //           ]
        //         },
        //         then: "$$REMOVE",
        //         else: "$count"
        //       }
        //     }
        //   }
        // },
      ])
      const dialColorResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { dial_color: { $ne: "" } },
              { dial_color: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { description: { $not: { $regex: new RegExp("Watch Band", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Watch Band", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { product_name: { $not: { $regex: "ladies" } } },
              { product_name: { $not: { $regex: "Ladies" } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $not: { $regex: "ladies" } } },
              { description: { $not: { $regex: "Ladies" } } },
              { description: { $not: { $regex: new RegExp("Winder", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Winder", "i") } } },
              { product_name: { $regex: new RegExp("Watch", "i") } },
              { product_name: { $not: { $regex: new RegExp("Nurses", "i") } } },
              { description: { $regex: "watch" } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              dial_color: "$dial_color",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const diameterResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { diameter: { $ne: "" } },
              { diameter: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { product_name: { $not: { $regex: "ladies" } } },
              { product_name: { $not: { $regex: "Ladies" } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $not: { $regex: "ladies" } } },
              { description: { $not: { $regex: "Ladies" } } },
              { description: { $not: { $regex: new RegExp("Winder", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Winder", "i") } } },
              { product_name: { $regex: new RegExp("Watch", "i") } },
              { product_name: { $regex: new RegExp("Nurses", "i") } },
              { product_name: { $not: { $regex: new RegExp("Nurses", "i") } } },
              { description: { $regex: "watch" } },
              { description: { $not: { $regex: new RegExp("Watch Band", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Watch Band", "i") } } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              diameter: "$diameter",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const waterResistantResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { water_resistant: { $ne: "" } },
              { water_resistant: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { product_name: { $not: { $regex: "ladies" } } },
              { product_name: { $not: { $regex: "Ladies" } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $not: { $regex: "ladies" } } },
              { description: { $not: { $regex: "Ladies" } } },
              { description: { $not: { $regex: new RegExp("Winder", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Winder", "i") } } },
              { product_name: { $regex: new RegExp("Watch", "i") } },
              { product_name: { $not: { $regex: new RegExp("Nurses", "i") } } },
              { description: { $regex: "watch" } },
              { description: { $not: { $regex: new RegExp("Watch Band", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Watch Band", "i") } } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              water_resistant: "$water_resistant",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const movementResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { movement: { $ne: "" } },
              { movement: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { product_name: { $not: { $regex: "ladies" } } },
              { product_name: { $not: { $regex: "Ladies" } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $not: { $regex: "ladies" } } },
              { description: { $not: { $regex: "Ladies" } } },
              { description: { $not: { $regex: new RegExp("Winder", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Winder", "i") } } },
              { product_name: { $regex: new RegExp("Watch", "i") } },
              { product_name: { $not: { $regex: new RegExp("Nurses", "i") } } },
              { description: { $regex: "watch" } },
              { description: { $not: { $regex: new RegExp("Watch Band", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Watch Band", "i") } } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              movement: "$movement",
            },
            count: { $sum: 1 },
          },
        },
      ])

      const result = {
        strap_material: strapMaterialResult,
        dial_color: dialColorResult,
        diameter: diameterResult,
        water_resistant: waterResistantResult,
        movement: movementResult,
      }
      return ServiceResponse.success({
        data: {
          data: result,
        },
        status: 201,
      })
    }
    if (category_name === "Women's Watches") {
      const strapMaterialResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { strap_material: { $ne: "" } },
              { strap_material: { $ne: null } },
              category_name ? { category_name } : {},
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { product_name: { $not: { $regex: "Mens" } } },
              { product_name: { $not: { $regex: "Men" } } },
              { product_name: { $not: { $regex: "mens" } } },
              { product_name: { $not: { $regex: "men" } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $regex: "watch" } },
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              strap_material: "$strap_material",
            },
            count: { $sum: 1 },
          },
        },
        // {
        //   $project: {
        //     "strap_material": {
        //       $cond: {
        //         if: {
        //           $or:[
        //             {$eq:["$strap_material", null ]},
        //             {$eq:["$strap_material", "" ]},
        //           ]
        //         },
        //         then: "$$REMOVE",
        //         else: "$count"
        //       }
        //     }
        //   }
        // },
      ])
      const dialColorResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { dial_color: { $ne: "" } },
              { dial_color: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { product_name: { $not: { $regex: "Mens" } } },
              { product_name: { $not: { $regex: "Men" } } },
              { product_name: { $not: { $regex: "mens" } } },
              { product_name: { $not: { $regex: "men" } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $regex: "watch" } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              dial_color: "$dial_color",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const diameterResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { diameter: { $ne: "" } },
              { diameter: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { product_name: { $not: { $regex: "Mens" } } },
              { product_name: { $not: { $regex: "Men" } } },
              { product_name: { $not: { $regex: "mens" } } },
              { product_name: { $not: { $regex: "men" } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $regex: "watch" } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              diameter: "$diameter",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const waterResistantResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { water_resistant: { $ne: "" } },
              { water_resistant: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { product_name: { $not: { $regex: "Mens" } } },
              { product_name: { $not: { $regex: "Men" } } },
              { product_name: { $not: { $regex: "mens" } } },
              { product_name: { $not: { $regex: "men" } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $regex: "watch" } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              water_resistant: "$water_resistant",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const movementResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { movement: { $ne: "" } },
              { movement: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { product_name: { $not: { $regex: "Mens" } } },
              { product_name: { $not: { $regex: "Men" } } },
              { product_name: { $not: { $regex: "mens" } } },
              { product_name: { $not: { $regex: "men" } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $regex: "watch" } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              movement: "$movement",
            },
            count: { $sum: 1 },
          },
        },
      ])

      const result = {
        strap_material: strapMaterialResult,
        dial_color: dialColorResult,
        diameter: diameterResult,
        water_resistant: waterResistantResult,
        movement: movementResult,
      }
      return ServiceResponse.success({
        data: {
          data: result,
        },
        status: 201,
      })
    } else if (category_name === "Women's Jewellery") {
      let earRingResult,
        ringSizeResult,
        ringMaterialResult,
        ringColorResult,
        ringWeightResult,
        necklacesColorResult
      let braceletsColorResult, pendantMaterialResult, pendantColorResult
      if (material == "Gold" || material == "gold") {
        earRingResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { earring_color: { $ne: "" } },
                { earring_color: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                { description: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                earring_color: "$earring_color",
              },
              count: { $sum: 1 },
            },
          },
        ])
        ringSizeResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { ring_size: { $ne: "" } },
                { ring_size: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                { description: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                ring_size: "$ring_size",
              },
              count: { $sum: 1 },
            },
          },
        ])
        ringMaterialResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { ring_material: { $ne: "" } },
                { ring_material: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                { description: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                ring_material: "$ring_material",
              },
              count: { $sum: 1 },
            },
          },
        ])
        ringColorResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                // {ring_color:{$ne: ""}},
                // {ring_color:{$ne: null}},
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                { description: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                ring_color: "Gold",
              },
              count: { $sum: 1 },
            },
          },
        ])
        ringWeightResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { ring_weight: { $ne: "" } },
                { ring_weight: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                { description: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                ring_weight: "$ring_weight",
              },
              count: { $sum: 1 },
            },
          },
        ])
        necklacesColorResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { necklaces_color: { $ne: "" } },
                { necklaces_color: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                { description: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                necklaces_color: "$necklaces_color",
              },
              count: { $sum: 1 },
            },
          },
        ])
        braceletsColorResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { bracelets_color: { $ne: "" } },
                { bracelets_color: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                { description: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                bracelets_color: "$bracelets_color",
              },
              count: { $sum: 1 },
            },
          },
        ])
        pendantMaterialResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { pendant_material: { $ne: "" } },
                { pendant_material: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                { description: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                pendant_material: "$pendant_material",
              },
              count: { $sum: 1 },
            },
          },
        ])
        pendantColorResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { pendant_color: { $ne: "" } },
                { pendant_color: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                { description: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                pendant_color: "$pendant_color",
              },
              count: { $sum: 1 },
            },
          },
        ])
      } else if (material == "Silver" || material == "silver") {
        earRingResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { earring_color: { $ne: "" } },
                { earring_color: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                earring_color: "$earring_color",
              },
              count: { $sum: 1 },
            },
          },
        ])
        ringSizeResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { ring_size: { $ne: "" } },
                { ring_size: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                ring_size: "$ring_size",
              },
              count: { $sum: 1 },
            },
          },
        ])
        ringMaterialResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { ring_material: { $ne: "" } },
                { ring_material: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                ring_material: "$ring_material",
              },
              count: { $sum: 1 },
            },
          },
        ])
        ringColorResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { ring_color: { $ne: "" } },
                { ring_color: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                ring_color: "$ring_color",
              },
              count: { $sum: 1 },
            },
          },
        ])
        ringWeightResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { ring_weight: { $ne: "" } },
                { ring_weight: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                ring_weight: "$ring_weight",
              },
              count: { $sum: 1 },
            },
          },
        ])
        necklacesColorResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { necklaces_color: { $ne: "" } },
                { necklaces_color: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                necklaces_color: "$necklaces_color",
              },
              count: { $sum: 1 },
            },
          },
        ])
        braceletsColorResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { bracelets_color: { $ne: "" } },
                { bracelets_color: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                bracelets_color: "$bracelets_color",
              },
              count: { $sum: 1 },
            },
          },
        ])
        pendantMaterialResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { pendant_material: { $ne: "" } },
                { pendant_material: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                pendant_material: "$pendant_material",
              },
              count: { $sum: 1 },
            },
          },
        ])
        pendantColorResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { pendant_color: { $ne: "" } },
                { pendant_color: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                pendant_color: "$pendant_color",
              },
              count: { $sum: 1 },
            },
          },
        ])
      } else {
        earRingResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { earring_color: { $ne: "" } },
                { earring_color: { $ne: null } },
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                earring_color: "$earring_color",
              },
              count: { $sum: 1 },
            },
          },
        ])
        ringSizeResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { ring_size: { $ne: "" } },
                { ring_size: { $ne: null } },
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                ring_size: "$ring_size",
              },
              count: { $sum: 1 },
            },
          },
        ])
        ringMaterialResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { ring_material: { $ne: "" } },
                { ring_material: { $ne: null } },
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                ring_material: "$ring_material",
              },
              count: { $sum: 1 },
            },
          },
        ])
        ringColorResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { ring_color: { $ne: "" } },
                { ring_color: { $ne: null } },
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                ring_color: "$ring_color",
              },
              count: { $sum: 1 },
            },
          },
        ])
        ringWeightResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { ring_weight: { $ne: "" } },
                { ring_weight: { $ne: null } },
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                ring_weight: "$ring_weight",
              },
              count: { $sum: 1 },
            },
          },
        ])
        necklacesColorResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { necklaces_color: { $ne: "" } },
                { necklaces_color: { $ne: null } },
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                necklaces_color: "$necklaces_color",
              },
              count: { $sum: 1 },
            },
          },
        ])
        braceletsColorResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { bracelets_color: { $ne: "" } },
                { bracelets_color: { $ne: null } },
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                bracelets_color: "$bracelets_color",
              },
              count: { $sum: 1 },
            },
          },
        ])
        pendantMaterialResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { pendant_material: { $ne: "" } },
                { pendant_material: { $ne: null } },
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                pendant_material: "$pendant_material",
              },
              count: { $sum: 1 },
            },
          },
        ])
        pendantColorResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { pendant_color: { $ne: "" } },
                { pendant_color: { $ne: null } },
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                pendant_color: "$pendant_color",
              },
              count: { $sum: 1 },
            },
          },
        ])
      }

      const result = {
        earRings: {
          color: earRingResult,
        },
        ring: {
          size: ringSizeResult,
          material: ringMaterialResult,
          color: ringColorResult,
          weight: ringWeightResult,
        },
        necklaces: {
          color: necklacesColorResult,
        },
        bracelets: {
          color: braceletsColorResult,
        },
        pendant: {
          material: pendantMaterialResult,
          color: pendantColorResult,
        },
      }
      return ServiceResponse.success({
        data: {
          data: result,
        },
        status: 201,
      })
    } else if (category_name === "Accessories") {
      if (sub_category == "Gift") {
        const strapMaterialResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { product_name: { $not: { $regex: new RegExp("BallPoint", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Rollerball", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Robberball", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Doyle", "i") } } },
                { product_name: { $not: { $regex: new RegExp("fineliner", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { description: { $not: { $regex: new RegExp("Pen", "i") } } },
                { sub_category: { $ne: "null" } },
                { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
                { description: { $not: { $regex: "jewellery" } } },
                // {description:{ $regex : "watch" } },
                { strap_material: { $ne: "" } },
                { strap_material: { $ne: null } },
                sub_category ? { sub_category } : {},
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                strap_material: "$strap_material",
              },
              count: { $sum: 1 },
            },
          },
          // {
          //   $project: {
          //     "strap_material": {
          //       $cond: {
          //         if: {
          //           $or:[
          //             {$eq:["$strap_material", null ]},
          //             {$eq:["$strap_material", "" ]},
          //           ]
          //         },
          //         then: "$$REMOVE",
          //         else: "$count"
          //       }
          //     }
          //   }
          // },
        ])
        const dialColorResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { sub_category: { $ne: "null" } },
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { product_name: { $not: { $regex: new RegExp("BallPoint", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Rollerball", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Robberball", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Doyle", "i") } } },
                { product_name: { $not: { $regex: new RegExp("fineliner", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { description: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
                { description: { $not: { $regex: "jewellery" } } },
                // {description:{ $regex : "watch" } },
                { dial_color: { $ne: "" } },
                { dial_color: { $ne: null } },
                category_name ? { category_name } : {},
                sub_category ? { sub_category } : {},
                brand_name ? { brand_name } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                dial_color: "$dial_color",
              },
              count: { $sum: 1 },
            },
          },
        ])
        const diameterResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                // {product_name:{ $not: { $regex : new RegExp('Pen','i') } } },
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { product_name: { $not: { $regex: new RegExp("BallPoint", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Rollerball", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Robberball", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Doyle", "i") } } },
                { product_name: { $not: { $regex: new RegExp("fineliner", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { description: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
                { description: { $not: { $regex: "jewellery" } } },
                // {description:{ $regex : "watch" } },
                { sub_category: { $ne: "null" } },
                { diameter: { $ne: "" } },
                { diameter: { $ne: null } },
                category_name ? { category_name } : {},
                sub_category ? { sub_category } : {},
                brand_name ? { brand_name } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                diameter: "$diameter",
              },
              count: { $sum: 1 },
            },
          },
        ])
        const waterResistantResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { description: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("BallPoint", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Rollerball", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Robberball", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Doyle", "i") } } },
                { product_name: { $not: { $regex: new RegExp("fineliner", "i") } } },
                // {product_name:{ $not: { $regex : new RegExp('Pen','i') } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
                { description: { $not: { $regex: "jewellery" } } },
                // {description:{ $regex : "watch" } },
                { sub_category: { $ne: "null" } },
                { water_resistant: { $ne: "" } },
                { water_resistant: { $ne: null } },
                sub_category ? { sub_category } : {},
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                water_resistant: "$water_resistant",
              },
              count: { $sum: 1 },
            },
          },
        ])
        const movementResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { product_name: { $not: { $regex: new RegExp("BallPoint", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Rollerball", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Robberball", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Doyle", "i") } } },
                { product_name: { $not: { $regex: new RegExp("fineliner", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { description: { $not: { $regex: new RegExp("Pen", "i") } } },
                // {product_name:{ $not: { $regex : new RegExp('Pen','i') } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
                { description: { $not: { $regex: "jewellery" } } },
                // {description:{ $regex : "watch" } },
                { sub_category: { $ne: "null" } },
                { movement: { $ne: "" } },
                sub_category ? { sub_category } : {},
                { movement: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                movement: "$movement",
              },
              count: { $sum: 1 },
            },
          },
        ])

        const result = {
          strap_material: strapMaterialResult,
          dial_color: dialColorResult,
          diameter: diameterResult,
          water_resistant: waterResistantResult,
          movement: movementResult,
        }
        if (result) {
          return ServiceResponse.success({
            data: {
              data: result,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 201,
        })
      } else {
        const strapMaterialResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { sub_category: { $ne: "null" } },
                { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
                { description: { $not: { $regex: "jewellery" } } },
                // {description:{ $regex : "watch" } },
                { strap_material: { $ne: "" } },
                { strap_material: { $ne: null } },
                sub_category ? { sub_category } : {},
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                strap_material: "$strap_material",
              },
              count: { $sum: 1 },
            },
          },
          // {
          //   $project: {
          //     "strap_material": {
          //       $cond: {
          //         if: {
          //           $or:[
          //             {$eq:["$strap_material", null ]},
          //             {$eq:["$strap_material", "" ]},
          //           ]
          //         },
          //         then: "$$REMOVE",
          //         else: "$count"
          //       }
          //     }
          //   }
          // },
        ])
        const dialColorResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { sub_category: { $ne: "null" } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
                { description: { $not: { $regex: "jewellery" } } },
                // {description:{ $regex : "watch" } },
                { dial_color: { $ne: "" } },
                { dial_color: { $ne: null } },
                category_name ? { category_name } : {},
                sub_category ? { sub_category } : {},
                brand_name ? { brand_name } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                dial_color: "$dial_color",
              },
              count: { $sum: 1 },
            },
          },
        ])
        const diameterResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                // {product_name:{ $not: { $regex : new RegExp('Pen','i') } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
                { description: { $not: { $regex: "jewellery" } } },
                // {description:{ $regex : "watch" } },
                { sub_category: { $ne: "null" } },
                { diameter: { $ne: "" } },
                { diameter: { $ne: null } },
                category_name ? { category_name } : {},
                sub_category ? { sub_category } : {},
                brand_name ? { brand_name } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                diameter: "$diameter",
              },
              count: { $sum: 1 },
            },
          },
        ])
        const waterResistantResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                // {product_name:{ $not: { $regex : new RegExp('Pen','i') } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
                { description: { $not: { $regex: "jewellery" } } },
                // {description:{ $regex : "watch" } },
                { sub_category: { $ne: "null" } },
                { water_resistant: { $ne: "" } },
                { water_resistant: { $ne: null } },
                sub_category ? { sub_category } : {},
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                water_resistant: "$water_resistant",
              },
              count: { $sum: 1 },
            },
          },
        ])
        const movementResult = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                // {product_name:{ $not: { $regex : new RegExp('Pen','i') } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
                { description: { $not: { $regex: "jewellery" } } },
                // {description:{ $regex : "watch" } },
                { sub_category: { $ne: "null" } },
                { movement: { $ne: "" } },
                sub_category ? { sub_category } : {},
                { movement: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                movement: "$movement",
              },
              count: { $sum: 1 },
            },
          },
        ])

        const result = {
          strap_material: strapMaterialResult,
          dial_color: dialColorResult,
          diameter: diameterResult,
          water_resistant: waterResistantResult,
          movement: movementResult,
        }
        if (result) {
          return ServiceResponse.success({
            data: {
              data: result,
            },
            status: 201,
          })
        }
        return ServiceResponse.success({
          data: {
            message: "No data found",
          },
          status: 201,
        })
      }
    } else {
      const strapMaterialResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { strap_material: { $ne: "" } },
              { strap_material: { $ne: null } },
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              { category_name: { $not: { $regex: new RegExp("Jewellery", "i") } } },
              { description: { $regex: "watch" } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              strap_material: "$strap_material",
            },
            count: { $sum: 1 },
          },
        },
        // {
        //   $project: {
        //     "strap_material": {
        //       $cond: {
        //         if: {
        //           $or:[
        //             {$eq:["$strap_material", null ]},
        //             {$eq:["$strap_material", "" ]},
        //           ]
        //         },
        //         then: "$$REMOVE",
        //         else: "$count"
        //       }
        //     }
        //   }
        // },
      ])
      const dialColorResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { dial_color: { $ne: "" } },
              { dial_color: { $ne: null } },
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              { category_name: { $not: { $regex: new RegExp("Jewellery", "i") } } },
              { description: { $regex: "watch" } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              dial_color: "$dial_color",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const diameterResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { diameter: { $ne: "" } },
              { diameter: { $ne: null } },
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              { category_name: { $not: { $regex: new RegExp("Jewellery", "i") } } },
              { description: { $regex: "watch" } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              diameter: "$diameter",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const waterResistantResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { water_resistant: { $ne: "" } },
              { water_resistant: { $ne: null } },
              category_name ? { category_name } : {},
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              { category_name: { $not: { $regex: new RegExp("Jewellery", "i") } } },
              { description: { $regex: "watch" } },
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              water_resistant: "$water_resistant",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const movementResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { movement: { $ne: "" } },
              { movement: { $ne: null } },
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              { category_name: { $not: { $regex: new RegExp("Jewellery", "i") } } },
              { description: { $regex: "watch" } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              movement: "$movement",
            },
            count: { $sum: 1 },
          },
        },
      ])

      const result = {
        strap_material: strapMaterialResult,
        dial_color: dialColorResult,
        diameter: diameterResult,
        water_resistant: waterResistantResult,
        movement: movementResult,
      }
      if (result) {
        return ServiceResponse.success({
          data: {
            data: result,
          },
          status: 201,
        })
      }
      return ServiceResponse.success({
        data: {
          message: "No data found",
        },
        status: 201,
      })
    }
  }

  async countStrapColorBrandFilter(data: any): Promise<ServiceResponse | ServiceFailedResponse> {
    const { brand_name, category_name, sub_category, collection, minPrice, maxPrice, material } =
      data
    const strapColorResult = await SortProductModel.aggregate([
      {
        $match: {
          $and: [
            { dial_color: { $ne: "" } },
            { dial_color: { $ne: null } },
            category_name ? { category_name } : {},
            brand_name ? { brand_name } : {},
            collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
            minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
            maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
          ],
        },
      },
      {
        $group: {
          _id: {
            dial_color: "$dial_color",
          },
          count: { $sum: 1 },
        },
      },
    ])
    const result = {
      strap_color: strapColorResult,
    }
    if (result) {
      return ServiceResponse.success({
        data: {
          data: result,
        },
        status: 201,
      })
    }
    return ServiceResponse.success({
      data: {
        message: "No data found",
      },
      status: 201,
    })
  }

  async countColorBrandFilter(data: any): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    const { brand_name, category_name, sub_category, collection, minPrice, maxPrice, material } =
      data

    if (category_name === "Women's Jewellery") {
      let colour,
        earRingResult,
        ringSizeResult,
        ringMaterialResult,
        ringColorResult,
        ringWeightResult,
        necklacesColorResult
      let braceletsColorResult, pendantMaterialResult, pendantColorResult
      if (material == "Gold" || material == "gold") {
        colour = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { colour: { $ne: "Cream" } },
                { colour: { $ne: "Blue" } },
                { colour: { $ne: "Multi-Coloured" } },
                { colour: { $ne: "Black" } },
                { colour: { $ne: "White" } },
                { colour: { $ne: "Champagne" } },
                { colour: { $ne: "Skeleton" } },
                { colour: { $ne: "Silver" } },
                { colour: { $ne: "Rose Gold" } },
                { colour: { $ne: "Green" } },
                { colour: { $ne: "Mother of Pearl" } },
                { colour: { $ne: "Two Colour" } },
                { colour: { $ne: "blue/pink" } },
                { colour: { $ne: "multi" } },
                { colour: { $ne: "" } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                { description: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                colour: "Gold",
              },
              count: { $sum: 1 },
            },
          },
        ])
      } else if (material == "Silver" || material == "silver") {
        colour = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { sub_category: { $not: { $regex: new RegExp("null", "i") } } },
                { sub_category: { $ne: "null" } },
                { colour: { $ne: "Cream" } },
                { colour: { $ne: "Grey" } },
                { colour: { $ne: "Blue" } },
                { colour: { $ne: "Multi-Coloured" } },
                { colour: { $ne: "Black" } },
                { colour: { $ne: "White" } },
                { colour: { $ne: "Champagne" } },
                { colour: { $ne: "Skeleton" } },
                { colour: { $ne: "Green" } },
                { colour: { $ne: "Mother of Pearl" } },
                { colour: { $ne: "Two Colour" } },
                { colour: { $ne: "blue/pink" } },
                { colour: { $ne: "multi" } },
                { colour: { $ne: "" } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { description: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Rose Gold", "i") } } },
                { description: { $not: { $regex: new RegExp("Rose", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Rose", "i") } } },
                { description: { $not: { $regex: new RegExp("Gold", "i") } } },
                { product_name: { $not: { $regex: new RegExp("Gold", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                { product_name: { $regex: new RegExp("silver", "i") } },
                { description: { $not: { $regex: new RegExp("watch", "i") } } },

                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
                { sub_category: { $not: { $regex: new RegExp("null", "i") } } },
                { sub_category: { $ne: "null" } },
              ],
            },
          },
          {
            $group: {
              _id: {
                colour: "Silver",
              },
              count: { $sum: 1 },
            },
          },
        ])
      } else if (material == "Platinum" || material == "platinum") {
        colour = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { colour: { $ne: "Cream" } },
                { colour: { $ne: "Grey" } },
                { colour: { $ne: "Blue" } },
                { colour: { $ne: "Multi-Coloured" } },
                { colour: { $ne: "Black" } },
                { colour: { $ne: "White" } },
                { colour: { $ne: "Champagne" } },
                { colour: { $ne: "Skeleton" } },
                { colour: { $ne: "Rose Gold" } },
                { colour: { $ne: "Green" } },
                { colour: { $ne: "Mother of Pearl" } },
                { colour: { $ne: "Two Colour" } },
                { colour: { $ne: "blue/pink" } },
                { colour: { $ne: "multi" } },
                { colour: { $ne: "" } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                colour: "Platinum",
              },
              count: { $sum: 1 },
            },
          },
        ])
      } else if (material == "rose gold" || material == "Rose Gold") {
        colour = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { colour: { $ne: "Cream" } },
                { colour: { $ne: "Grey" } },
                { colour: { $ne: "Blue" } },
                { colour: { $ne: "Multi-Coloured" } },
                { colour: { $ne: "Black" } },
                { colour: { $ne: "White" } },
                { colour: { $ne: "Champagne" } },
                { colour: { $ne: "Skeleton" } },
                { colour: { $ne: "Green" } },
                { colour: { $ne: "Mother of Pearl" } },
                { colour: { $ne: "Two Colour" } },
                { colour: { $ne: "blue/pink" } },
                { colour: { $ne: "multi" } },
                { colour: { $ne: "" } },
                { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
                { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                // material ? {colour:{   $regex : new RegExp("Rose Gold",'i')  } } :{},
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                colour: "Rose Gold",
              },
              count: { $sum: 1 },
            },
          },
        ])
      } else if (sub_category == "earrings") {
        colour = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { earring_color: { $ne: "" } },
                { earring_color: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                colour: "$earring_color",
              },
              count: { $sum: 1 },
            },
          },
        ])
      } else if (sub_category == "necklaces") {
        colour = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { necklaces_color: { $ne: "" } },
                { necklaces_color: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                colour: "$necklaces_color",
              },
              count: { $sum: 1 },
            },
          },
        ])
      } else if (sub_category == "rings") {
        colour = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { ring_color: { $ne: "" } },
                { ring_color: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                sub_category ? { sub_category: { $regex: new RegExp("ring", "i") } } : {},
                { sub_category: { $not: { $regex: new RegExp("Earrings", "i") } } },
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                colour: "$ring_color",
              },
              count: { $sum: 1 },
            },
          },
        ])
      } else if (sub_category == "bracelets") {
        colour = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                { bracelets_color: { $ne: "" } },
                { bracelets_color: { $ne: null } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                colour: "$bracelets_color",
              },
              count: { $sum: 1 },
            },
          },
        ])
      } else {
        colour = await SortProductModel.aggregate([
          {
            $match: {
              $and: [
                // {earring_color:{$ne: ""}},
                // {earring_color:{$ne: null}},
                { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
                category_name ? { category_name } : {},
                brand_name ? { brand_name } : {},
                sub_category ? { sub_category: { $regex: new RegExp(sub_category, "i") } } : {},
                { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
                { description: { $not: { $regex: new RegExp("watch", "i") } } },
                material ? { product_name: { $regex: new RegExp(material, "i") } } : {},
                collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
                minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
                maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
              ],
            },
          },
          {
            $group: {
              _id: {
                colour: "$colour",
              },
              count: { $sum: 1 },
            },
          },
        ])
      }

      const result = {
        colour: {
          colour: colour,
        },
      }
      return ServiceResponse.success({
        data: {
          data: result,
        },
        status: 201,
      })
    } else if (category_name === "Accessories") {
      const strapMaterialResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              // {product_name:{ $not: { $regex : new RegExp('Pen','i') } } },
              // {product_name:{ $not: { $regex : new RegExp('card holder','i') } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              // {description:{ $regex : "watch" } },
              { strap_material: { $ne: "" } },
              { strap_material: { $ne: null } },
              sub_category ? { sub_category } : {},
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              strap_material: "$strap_material",
            },
            count: { $sum: 1 },
          },
        },
        // {
        //   $project: {
        //     "strap_material": {
        //       $cond: {
        //         if: {
        //           $or:[
        //             {$eq:["$strap_material", null ]},
        //             {$eq:["$strap_material", "" ]},
        //           ]
        //         },
        //         then: "$$REMOVE",
        //         else: "$count"
        //       }
        //     }
        //   }
        // },
      ])
      const dialColorResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $regex: "watch" } },
              { dial_color: { $ne: "" } },
              { dial_color: { $ne: null } },
              category_name ? { category_name } : {},
              sub_category ? { sub_category } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              dial_color: "$dial_color",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const diameterResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $regex: "watch" } },
              { diameter: { $ne: "" } },
              { diameter: { $ne: null } },
              category_name ? { category_name } : {},
              sub_category ? { sub_category } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              diameter: "$diameter",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const waterResistantResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $regex: "watch" } },
              { water_resistant: { $ne: "" } },
              { water_resistant: { $ne: null } },
              sub_category ? { sub_category } : {},
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              water_resistant: "$water_resistant",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const movementResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $regex: "watch" } },
              { movement: { $ne: "" } },
              sub_category ? { sub_category } : {},
              { movement: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              movement: "$movement",
            },
            count: { $sum: 1 },
          },
        },
      ])

      const result = {
        strap_material: strapMaterialResult,
        dial_color: dialColorResult,
        diameter: diameterResult,
        water_resistant: waterResistantResult,
        movement: movementResult,
      }
      if (result) {
        return ServiceResponse.success({
          data: {
            data: result,
          },
          status: 201,
        })
      }
      return ServiceResponse.success({
        data: {
          message: "No data found",
        },
        status: 201,
      })
    } else {
      const strapMaterialResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { strap_material: { $ne: "" } },
              { strap_material: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              strap_material: "$strap_material",
            },
            count: { $sum: 1 },
          },
        },
        // {
        //   $project: {
        //     "strap_material": {
        //       $cond: {
        //         if: {
        //           $or:[
        //             {$eq:["$strap_material", null ]},
        //             {$eq:["$strap_material", "" ]},
        //           ]
        //         },
        //         then: "$$REMOVE",
        //         else: "$count"
        //       }
        //     }
        //   }
        // },
      ])
      const dialColorResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { dial_color: { $ne: "" } },
              { dial_color: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              dial_color: "$dial_color",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const diameterResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { diameter: { $ne: "" } },
              { diameter: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              diameter: "$diameter",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const waterResistantResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { water_resistant: { $ne: "" } },
              { water_resistant: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              water_resistant: "$water_resistant",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const movementResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { movement: { $ne: "" } },
              { movement: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              movement: "$movement",
            },
            count: { $sum: 1 },
          },
        },
      ])

      const result = {
        strap_material: strapMaterialResult,
        dial_color: dialColorResult,
        diameter: diameterResult,
        water_resistant: waterResistantResult,
        movement: movementResult,
      }
      if (result) {
        return ServiceResponse.success({
          data: {
            data: result,
          },
          status: 201,
        })
      }
      return ServiceResponse.success({
        data: {
          message: "No data found",
        },
        status: 201,
      })
    }
  }

  async preOwnedcountBrandFilter(
    data: any
  ): Promise<ServiceSuccessResponse | ServiceFailedResponse> {
    const { brand_name, category_name, collection, minPrice, maxPrice } = data
    if (category_name === "Men's Watches") {
      const strapMaterialResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { strap_material: { $ne: "" } },
              { strap_material: { $ne: null } },
              category_name ? { category_name } : {},
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              { product_name: { $not: { $regex: "ladies" } } },
              { product_name: { $not: { $regex: "Ladies" } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $not: { $regex: "ladies" } } },
              { description: { $not: { $regex: "Ladies" } } },
              { description: { $not: { $regex: new RegExp("Watch Band", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Watch Band", "i") } } },
              { description: { $regex: "watch" } },
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              strap_material: "$strap_material",
            },
            count: { $sum: 1 },
          },
        },
        // {
        //   $project: {
        //     "strap_material": {
        //       $cond: {
        //         if: {
        //           $or:[
        //             {$eq:["$strap_material", null ]},
        //             {$eq:["$strap_material", "" ]},
        //           ]
        //         },
        //         then: "$$REMOVE",
        //         else: "$count"
        //       }
        //     }
        //   }
        // },
      ])
      const dialColorResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { dial_color: { $ne: "" } },
              { dial_color: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { product_name: { $not: { $regex: "ladies" } } },
              { product_name: { $not: { $regex: "Ladies" } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $not: { $regex: "ladies" } } },
              { description: { $not: { $regex: "Ladies" } } },
              { description: { $regex: "watch" } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              dial_color: "$dial_color",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const diameterResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { diameter: { $ne: "" } },
              { diameter: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { product_name: { $not: { $regex: "ladies" } } },
              { product_name: { $not: { $regex: "Ladies" } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $not: { $regex: "ladies" } } },
              { description: { $not: { $regex: "Ladies" } } },
              { description: { $regex: "watch" } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              diameter: "$diameter",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const waterResistantResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { water_resistant: { $ne: "" } },
              { water_resistant: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              { product_name: { $not: { $regex: "ladies" } } },
              { product_name: { $not: { $regex: "Ladies" } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $not: { $regex: "ladies" } } },
              { description: { $not: { $regex: "Ladies" } } },
              { description: { $regex: "watch" } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              water_resistant: "$water_resistant",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const movementResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { aw_thumb_url: { $not: { $regex: new RegExp(".gif", "i") } } },
              { movement: { $ne: "" } },
              { movement: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              { product_name: { $not: { $regex: "ladies" } } },
              { product_name: { $not: { $regex: "Ladies" } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $not: { $regex: "ladies" } } },
              { description: { $not: { $regex: "Ladies" } } },
              { description: { $regex: "watch" } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              movement: "$movement",
            },
            count: { $sum: 1 },
          },
        },
      ])

      const result = {
        strap_material: strapMaterialResult,
        dial_color: dialColorResult,
        diameter: diameterResult,
        water_resistant: waterResistantResult,
        movement: movementResult,
      }
      return ServiceResponse.success({
        data: {
          data: result,
        },
        status: 201,
      })
    }
    if (category_name === "Women's Watches") {
      const strapMaterialResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { strap_material: { $ne: "" } },
              { strap_material: { $ne: null } },
              category_name ? { category_name } : {},
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              { product_name: { $not: { $regex: "Mens" } } },
              { product_name: { $not: { $regex: "Men" } } },
              { product_name: { $not: { $regex: "mens" } } },
              { product_name: { $not: { $regex: "men" } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $regex: "watch" } },
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              strap_material: "$strap_material",
            },
            count: { $sum: 1 },
          },
        },
        // {
        //   $project: {
        //     "strap_material": {
        //       $cond: {
        //         if: {
        //           $or:[
        //             {$eq:["$strap_material", null ]},
        //             {$eq:["$strap_material", "" ]},
        //           ]
        //         },
        //         then: "$$REMOVE",
        //         else: "$count"
        //       }
        //     }
        //   }
        // },
      ])
      const dialColorResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { dial_color: { $ne: "" } },
              { dial_color: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { product_name: { $not: { $regex: "Mens" } } },
              { product_name: { $not: { $regex: "Men" } } },
              { product_name: { $not: { $regex: "mens" } } },
              { product_name: { $not: { $regex: "men" } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $regex: "watch" } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              dial_color: "$dial_color",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const diameterResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { diameter: { $ne: "" } },
              { diameter: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              { product_name: { $not: { $regex: "Mens" } } },
              { product_name: { $not: { $regex: "Men" } } },
              { product_name: { $not: { $regex: "mens" } } },
              { product_name: { $not: { $regex: "men" } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $regex: "watch" } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              diameter: "$diameter",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const waterResistantResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { water_resistant: { $ne: "" } },
              { water_resistant: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { product_name: { $not: { $regex: "Mens" } } },
              { product_name: { $not: { $regex: "Men" } } },
              { product_name: { $not: { $regex: "mens" } } },
              { product_name: { $not: { $regex: "men" } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $regex: "watch" } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              water_resistant: "$water_resistant",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const movementResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { movement: { $ne: "" } },
              { movement: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { product_name: { $not: { $regex: "Mens" } } },
              { product_name: { $not: { $regex: "Men" } } },
              { product_name: { $not: { $regex: "mens" } } },
              { product_name: { $not: { $regex: "men" } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $regex: "watch" } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              movement: "$movement",
            },
            count: { $sum: 1 },
          },
        },
      ])

      const result = {
        strap_material: strapMaterialResult,
        dial_color: dialColorResult,
        diameter: diameterResult,
        water_resistant: waterResistantResult,
        movement: movementResult,
      }
      return ServiceResponse.success({
        data: {
          data: result,
        },
        status: 201,
      })
    } else if (category_name === "Women's Jewellery") {
      const earRingResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { earring_color: { $ne: "" } },
              { earring_color: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              { description: { $not: { $regex: new RegExp("watch", "i") } } },
              { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              earring_color: "$earring_color",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const ringSizeResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { ring_size: { $ne: "" } },
              { ring_size: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              { description: { $not: { $regex: new RegExp("watch", "i") } } },
              { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              ring_size: "$ring_size",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const ringMaterialResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { ring_material: { $ne: "" } },
              { ring_material: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              { description: { $not: { $regex: new RegExp("watch", "i") } } },
              { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              ring_material: "$ring_material",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const ringColorResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { ring_color: { $ne: "" } },
              { ring_color: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              { description: { $not: { $regex: new RegExp("watch", "i") } } },
              { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              ring_color: "$ring_color",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const ringWeightResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { ring_weight: { $ne: "" } },
              { ring_weight: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              { description: { $not: { $regex: new RegExp("watch", "i") } } },
              { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              ring_weight: "$ring_weight",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const necklacesColorResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { necklaces_color: { $ne: "" } },
              { necklaces_color: { $ne: null } },
              { description: { $not: { $regex: new RegExp("watch", "i") } } },
              { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              necklaces_color: "$necklaces_color",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const braceletsColorResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { bracelets_color: { $ne: "" } },
              { bracelets_color: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              { description: { $not: { $regex: new RegExp("watch", "i") } } },
              { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              bracelets_color: "$bracelets_color",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const pendantMaterialResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { pendant_material: { $ne: "" } },
              { pendant_material: { $ne: null } },
              { description: { $not: { $regex: new RegExp("watch", "i") } } },
              { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              pendant_material: "$pendant_material",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const pendantColorResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { pendant_color: { $ne: "" } },
              { pendant_color: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              { description: { $not: { $regex: new RegExp("watch", "i") } } },
              { product_name: { $not: { $regex: new RegExp("watch", "i") } } },
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              pendant_color: "$pendant_color",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const result = {
        earRings: earRingResult,
        ring: {
          size: ringSizeResult,
          material: ringMaterialResult,
          color: ringColorResult,
          weight: ringWeightResult,
        },
        necklaces: necklacesColorResult,
        bracelets: braceletsColorResult,
        pendant: {
          material: pendantMaterialResult,
          color: pendantColorResult,
        },
      }
      return ServiceResponse.success({
        data: {
          data: result,
        },
        status: 201,
      })
    } else if (category_name === "Accessories") {
      const strapMaterialResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $regex: "watch" } },
              { strap_material: { $ne: "" } },
              { strap_material: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              strap_material: "$strap_material",
            },
            count: { $sum: 1 },
          },
        },
        // {
        //   $project: {
        //     "strap_material": {
        //       $cond: {
        //         if: {
        //           $or:[
        //             {$eq:["$strap_material", null ]},
        //             {$eq:["$strap_material", "" ]},
        //           ]
        //         },
        //         then: "$$REMOVE",
        //         else: "$count"
        //       }
        //     }
        //   }
        // },
      ])
      const dialColorResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $regex: "watch" } },
              { dial_color: { $ne: "" } },
              { dial_color: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              dial_color: "$dial_color",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const diameterResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $regex: "watch" } },
              { diameter: { $ne: "" } },
              { diameter: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              diameter: "$diameter",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const waterResistantResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $regex: "watch" } },
              { water_resistant: { $ne: "" } },
              { water_resistant: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              water_resistant: "$water_resistant",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const movementResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { product_name: { $not: { $regex: new RegExp("Pen", "i") } } },
              { product_name: { $not: { $regex: new RegExp("card holder", "i") } } },
              { description: { $not: { $regex: new RegExp("jewelry", "i") } } },
              { description: { $not: { $regex: "jewellery" } } },
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              { description: { $regex: "watch" } },
              { movement: { $ne: "" } },
              { movement: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              movement: "$movement",
            },
            count: { $sum: 1 },
          },
        },
      ])

      const result = {
        strap_material: strapMaterialResult,
        dial_color: dialColorResult,
        diameter: diameterResult,
        water_resistant: waterResistantResult,
        movement: movementResult,
      }
      if (result) {
        return ServiceResponse.success({
          data: {
            data: result,
          },
          status: 201,
        })
      }
      return ServiceResponse.success({
        data: {
          message: "No data found",
        },
        status: 201,
      })
    } else {
      const strapMaterialResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { strap_material: { $ne: "" } },
              { strap_material: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              { description: { $regex: new RegExp("Pre-Owned", "i") } },
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              strap_material: "$strap_material",
            },
            count: { $sum: 1 },
          },
        },
        // {
        //   $project: {
        //     "strap_material": {
        //       $cond: {
        //         if: {
        //           $or:[
        //             {$eq:["$strap_material", null ]},
        //             {$eq:["$strap_material", "" ]},
        //           ]
        //         },
        //         then: "$$REMOVE",
        //         else: "$count"
        //       }
        //     }
        //   }
        // },
      ])
      const dialColorResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { dial_color: { $ne: "" } },
              { dial_color: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              dial_color: "$dial_color",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const diameterResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { diameter: { $ne: "" } },
              { diameter: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              diameter: "$diameter",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const waterResistantResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { water_resistant: { $ne: "" } },
              { water_resistant: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              water_resistant: "$water_resistant",
            },
            count: { $sum: 1 },
          },
        },
      ])
      const movementResult = await SortProductModel.aggregate([
        {
          $match: {
            $and: [
              { movement: { $ne: "" } },
              { movement: { $ne: null } },
              category_name ? { category_name } : {},
              brand_name ? { brand_name } : {},
              collection ? { product_name: { $regex: new RegExp(collection, "i") } } : {},
              minPrice ? { search_price: { $gte: parseInt(minPrice) } } : {},
              maxPrice ? { search_price: { $lte: parseInt(maxPrice) } } : {},
            ],
          },
        },
        {
          $group: {
            _id: {
              movement: "$movement",
            },
            count: { $sum: 1 },
          },
        },
      ])

      const result = {
        strap_material: strapMaterialResult,
        dial_color: dialColorResult,
        diameter: diameterResult,
        water_resistant: waterResistantResult,
        movement: movementResult,
      }
      if (result) {
        return ServiceResponse.success({
          data: {
            data: result,
          },
          status: 201,
        })
      }
      return ServiceResponse.success({
        data: {
          message: "No data found",
        },
        status: 201,
      })
    }
  }
}
