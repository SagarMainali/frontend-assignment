import { Routes, Route } from 'react-router-dom'
import { Layout } from './Components/Layout'
import { ProductDetails } from './Pages/ProductDetails'
import { Cart } from './Pages/Cart'
import { Home } from './Pages/Home'
import { InvalidUrlPage } from './Pages/InvalidUrlPage'
import { QueryClientWrapper } from './SpecialComponents/QueryClientWrapper'
import { GlobalContextProvider } from './StateManagement/context'

export default function App() {

  return (
    <div className='max-w-[1500px] mx-auto py-2'>
      <QueryClientWrapper>
        <GlobalContextProvider>
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route index element={<Home />} />
              <Route path=':id' element={<ProductDetails />} />
              <Route path='cart' element={<Cart />} />
              <Route path='*' element={ <InvalidUrlPage />} />
            </Route>
          </Routes>
        </GlobalContextProvider>
      </QueryClientWrapper>
    </div>
  )
}