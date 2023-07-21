import { useGlobalContext } from "../StateManagement/context";
import { ProductType } from "../Types/type";

export default function ProductInCart({ id, image, title, cartQuantity, price }: ProductType) {

     const { removeFromCart, changeCartQuantity } = useGlobalContext()

     return (
          <div className="grid grid-cols-[9.5rem_auto] gap-3">

               <div className="w-full flex justify-center border-2">
                    <img src={image} alt='product-img' className="object-cover h-[6.5rem]" />
               </div>

               <div className="flex flex-col gap-2">
                    <h2 className="leading-5 text-sm sm:text-base">{title} <button onClick={() => removeFromCart(id)} className="text-xs text-red-600 font-semibold bg-gray-200 px-2 rounded-lg">Remove</button></h2>
                    <div className="flex items-center gap-2">Quantity:
                         <button onClick={() => changeCartQuantity(id, 'decrement')} className="flex justify-center items-center bg-gray-200 rounded-full h-6 w-6 pb-1">-</button>
                         <span className="font-semibold">{cartQuantity}</span>
                         <button onClick={() => changeCartQuantity(id, 'increment')} className="flex justify-center items-center bg-gray-200 rounded-full h-6 w-6 pb-1">+</button>
                    </div>
                    <h2 className="text-sm">Price: <span className="font-semibold">${(price * cartQuantity).toFixed(2)}</span></h2>
               </div>

          </div >
     )
}
