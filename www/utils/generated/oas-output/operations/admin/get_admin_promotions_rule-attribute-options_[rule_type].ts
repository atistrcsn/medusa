/**
 * @oas [get] /admin/promotions/rule-attribute-options/{rule_type}
 * operationId: GetPromotionsRuleAttributeOptionsRule_type
 * summary: List Rule Attribute Options
 * description: Retrieve a list of rule attribute options in a promotion. The rule attribute options can be filtered by fields like FILTER FIELDS. The rule attribute options can also be paginated.
 * x-authenticated: true
 * parameters:
 *   - name: rule_type
 *     in: path
 *     description: The promotion's rule type.
 *     required: true
 *     schema:
 *       type: string
 *   - name: promotion_type
 *     in: query
 *     description: The promotion's promotion type.
 *     required: false
 *     schema:
 *       type: string
 *       title: promotion_type
 *       description: The promotion's promotion type.
 *   - name: application_method_type
 *     in: query
 *     description: The promotion's application method type.
 *     required: false
 *     schema:
 *       type: string
 *       title: application_method_type
 *       description: The promotion's application method type.
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: |-
 *       curl '{backend_url}/admin/promotions/rule-attribute-options/{rule_type}' \
 *       -H 'x-medusa-access-token: {api_token}'
 * tags:
 *   - Promotions
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           description: SUMMARY
 *           required:
 *             - attributes
 *           properties:
 *             attributes:
 *               type: array
 *               description: The promotion's attributes.
 *               items:
 *                 $ref: "#/components/schemas/AdminRuleAttributeOption"
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

