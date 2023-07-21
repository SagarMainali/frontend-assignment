import Product from "../Components/Product"
import { ErrorHandler } from "../StateHandelers/ErrorHandler"
import { LoadingHandler } from "../StateHandelers/LoadingHandler"
import { useGlobalContext } from "../StateManagement/context"
import { ProductType } from "../Types/type"

export function Home() {

     const { data, isLoading, error } = useGlobalContext()

     return (
          <div>
               {
                    isLoading
                         ? <LoadingHandler />
                         : error
                              ? <ErrorHandler errorMessage={(error as Error).message} />
                              : <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                                   {
                                        data?.map((product: ProductType) => {
                                             return (
                                                  <Product key={product.id} {...product} />
                                             )
                                        })
                                   }
                              </div>
               }
          </div>
     )
}
