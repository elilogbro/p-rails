import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Video from './components/Video';
import ContactInfo from './components/ContactInfo';
import Navigation from './components/Navigation';
import About from './components/About';
import ProjectsContainer from './components/ProjectsContainer';
import Container from 'react-bootstrap/Container';

function App() {
  
  return (
    <div className="app-container">
      <Navigation />
      <Container className="routes-container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects/:project_id/video' element={<Video />} />
          <Route path='/contact' element={<ContactInfo />} />
          <Route path='/projects' element={<ProjectsContainer />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
