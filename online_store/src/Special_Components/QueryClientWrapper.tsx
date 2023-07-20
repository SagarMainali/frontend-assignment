import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ChildrenType } from '../types/type'

const queryClient = new QueryClient()

export const QueryClientWrapper = ({ children }: ChildrenType) => {
     return (
          <QueryClientProvider client={queryClient}>
               {children}
          </QueryClientProvider>
     )
}