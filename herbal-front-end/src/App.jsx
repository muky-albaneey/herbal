import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ErrorElement from './ErrorElement'
import Layout from './layout/MainLayout'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import CarouselComponent from './component/carousel/Carousel'
import HomeComponent from './component/Home'
import ProductPageComponent from './pages/product/ProductPage'
import Admin from './pages/admin_dashboard/AdminCom'

function App() {
  const [count, setCount] = useState(0)
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
                 path='admin' loader={async ()=>{
                return null
              }}
              element={<Admin />} errorElement={<ErrorElement />} />
          {/* <Route
            index
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
             <Route
            path='continueCheckOut'
            errorElement={<ErrorElement />}
            element={<ContinueCheckOut />}
          />
            <Route
            path='partners'
            errorElement={<ErrorElement />}
            element={<Partners />}
          />
          <Route
            path='shop'
            errorElement={<ErrorElement />}
            element={<Shop />}
          />
               <Route
            path='checkout'
            errorElement={<ErrorElement />}
            element={<Checkout />}
          />
           <Route
            path='AllCart'
            errorElement={<ErrorElement />}
            element={<AllCart />}
          />
           <Route
            path='club_fixtures'
            errorElement={<ErrorElement />}
            element={<Club_fixtures />}>

            <Route
                index
                errorElement={<ErrorElement />}
                element={<Features_page />}
              />

              <Route
                path='standing_page'
                errorElement={<ErrorElement />}
                element={<Standing_page />}
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
