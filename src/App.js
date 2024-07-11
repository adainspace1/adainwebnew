import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import Blog from './components/blog/Blog';

import Home from './components/home/Home';
import './App.css'
import Publication from './components/common/Public/Publication';



function App() {

  
  return (
    
      <Routes>
        
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
    <Route  path='/courses' element={<CourseHome/>} />
    <Route  path='/team' element={<Team/>} />
    <Route  path='/journal' element={<Blog/>} />
    <Route  path='/Public' element={<Publication/>} />
    </Routes>
    
    
  );
  }

export default App
