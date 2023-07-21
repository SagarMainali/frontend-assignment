import { useGlobalContext } from '../StateManagement/context'
import { useEffect, useState } from 'react'
import { useApiWithReactQuery } from '../Utils/useApiWithReactQuery'

export function CartPage() {

     const { productsInCart } = useGlobalContext()

     return (
          <div>
               {
                    productsInCart.map(product => {
                         return <h2>{product.title}</h2>
                    })
               }
          </div>
     )
}
