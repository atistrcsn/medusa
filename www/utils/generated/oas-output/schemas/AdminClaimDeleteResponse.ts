/**
 * @schema AdminClaimDeleteResponse
 * type: object
 * description: SUMMARY
 * x-schemaName: AdminClaimDeleteResponse
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The claim's ID.
 *   object:
 *     type: string
 *     title: object
 *     description: The name of the deleted object.
 *     default: claim
 *   deleted:
 *     type: boolean
 *     title: deleted
 *     description: Whether the Claim was deleted.
 *   parent:
 *     type: object
 *     description: The claim's parent.
 * 
*/

