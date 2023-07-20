import { Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { ProductDetails } from './Pages/ProductDetails'
import { Cart } from './Pages/Cart'
import { Home } from './Pages/Home'

export default function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path=':id' element={<ProductDetails />} />
          <Route path='Cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  )
}
