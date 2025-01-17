/**
 * @schema AdminPricePreferenceDeleteResponse
 * type: object
 * description: SUMMARY
 * x-schemaName: AdminPricePreferenceDeleteResponse
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The price preference's ID.
 *   object:
 *     type: string
 *     title: object
 *     description: The name of the deleted object.
 *     default: price_preference
 *   deleted:
 *     type: boolean
 *     title: deleted
 *     description: Whether the Price Preference was deleted.
 *   parent:
 *     type: object
 *     description: The price preference's parent.
 * 
*/

