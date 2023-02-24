import React, { useState, useEffect } from 'react'
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { Routes, Route } from "react-router-dom"
import mockCats from './mockCats.js'
<link href="https://fonts.googleapis.com/css2?family=Amiri:ital@0;1&family=Cinzel+Decorative:wght@700&family=Cinzel:wght@400;600;800&display=swap" rel="stylesheet"/>

const App = () => {
  const [cats, setCats] = useState([])

  const updateCat = (cat, id) => {
    fetch(`http://localhost:3000/cats/${id}`,{
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(payload => readCat(payload))
    .catch(errors => console.log("Cat update errors: ", errors))
  }


  const readCat = () => {
    fetch("http://localhost:3000/cats")
      .then((response) => response.json())
      .then((payload) => setCats(payload))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    readCat()
  }, [])

  const createCat = (cat) => {
   
    fetch('http://localhost:3000/cats', {
      body: JSON.stringify(cat),
      headers: {
        'Content-Type':'application/json'
      },
      method: 'POST'
    })
    .then(response => response.json())
    .then(payload => readCat(payload))
    .catch(errors => console.log(errors))
  }
  
  return (
    <>
      <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route path="/catshow/:id" element={<CatShow cats={cats}/>} />
        <Route path="/catnew" element={<CatNew createCat={createCat} />} />
        <Route path="/catedit/:id" element={<CatEdit cats={cats} updateCat={updateCat} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;