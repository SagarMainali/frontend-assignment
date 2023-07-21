import { ProductType } from "../Types/type";

export default function ProductInCart({ image, title, cartQuantity, price }: ProductType) {

     return (
          <div className="grid grid-cols-[9.5rem_auto] gap-3">

               <div className="w-full flex justify-center border-2">
                    <img src={image} alt='product-img' className="object-cover h-[6.5rem]" />
               </div>

               <div className="flex flex-col gap-1">
                    <h2 className="leading-5 text-sm sm:text-base">{title} <button onClick={() => { }} className="text-xs text-red-600 font-semibold bg-gray-200 px-2 rounded-lg">Remove</button></h2>
                    <div className="flex items-center gap-2">Quantity:
                         <button onClick={(e) => { }} name='decrement' className="flex justify-center items-center bg-gray-200 rounded-full h-6 w-6 pb-1">-</button>
                         <span className="font-semibold">{cartQuantity}</span>
                         <button onClick={(e) => { }} name='increment' className="flex justify-center items-center bg-gray-200 rounded-full h-6 w-6 pb-1">+</button>
                    </div>
                    <h2 className="text-sm">Price: <span className="font-semibold">${(price * cartQuantity).toFixed(2)}</span></h2>
               </div>

          </div >
     )
}
