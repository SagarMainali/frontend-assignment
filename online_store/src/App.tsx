import { Routes, Route } from 'react-router-dom'
import { Layout } from './Components/Layout'
import { ProductDetails } from './Pages/ProductDetails'
import { Cart } from './Pages/Cart'
import { Home } from './Pages/Home'
import { QueryClientWrapper } from './Special_Components/QueryClientWrapper'
import { GlobalContextProvider } from './State_Management/context'

export default function App() {

  return (
    <div className='max-w-[1500px] mx-auto'>
      <QueryClientWrapper>
        <GlobalContextProvider>
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route index element={<Home />} />
              <Route path=':id' element={<ProductDetails />} />
              <Route path='cart' element={<Cart />} />
            </Route>
          </Routes>
        </GlobalContextProvider>
      </QueryClientWrapper>
    </div>
  )
}
