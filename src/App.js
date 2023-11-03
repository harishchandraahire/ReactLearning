import React, { Component } from "react";
import "./App.css";
import Section from './components/Section'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);


function Master(){
  return(
  <Section/>
  )  
}
export default Master
