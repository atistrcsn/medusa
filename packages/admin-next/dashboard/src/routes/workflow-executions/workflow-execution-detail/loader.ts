import { LoaderFunctionArgs } from "react-router-dom"

import { workflowExecutionsQueryKeys } from "../../../hooks/api/workflow-executions"
import { sdk } from "../../../lib/client"
import { queryClient } from "../../../lib/query-client"
import { WorkflowExecutionRes } from "../../../types/api-responses"

const executionDetailQuery = (id: string) => ({
  queryKey: workflowExecutionsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.workflowExecution.retrieve(id),
})

export const executionLoader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id
  const query = executionDetailQuery(id!)

  return (
    queryClient.getQueryData<WorkflowExecutionRes>(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  )
}
