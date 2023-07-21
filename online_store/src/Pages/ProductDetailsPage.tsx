import { useParams } from "react-router-dom"
import { useApiWithReactQuery } from "../Utils/useApiWithReactQuery"
import { LoadingHandler } from "../StateHandelers/LoadingHandler"
import { ErrorHandler } from "../StateHandelers/ErrorHandler"


export function ProductDetailsPage() {

     const { id } = useParams()

     const { data, isLoading, error } = useApiWithReactQuery(id)

     return (
          <div>
               {
                    isLoading
                         ? <LoadingHandler />
                         : error
                              ? <ErrorHandler errorMessage={(error as Error).message} />
                              : <div>{data.title}</div>
               }
          </div>
     )
}
