import React, { useState, useEffect } from 'react';
import HomeSeller from './homeSeller'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import PropertyPage1 from './PropertyPage/PropertyPage1';
import PropertyPage2 from './PropertyPage/PropertyPage2.JSX';
import PropertyPage3 from './PropertyPage/PropertyPage3';
import PropertyPage4 from './PropertyPage/PropertyPage4';
import PropertyPage5 from './PropertyPage/PropertyPage5';
import PropertyPage6 from './PropertyPage/PropertyPage6';
import PropertyPage7 from './PropertyPage/PropertyPage7';
import PropertyPage8 from './PropertyPage/PropertyPage8';
import PropertyPage9 from './PropertyPage/PropertyPage9';
import PropertyList from './PropertyList';
import data from './mockData.json';
// import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeSeller data={data}/>}/>
      <Route path="PropertyPage1" element={<PropertyPage1/>}/>
      <Route path="PropertyPage2" element={<PropertyPage2/>}/>
      <Route path="PropertyPage3" element={<PropertyPage3/>}/>
      <Route path="PropertyPage4" element={<PropertyPage4/>}/>
      <Route path="PropertyPage5" element={<PropertyPage5/>}/>
      <Route path="PropertyPage6" element={<PropertyPage6/>}/>
      <Route path="PropertyPage7" element={<PropertyPage7/>}/>
      <Route path="PropertyPage8" element={<PropertyPage8/>}/>
      <Route path="PropertyPage9" element={<PropertyPage9/>}/>
      </Routes>
      </BrowserRouter>
  );
  // return (
  //   <>
  //       {/* <HomeSeller /> */}

  //       {/* <button onClick={()=>console.log("Hello")}>Hello</button> */}
  //   </>
  // )
}

export default App;
