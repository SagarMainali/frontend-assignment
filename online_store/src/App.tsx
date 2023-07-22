import { Routes, Route } from 'react-router-dom'
import { Layout } from './Components/Layout'
import { ProductDetailsPage } from './Pages/ProductDetailsPage'
import { CartPage } from './Pages/CartPage'
import { HomePage } from './Pages/HomePage'
import { InvalidUrlPage } from './Pages/InvalidUrlPage'
import { QueryClientWrapper } from './SpecialComponents/QueryClientWrapper'
import { GlobalContextProvider } from './StateManagement/context'
import { SearchResultPage } from './Pages/SearchResultPage'

export default function App() {

  return (
    <div className='max-w-[1500px] mx-auto py-2'>
      <QueryClientWrapper>
        <GlobalContextProvider>
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route index element={<HomePage />} />
              <Route path='products/:id' element={<ProductDetailsPage />} />
              <Route path='search_results/:searchQuery' element={<SearchResultPage />} />
              <Route path='cart' element={<CartPage />} />
              <Route path='*' element={<InvalidUrlPage />} />
            </Route>
          </Routes>
        </GlobalContextProvider>
      </QueryClientWrapper>
    </div>
  )
}