import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../Pages/Home';
import About from '../Pages/About';
import PlansPricing from '../Pages/Plans';
import BookNow from '../Pages/Booknow';
import LandingPage from '../Pages/Landingpage';

function Routes() {
    const Router = createBrowserRouter([
        {
            path:"/",
            element:<Layout/>,
            children:[
              {
                path:"/",
                element:<LandingPage/>
              },
                {
                    path:"/home",
                    element:<Home/>
                },
                {
                  path:"/about",
                  element:<About/>
                },
                {
                  path:"/plans",
                  element:<PlansPricing/>
                },
                {
                  path:"/booknow",
                  element:<BookNow/>
                }
            ]
        }
    ])
  return (
    <div>
      <RouterProvider router={Router}/>
    </div>
  )
}

export default Routes
