import { useGlobalContext } from '../StateManagement/context'
import ProductInCart from '../Components/ProductInCart'
import { ProductType } from '../Types/type'

export function CartPage() {

     const { productsInCart } = useGlobalContext()

     return (
          <div className='flex flex-col gap-4'>
               {
                    productsInCart.length
                         ? productsInCart.map((productInCart: ProductType) => {
                              return <ProductInCart {...productInCart} />
                         })
                         : <h2>You have not added any products to cart yet. 🛒</h2>
               }
               <hr className="border-2 border-gray-300" />

          </div>
     )
}
