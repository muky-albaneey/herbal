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
import PaymentSuccess from './pages/cart/Verify';
import ChangePasswordComponent from './pages/auth/Profile';
// import LoignForm from './pages/auth/Login';
import SignUpForm from './pages/auth/Sign';
import SettingsForm from './pages/auth/Settings';
import Users from './pages/auth/UserLayout';
import LogInForm from './pages/auth/SignIn';
import Orders from './pages/admin/Order';
import OrderDetails from './pages/admin/OrderDetails';
import UserOrders from './pages/auth/UserOrders';
// import LogInForm from './pages/auth/login';
// import LogInForm from './pages/auth/Login';



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
              <Route 
                 path='payment-success' loader={async ()=>{
                return null
              }}
              element={<PaymentSuccess />} 
            errorElement={<ErrorElement />}
             />
               <Route 
                 path='products' loader={async ()=>{
                  return null
              }}
              element={<ProductsComponent />} 
            errorElement={<ErrorElement />}
             />
             
             <Route 
                 path='checkout' loader={async ()=>{
                  return null
              }}
              element={<CheckoutName />} 
            errorElement={<ErrorElement />}
             />


              <Route 
                 path='pay' loader={async ()=>{
                return null 
              }}
              element={<PaymentName />} 
            errorElement={<ErrorElement />}
             />

              <Route 
                 path='cart' loader={async ()=>{
                return null 
              }}
              element={<CartComponent />} 
            errorElement={<ErrorElement />}
             />
               <Route
              path='login'
              errorElement={<ErrorElement />}
              element={<LogInForm />}
            />
            <Route
              path='register'
              errorElement={<ErrorElement />}
              element={<SignUpForm />}
            />
              {/* <Route 
                 path='user' loader={async ()=>{
                  return null
              }}
              element={<Users />} 
            errorElement={<ErrorElement />}
             >
               <Route
                index
                loader={async () => {
                  return null;
                }}
                errorElement={<ErrorElement />}
                element={<SettingsForm />}
              />

            
            <Route
              path='profile'
              errorElement={<ErrorElement />}
              element={<ChangePasswordComponent />}
            />
            
             </Route> */}
             <Route 
                  path='user' 
                  element={<Users />} 
                    errorElement={<ErrorElement />}
            >
                      {/* Index route that will show by default when accessing '/user' */}
                <Route
                  index
                  loader={async () => {
                   return null;
                  }}
                  element={<SettingsForm />} // This will display on the '/user' route by default
                  errorElement={<ErrorElement />}
                  />

                      {/* Profile route, which will display when user clicks the 'Table' NavLink */}
                  <Route
                    path='profile'
                    element={<ChangePasswordComponent />} // This will display on '/user/profile'
                    errorElement={<ErrorElement />}
                  />
                <Route
                    path='user_order'
                    element={<UserOrders />} // This will display on '/user/profile'
                    errorElement={<ErrorElement />}
                  />

              </Route>
             
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
              path='orders'
              errorElement={<ErrorElement />}
              element={<Orders />}
            />
             <Route
                  path=':id/order'  // This route handles a specific order by its ID
                  element={<OrderDetails />} // Create an OrderDetails component for specific order details
                    errorElement={<ErrorElement />}
              />
                  {/* <Route
                    path='orders'
                    errorElement={<ErrorElement />}
                    element={<Orders />}
                  >
                   
              </Route> */}

            <Route
              path=':id/edit'
              errorElement={<ErrorElement />}
              element={<ProductImageEdit />}
            />
            </Route>

           
        </Route>
      </>
    )
  );
  return (
    <>
    <RouterProvider router={router} />      
   </>
  )
}

export default App
