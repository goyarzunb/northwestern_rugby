import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import MeetAthletes from './MeetAthletes';
import MeetAlumni from './MeetAlumni';
import SeeUs from './SeeUs';
import NavigationBar from './NavigationBar';
import './main.css'; // Your CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

const Footer = () => (
  <footer className="bg-dark text-light text-center py-4 mt-auto">
    <h2>Follow our socials!</h2>
    <div className="socials">
      <a href="https://www.instagram.com/nuwrugby/" className="text-light d-block my-2">Women's Instagram</a>
      <a href="https://groupme.com/" className="text-light d-block my-2">Women's GroupMe</a>
      <a href="https://www.instagram.com/northwesternrugby/?hl=en" className="text-light d-block my-2">Men's Instagram</a>
      <a href="https://groupme.com/" className="text-light d-block my-2">Men's GroupMe</a>
    </div>
  </footer>
);

const App = () => {
  const [font, setFont] = useState('Trebuchet MS, sans-serif');

  const arial = () => {
    setFont('Arial, sans-serif');
  };

  const sansserif = () => {
    setFont('Trebuchet MS, sans-serif');
  };

  return (
    <Router basename="/northwestern_rugby">
      <div className="d-flex flex-column min-vh-100" style={{ fontFamily: font }}>
        <header>
          <NavigationBar />
        </header>
        <main className="container text-center flex-grow-1 mt-4">
          <Routes>
            <Route path="/" element={<Home setFont={setFont} arial={arial} sansserif={sansserif} />} />
            <Route path="/meet-athletes" element={<MeetAthletes setFont={setFont} arial={arial} sansserif={sansserif} />} />
            <Route path="/meet-alumni" element={<MeetAlumni setFont={setFont} arial={arial} sansserif={sansserif} />} />
            <Route path="/see-us" element={<SeeUs setFont={setFont} arial={arial} sansserif={sansserif} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
