import { Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { ProductDetails } from './Pages/ProductDetails'
import { Cart } from './Pages/Cart'
import { Home } from './Pages/Home'

export default function App() {

  return (
    <div className='max-w-[1500px] mx-auto'>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path=':id' element={<ProductDetails />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  )
}
