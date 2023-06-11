import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { rootAction,rootLoader,loader } from "./components/SideScroller"



const router = createBrowserRouter([
  {
    path: "/",
    element: <App access='LoggedOut'/>, //App here is the main.js or App.js component. 
  },
  {
    path: "/Register",
    element: <App access='LoggedOut' type='Register'/>, 
  },
  {
    path: "/Dashboard",
    element: <App access='LoggedIn'/>, //App here is the main.js or App.js component. 
    loader: rootLoader,
    action: rootAction,
    id: "root",
    children: [
      {
        path: "new",
        loader: loader,
        id: "new",
        element: <App />,
        
      },
      {
        path: ":ItemId",
        loader: loader,
        id: "item",
        element: <App />,
        
      }
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
