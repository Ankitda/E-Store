import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import About from './component/About.jsx'
import ProductList from './component/Features/ProductList.jsx';
import CustomerReviews from './component/Features/CustomerReviews.jsx';
import Hero from "./component/Hero.jsx"
import { products } from './component/Features/ProductList.jsx';
import Help from './component/Help/Help.jsx';
import Contact from './component/Help/Contact.jsx';
import { personData } from './component/Help/Contact.jsx';
import ProductFeatures from './component/ProductFeatures.jsx';
import { productInfo } from './component/ProductFeatures.jsx';
import AppErrorPage from './AppErrorPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<AppErrorPage />}> 
      <Route path='home' element={<Hero />}/>
      <Route path='about' element={<About />} />
      <Route path='help' element={<Help />}>
        <Route path='contact' element={<Contact />} action={personData} />
      </Route>
      <Route path='products' element={<ProductList />} loader={products}/>
      <Route path=':id' element={<ProductFeatures />} loader={productInfo}/>
      <Route path='reviews' element={<CustomerReviews />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
