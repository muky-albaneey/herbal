import { useState } from 'react'

import './App.css'
import ErrorElement from './ErrorElement'
import Layout from './layout/MainLayout'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import HomeComponent from './component/Home'
import ProductPageComponent from './pages/product/ProductPage'
import ProductsComponent from './pages/product/Products'
import CartComponent from './pages/cart/Cart'
import ProductUpload from './pages/admin/Upload';
import AdminDashboard from './pages/admin/Table';
import AdminLayout from './pages/admin/AdminLayout';
import ProductImageEdit from './pages/admin/Edit';
import CheckoutName from './pages/cart/Checkout';
import PaymentName from './pages/cart/Payment';



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
                 path='checkout' loader={async ()=>{
                  return null
              }}
              element={<CheckoutName />} 
            indexerrorElement={<ErrorElement />}
             />


              <Route 
                 path='pay' loader={async ()=>{
                return null 
              }}
              element={<PaymentName />} 
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
              element={<AdminLayout />}
            >
              {/* Nested Route */}
              <Route
                index
                loader={async () => {
                  return null;
                }}
                errorElement={<ErrorElement />}
                element={<AdminDashboard />}
              />
              
               <Route
              path='upload'
              errorElement={<ErrorElement />}
              element={<ProductUpload />}
            />
            <Route
              path=':id/edit'
              errorElement={<ErrorElement />}
              element={<ProductImageEdit />}
            />
            </Route>

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
 
              
          {/* </Route> */}
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
