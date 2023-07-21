import { ProductType } from "../Types/type";

export default function Product(props: ProductType) {
     return (
          <div className="relative py-4 px-4 border-2 border-slate-200 rounded-md flex flex-col gap-2 text-[15px]">
               <div className="w-full">
                    <img src={props.image} alt="product-img" className="h-[9rem] object-cover mx-auto" />
               </div>
               <hr className="w-full" />
               <h2 className="w-full leading-5 px-1">{props.title}</h2>
               <div className="mt-auto flex flex-col gap-2 font-medium">
                    <div className="flex justify-between px-1">
                         <h2>{props.rating.rate}</h2>
                         <h2>${props.price}</h2>
                    </div>
                    <button className="w-full bg-logo-inherit py-[7px] rounded-md text-slate-100 font-medium">View Details</button>
               </div>
          </div>
     )
}
