/**
 * @schema AdminProductVariant
 * type: object
 * description: The product's parent.
 * x-schemaName: AdminProductVariant
 * required:
 *   - prices
 *   - id
 *   - title
 *   - sku
 *   - barcode
 *   - ean
 *   - upc
 *   - allow_backorder
 *   - manage_inventory
 *   - hs_code
 *   - origin_country
 *   - mid_code
 *   - material
 *   - weight
 *   - length
 *   - height
 *   - width
 *   - options
 *   - created_at
 *   - updated_at
 *   - deleted_at
 * properties:
 *   prices:
 *     type: array
 *     description: The parent's prices.
 *     items:
 *       $ref: "#/components/schemas/AdminPrice"
 *   id:
 *     type: string
 *     title: id
 *     description: The parent's ID.
 *   title:
 *     type: string
 *     title: title
 *     description: The parent's title.
 *   sku:
 *     type: string
 *     title: sku
 *     description: The parent's sku.
 *   barcode:
 *     type: string
 *     title: barcode
 *     description: The parent's barcode.
 *   ean:
 *     type: string
 *     title: ean
 *     description: The parent's ean.
 *   upc:
 *     type: string
 *     title: upc
 *     description: The parent's upc.
 *   allow_backorder:
 *     type: boolean
 *     title: allow_backorder
 *     description: The parent's allow backorder.
 *   manage_inventory:
 *     type: boolean
 *     title: manage_inventory
 *     description: The parent's manage inventory.
 *   hs_code:
 *     type: string
 *     title: hs_code
 *     description: The parent's hs code.
 *   origin_country:
 *     type: string
 *     title: origin_country
 *     description: The parent's origin country.
 *   mid_code:
 *     type: string
 *     title: mid_code
 *     description: The parent's mid code.
 *   material:
 *     type: string
 *     title: material
 *     description: The parent's material.
 *   weight:
 *     type: number
 *     title: weight
 *     description: The parent's weight.
 *   length:
 *     type: number
 *     title: length
 *     description: The parent's length.
 *   height:
 *     type: number
 *     title: height
 *     description: The parent's height.
 *   width:
 *     type: number
 *     title: width
 *     description: The parent's width.
 *   variant_rank:
 *     type: number
 *     title: variant_rank
 *     description: The parent's variant rank.
 *   options:
 *     type: array
 *     description: The parent's options.
 *     items:
 *       $ref: "#/components/schemas/BaseProductOptionValue"
 *   product:
 *     $ref: "#/components/schemas/BaseProduct"
 *   product_id:
 *     type: string
 *     title: product_id
 *     description: The parent's product id.
 *   calculated_price:
 *     $ref: "#/components/schemas/BaseCalculatedPriceSet"
 *   created_at:
 *     type: string
 *     format: date-time
 *     title: created_at
 *     description: The parent's created at.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     title: updated_at
 *     description: The parent's updated at.
 *   deleted_at:
 *     type: string
 *     format: date-time
 *     title: deleted_at
 *     description: The parent's deleted at.
 *   metadata:
 *     type: object
 *     description: The parent's metadata.
 * 
*/

