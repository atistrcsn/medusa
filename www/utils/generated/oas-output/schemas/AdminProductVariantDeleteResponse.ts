/**
 * @schema AdminProductVariantDeleteResponse
 * type: object
 * description: SUMMARY
 * x-schemaName: AdminProductVariantDeleteResponse
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The product's ID.
 *   object:
 *     type: string
 *     title: object
 *     description: The name of the deleted object.
 *     default: variant
 *   deleted:
 *     type: boolean
 *     title: deleted
 *     description: Whether the Product was deleted.
 *   parent:
 *     $ref: "#/components/schemas/AdminProduct"
 * 
*/

