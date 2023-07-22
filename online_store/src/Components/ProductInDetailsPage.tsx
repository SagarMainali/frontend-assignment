import { useGlobalContext } from "../StateManagement/context"
import { ProductType } from "../types/type"
import { SimilarProducts } from "./SimilarProducts"

export function ProductInDetailsPage(props: ProductType) {

     const { addToCart } = useGlobalContext()

     return (
          <div className="flex flex-col gap-20 max-w-[1300px] mx-auto">
               <div className="flex md:flex-row flex-col justify-start md:items-start items-center gap-6">
                    <div className="border-2 border-slate-300 rounded-lg p-6 group overflow-hidden cursor-pointer min-w-[25vw] sm:max-w-[30vw] max-w-[60vw]">
                         <img src={props.image} alt="product-image" className="max-h-[400px] object-cover group-hover:scale-[.80] duration-[450ms]" />
                    </div>

                    <div className="flex flex-col gap-4">
                         <h1 className="text-2xl">{props.title}</h1>
                         <div className="flex gap-4 items-center">
                              <h2 className="text-xs bg-slate-200 py-1 px-3 rounded-md font-medium">{props.category.toUpperCase()}</h2>
                              <div className="flex gap-1 items-center">
                                   <svg xmlns="http://www.w3.org/2000/svg" height="1rem" fill="#001C30" viewBox="0 0 576 512">
                                        <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                                   </svg>
                                   <h2>{props.rating.rate}/5</h2>
                              </div>
                              <h2>{props.rating.count} Ratings</h2>
                         </div>
                         <p className="">{props.description}</p>
                         <h2 className="font-medium text-xl">$ {props.price}</h2>

                         <button onClick={() => addToCart(props)} className="border-2 border-primary-dark rounded-md flex items-center gap-2 py-1.5 px-4 mr-auto group hover:scale-[.98] hover:bg-primary-dark/80 duration-300">
                              <h2 className="font-medium group-hover:text-slate-100 duration-300" >Add to Cart</h2>
                              <svg className="group-hover:fill-slate-100 duration-300" xmlns="http://www.w3.org/2000/svg" height="1.2rem" viewBox="0 0 576 512" fill='#001C30'>
                                   <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                              </svg>
                         </button>
                    </div>
               </div>

               <div className="flex flex-col gap-3">
                    <h2 className="text-lg">Similar Products like "{props.title}"</h2>
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
                         <SimilarProducts category={props.category} id={props.id} />
                    </div>
               </div>

          </div>
     )
}
