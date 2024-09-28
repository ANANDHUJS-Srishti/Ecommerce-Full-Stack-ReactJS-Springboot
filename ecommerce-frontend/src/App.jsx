import { useState } from 'react'
import './App.css'
import EcommercePage from './Components/EcommercePage'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductComponent from './Components/ProductComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* //http:localhost:3001 */}
          <Route path="/" element={<EcommercePage />}></Route>
           {/* //http:localhost:3001/list */}
           <Route path="/list" element={<EcommercePage />}></Route>
          {/* //http:localhost:3001/add-products */}
          <Route path='/add-products' element={<ProductComponent/>}></Route>
          {/* //http:localhost:3001/update-products/1 */}
          <Route path='/update-products/:id' element={<ProductComponent/>}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )

}

export default App
