import { useGlobalContext } from "../StateManagement/context"
import { ProductType } from "../Types/type"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from 'react'

export function SimilarProducts({ category, id }: { category: string, id: number }) {

     const { data, isLoading } = useGlobalContext()

     const [similarProducts, setSimilarProducts] = useState<ProductType[] | undefined>([])

     useEffect(() => {
          const storeSimilarProducts = data?.filter(
               (product: ProductType) => {
                    return product.category === category && product.id !== id
               }
          )
          setSimilarProducts(storeSimilarProducts)
     }, [isLoading])

     return (
          similarProducts?.map(
               (similarProduct: ProductType) => {
                    return (
                         <NavLink key={similarProduct.id} to={`/products/${similarProduct.id}`} className="flex flex-col gap-2 items-center text-sm p-3 border-2 border-slate-200 hover:bg-slate-50 group duration-300">
                              <img src={similarProduct.image} alt="product-img" className="h-[7rem] object-cover group-hover:scale-[.90] duration-300" />
                              <h2 className="group-hover:underline duration-300">{similarProduct.title}</h2>
                         </NavLink>
                    )
               }
          )
     )
}
