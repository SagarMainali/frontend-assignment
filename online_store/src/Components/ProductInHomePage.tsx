import { ProductType } from "../Types/type";
import { useNavigate } from "react-router-dom";

export default function ProductInHomePage(props: ProductType) {

     const navigate = useNavigate()

     function viewDetailsPage(id: number) {
          navigate(id.toString())
     }

     return (
          <div className="relative py-4 px-4 border-2 border-slate-200 text-primary-dark rounded-md flex flex-col gap-2 text-[15px]">
               <div className="w-full group">
                    <img src={props.image} alt="product-img" className="h-[9rem] object-cover mx-auto duration-[600ms] group-hover:scale-[1.2]" />
               </div>
               <hr className="w-full border border-slate-200" />
               <h2 className="w-full leading-5 px-1">{props.title}</h2>
               <div className="mt-auto flex flex-col gap-2">
                    <div className="flex justify-between px-1">
                         <h2 className="flex gap-1 items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" height=".8rem" fill="#001C30" viewBox="0 0 576 512">
                                   <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                              </svg>
                              {props.rating.rate}
                         </h2>
                         <h2 className="font-medium">${props.price}</h2>
                    </div>
                    <button onClick={() => viewDetailsPage(props.id)} className="w-full h-[40px] font-medium rounded-md text-slate-100 bg-logo-inherit hover:bg-[rgb(49,161,189)] hover:scale-[.97] duration-300">View Details</button>
               </div>
          </div>
     )
}
