import ProductList from "../Components/ProductList"
import { ErrorHandler } from "../StateHandelers/ErrorHandler"
import { LoadingHandler } from "../StateHandelers/LoadingHandler"
import { useGlobalContext } from "../StateManagement/context"

export function Home() {

     const { isLoading, error } = useGlobalContext()

     return (
          <div>
               {
                    isLoading
                         ? <LoadingHandler />
                         : error
                              ? <ErrorHandler errorMessage={(error as Error).message} />
                              : <ProductList />
               }
          </div>
     )
}
