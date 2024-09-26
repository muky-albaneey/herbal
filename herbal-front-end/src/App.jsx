import { useState } from 'react'

import './App.css'
import ErrorElement from './ErrorElement'
import Layout from './layout/MainLayout'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import HomeComponent from './component/Home'
import ProductPageComponent from './pages/product/ProductPage'
import ProductsComponent from './pages/product/Products'
import CartComponent from './pages/cart/Cart'



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path='/'
          errorElement={<ErrorElement />}
          loader={async () => {
            return null;
          }}
          element={<Layout />}
        >
         
          
          <Route
            index
            errorElement={<ErrorElement />}
            loader={async () => {
              return null;
            }}
            element={<HomeComponent />}
          />
            <Route 
              path='product/:id' loader={async ()=>{
                return null
              }}
              element={<ProductPageComponent />} errorElement={<ErrorElement />} />
              {/* <Route 
                 path='admin' loader={async ()=>{
                return null
              }}
              element={<Example />} 
            indexerrorElement={<ErrorElement />}
             /> */}
               <Route 
                 path='products' loader={async ()=>{
                  return null
              }}
              element={<ProductsComponent />} 
            indexerrorElement={<ErrorElement />}
             />
              <Route 
                 path='cart' loader={async ()=>{
                return null
              }}
              element={<CartComponent />} 
            indexerrorElement={<ErrorElement />}
             />
             

             <Route
            path='admin'
            errorElement={<ErrorElement />}
            element={<Blogging />}
          >
            {/* <Route
              index
              errorElement={<ErrorElement />}
              element={<Fixture />}
            />
          </Route>
          <Route
            path='contact'
            errorElement={<ErrorElement />}
            element={<Contact />}
          />
          <Route
            path='kit'
            errorElement={<ErrorElement />}
            element={<Kit />}
          />
            <Route
            path='customize'
            errorElement={<ErrorElement />}
            element={<Customize />}
          /> */}
 
              
          </Route>
          {/* <Route
            errorElement={<ErrorElement />}
            loader={async () => {
              return null;
            }}
            element={<Home />}
          />
  
          <Route
            path='about'
            errorElement={<ErrorElement />}
            element={<About />}
          />
          <Route
            path='fan'
            errorElement={<ErrorElement />}
            element={<Fan />}
          />
          <Route
            path='blog'
            errorElement={<ErrorElement />}
            element={<Blogging />}
          >
            <Route
              index
              errorElement={<ErrorElement />}
              element={<Fixture />}
            />
          </Route>
          <Route
            path='contact'
            errorElement={<ErrorElement />}
            element={<Contact />}
          />
          <Route
            path='kit'
            errorElement={<ErrorElement />}
            element={<Kit />}
          />
            <Route
            path='customize'
            errorElement={<ErrorElement />}
            element={<Customize />}
          />
 
              
          </Route>
          <Route
                path='payment'
                errorElement={<ErrorElement />}
                element={<Payment />}
              /> */}
        </Route>
  
        {/* Separate route for the login page without the layout */}
        {/* <Route
          path='login'
          errorElement={<ErrorElement />}
          element={<Login />}
        />
          <Route
          path='sign'
          errorElement={<ErrorElement />}
          element={<Sign />}
        /> */}
      </>
    )
  );
  return (
    <>
    <RouterProvider router={router} />      
     {/* <Home />       */}
   </>
  )
}

export default App
