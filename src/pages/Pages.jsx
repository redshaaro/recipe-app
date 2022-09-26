import React from 'react'
import Home from './Home'
import {Route,Routes } from 'react-router-dom';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';


function Pages() {
  return (

     
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/cuisine/:type' element={<Cuisine></Cuisine>}></Route>
      <Route path='/Searched/:search' element={<Searched></Searched>}></Route>
      <Route path='/recipe/:name' element={<Recipe></Recipe>}></Route>



    </Routes>
    
    
     
    
  )
}


export default Pages