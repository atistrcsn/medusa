/**
 * @oas [get] /admin/payments
 * operationId: GetPayments
 * summary: List Payments
 * description: Retrieve a list of payments. The payments can be filtered by fields such as `id`. The payments can also be sorted or paginated.
 * x-authenticated: true
 * parameters:
 *   - name: expand
 *     in: query
 *     description: Comma-separated relations that should be expanded in the returned data.
 *     required: false
 *     schema:
 *       type: string
 *       title: expand
 *       description: Comma-separated relations that should be expanded in the returned data.
 *   - name: fields
 *     in: query
 *     description: Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default
 *       fields. without prefix it will replace the entire default fields.
 *     required: false
 *     schema:
 *       type: string
 *       title: fields
 *       description: Comma-separated fields that should be included in the returned data. if a field is prefixed with `+` it will be added to the default fields, using `-` will remove it from the default
 *         fields. without prefix it will replace the entire default fields.
 *   - name: offset
 *     in: query
 *     description: The number of items to skip when retrieving a list.
 *     required: false
 *     schema:
 *       type: number
 *       title: offset
 *       description: The number of items to skip when retrieving a list.
 *   - name: limit
 *     in: query
 *     description: Limit the number of items returned in the list.
 *     required: false
 *     schema:
 *       type: number
 *       title: limit
 *       description: Limit the number of items returned in the list.
 *   - name: order
 *     in: query
 *     description: The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
 *     required: false
 *     schema:
 *       type: string
 *       title: order
 *       description: The field to sort the data by. By default, the sort order is ascending. To change the order to descending, prefix the field name with `-`.
 *   - name: q
 *     in: query
 *     description: The payment's q.
 *     required: false
 *     schema:
 *       type: string
 *       title: q
 *       description: The payment's q.
 *   - name: id
 *     in: query
 *     required: false
 *     schema:
 *       oneOf:
 *         - type: string
 *           title: id
 *           description: The payment's ID.
 *         - type: array
 *           description: The payment's ID.
 *           items:
 *             type: string
 *             title: id
 *             description: The id's ID.
 *   - name: payment_session_id
 *     in: query
 *     required: false
 *     schema:
 *       oneOf:
 *         - type: string
 *           title: payment_session_id
 *           description: The payment's payment session id.
 *         - type: array
 *           description: The payment's payment session id.
 *           items:
 *             type: string
 *             title: payment_session_id
 *             description: The payment session id's details.
 *   - name: created_at
 *     in: query
 *     description: The payment's created at.
 *     required: false
 *     schema: {}
 *   - name: updated_at
 *     in: query
 *     description: The payment's updated at.
 *     required: false
 *     schema: {}
 *   - name: deleted_at
 *     in: query
 *     description: The payment's deleted at.
 *     required: false
 *     schema: {}
 *   - name: $and
 *     in: query
 *     required: false
 *     schema:
 *       type: array
 *       description: The payment's $and.
 *       items:
 *         type: object
 *       title: $and
 *   - name: $or
 *     in: query
 *     required: false
 *     schema:
 *       type: array
 *       description: The payment's $or.
 *       items:
 *         type: object
 *       title: $or
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: |-
 *       curl '{backend_url}/admin/payments' \
 *       -H 'x-medusa-access-token: {api_token}'
 * tags:
 *   - Payments
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           allOf:
 *             - type: object
 *               description: SUMMARY
 *               required:
 *                 - limit
 *                 - offset
 *                 - count
 *               properties:
 *                 limit:
 *                   type: number
 *                   title: limit
 *                   description: The payment's limit.
 *                 offset:
 *                   type: number
 *                   title: offset
 *                   description: The payment's offset.
 *                 count:
 *                   type: number
 *                   title: count
 *                   description: The payment's count.
 *             - type: object
 *               description: SUMMARY
 *               required:
 *                 - payments
 *               properties:
 *                 payments:
 *                   type: array
 *                   description: The payment's payments.
 *                   items:
 *                     $ref: "#/components/schemas/AdminPayment"
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
 * 
*/

