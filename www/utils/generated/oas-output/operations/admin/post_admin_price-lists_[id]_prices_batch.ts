/**
 * @oas [post] /admin/price-lists/{id}/prices/batch
 * operationId: PostPriceListsIdPricesBatch
 * summary: Add Prices to Price List
 * description: Add a list of prices to a price list.
 * x-authenticated: true
 * parameters:
 *   - name: id
 *     in: path
 *     description: The price list's ID.
 *     required: true
 *     schema:
 *       type: string
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         type: object
 *         description: SUMMARY
 *         properties:
 *           create:
 *             type: array
 *             description: The price list's create.
 *             items:
 *               type: object
 *               description: The create's details.
 *               required:
 *                 - currency_code
 *                 - amount
 *                 - variant_id
 *                 - min_quantity
 *                 - max_quantity
 *               properties:
 *                 currency_code:
 *                   type: string
 *                   title: currency_code
 *                   description: The create's currency code.
 *                 amount:
 *                   type: number
 *                   title: amount
 *                   description: The create's amount.
 *                 variant_id:
 *                   type: string
 *                   title: variant_id
 *                   description: The create's variant id.
 *                 min_quantity:
 *                   type: number
 *                   title: min_quantity
 *                   description: The create's min quantity.
 *                 max_quantity:
 *                   type: number
 *                   title: max_quantity
 *                   description: The create's max quantity.
 *                 rules:
 *                   type: object
 *                   description: The create's rules.
 *           update:
 *             type: array
 *             description: The price list's update.
 *             items:
 *               type: object
 *               description: The update's details.
 *               required:
 *                 - id
 *                 - variant_id
 *                 - min_quantity
 *                 - max_quantity
 *               properties:
 *                 id:
 *                   type: string
 *                   title: id
 *                   description: The update's ID.
 *                 currency_code:
 *                   type: string
 *                   title: currency_code
 *                   description: The update's currency code.
 *                 amount:
 *                   type: number
 *                   title: amount
 *                   description: The update's amount.
 *                 variant_id:
 *                   type: string
 *                   title: variant_id
 *                   description: The update's variant id.
 *                 min_quantity:
 *                   type: number
 *                   title: min_quantity
 *                   description: The update's min quantity.
 *                 max_quantity:
 *                   type: number
 *                   title: max_quantity
 *                   description: The update's max quantity.
 *                 rules:
 *                   type: object
 *                   description: The update's rules.
 *           delete:
 *             type: array
 *             description: The price list's delete.
 *             items:
 *               type: string
 *               title: delete
 *               description: The delete's details.
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: |-
 *       curl -X POST '{backend_url}/admin/price-lists/{id}/prices/batch' \
 *       -H 'x-medusa-access-token: {api_token}'
 * tags:
 *   - Price Lists
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminPriceListBatchResponse"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 * x-workflow: batchPriceListPricesWorkflow
 * 
*/

