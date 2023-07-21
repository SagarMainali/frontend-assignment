import '../styles/loading.css'

export function InvalidUrlPage() {
     return (
          <div className="loading h-[85vh] flex items-center justify-center">
               <p>🤷‍♂️ Invalid URL | The page you are trying to access does't exist.</p>
          </div>
     )
}