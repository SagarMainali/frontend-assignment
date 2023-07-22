import { NavLink, useParams } from "react-router-dom"
import { useGlobalContext } from "../StateManagement/context"
import { ProductType } from "../Types/type"
import { useState, useEffect } from 'react'
import { LoadingHandler } from "../StateHandelers/LoadingHandler"

export function SearchResultPage() {

     const { searchQuery } = useParams()

     const { data, isLoading } = useGlobalContext()

     const [searchMatchedProducts, setSearchMatchedProducts] = useState<ProductType[] | undefined>([])

     useEffect(() => {
          const storeSearchMatchedProducts = data?.filter(
               (product: ProductType) => {
                    return product.title.toLowerCase().includes(searchQuery ?? '')
               }
          )
          setSearchMatchedProducts(storeSearchMatchedProducts)
     }, [isLoading, searchQuery])

     return (
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
               {
                    isLoading
                         ? <LoadingHandler />
                         : searchMatchedProducts
                              ? searchMatchedProducts.map(
                                   (searchMatchedProduct: ProductType) => {
                                        return (
                                             <NavLink key={searchMatchedProduct.id} to={`/products/${searchMatchedProduct.id}`} className="flex flex-col gap-2 items-center text-sm p-3 border-2 border-slate-200 hover:bg-slate-50 group duration-300">
                                                  <img src={searchMatchedProduct.image} alt="product-img" className="h-[7rem] object-cover group-hover:scale-[.90] duration-300" />
                                                  <h2 className="group-hover:underline duration-300">{searchMatchedProduct.title}</h2>
                                             </NavLink>
                                        )
                                   }
                              )
                              : <h2> We are really sorry to inform you that the product you are searching is not available at our store.🙏🏼😔</h2 >
               }
          </div >
     )
}
