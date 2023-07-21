import { useGlobalContext } from '../StateManagement/context'
import ProductInCart from '../Components/ProductInCart'
import { ProductType } from '../Types/type'

export function CartPage() {

     const { productsInCart, clearCart } = useGlobalContext()

     function getProductPrices() {
          const productPrice = productsInCart.map(
               (productInCart: ProductType) => {
                    return productInCart.cartQuantity * productInCart.price
               }
          )
          return productPrice.reduce(getSum)
     }

     function getSum(total: number, num: number) {
          return total + num
     }

     return (
          <div className='flex flex-col gap-4'>
               {
                    productsInCart.length
                         ? productsInCart.map((productInCart: ProductType) => {
                              return <ProductInCart key={productInCart.id} {...productInCart} />
                         })
                         : <h2>You have not added any products to cart yet. 🛒</h2>
               }

               <hr className="border-2 border-gray-300" />

               {productsInCart.length > 0 &&
                    <div className="text-end flex gap-3 items-center justify-end bg-slate-200 rounded-md px-4 py-2">
                         <h2>Your total: <span className="font-bold">${getProductPrices().toFixed(2)}</span></h2>
                         <button className="px-4 py-2 bg-logo-inherit text-white rounded-lg">Checkout</button>
                         <button onClick={clearCart} className="px-4 py-2 bg-logo-inherit text-white rounded-lg">Clear Cart</button>
                    </div>
               }
          </div>
     )
}
