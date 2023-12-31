import React, { Suspense } from 'react'
import Home from './views/Home'
import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import Router from './router/Router'
function Appcontent (){
  return (
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='*' element={<Navigate replace to='/'/>}/>
      {/* <Route path='*' element={<Navigate to='/'/>}/> */}
    </Routes>
  )
}
const App = () => {
  return (
  <Suspense fallback={null}> 
  {/* <Home/> */}
  {/* <Appcontent/> */}
    <Router/>
  {/* <Home/>  */}
   </Suspense>
      
  )
}

export default App
