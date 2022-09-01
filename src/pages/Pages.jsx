import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Recipe from './Recipe'
import SearchResults from './SearchResults'
import {Route, Routes, useLocation} from 'react-router-dom'
import {AnimatePresence} from "framer-motion"


function Pages() {
    const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={
                <Home></Home>
            }/>

            <Route path="/cuisine/:type" element={
                        <Cuisine></Cuisine>
            }/>  

            <Route path="/search/:search" element={
                        <SearchResults></SearchResults>
            }/>      
            <Route path="/recipe/:id" element={
                        <Recipe></Recipe>
            }/>        
        </Routes>
    </AnimatePresence>
        
  )
}

export default Pages