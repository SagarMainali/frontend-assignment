import '../styles/loading.css'

export function LoadingHandler() {
     return (
          <div className="loading h-[85vh] flex items-center justify-center">
               <div className="lds-ripple">
                    <div></div>
                    <div></div>
               </div>
          </div>
     )
}