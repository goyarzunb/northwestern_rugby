import React, { useEffect } from 'react';
import './main.css';
import Slideshow from './Slideshow';

const Home = ({ setFont, arial, sansserif }) => {
  const showCaption = () => {
    const caption = document.querySelector('.caption');
    if (caption) caption.style.display = 'block';
  };

  const hideCaption = () => {
    const caption = document.querySelector('.caption');
    if (caption) caption.style.display = 'none';
  };

  const handleImageClick = () => {
    alert('You clicked the image!');
  };

  useEffect(() => {
    const image = document.getElementById('groupImage');
    if (image) {
      image.addEventListener('mouseenter', showCaption);
      image.addEventListener('mouseleave', hideCaption);
      image.addEventListener('click', handleImageClick);
    }

    return () => {
      if (image) {
        image.removeEventListener('mouseenter', showCaption);
        image.removeEventListener('mouseleave', hideCaption);
        image.removeEventListener('click', handleImageClick);
      }
    };
  }, []);

  return (
    <div className="container text-center flex-grow-1 mt-4">
      <div className="main-content">
        <h1>Northwestern Rugby</h1>
        <br></br>
        <div className="font-buttons">
          <button type="button" className="arial" onClick={arial}>Arial</button>
          <button type="button" className="sansserif" onClick={sansserif}>Sans-Serif</button>
        </div>
        <br></br>
        <Slideshow />
        <br></br>
        <p className="text">Welcome to the Northwestern Rugby web page! Here's everything you need to know about our team. We are happy to have you here. CKD/ELE!</p>
        <div className="join-team">
          <a href="mailto:gabrielabatlle2025@u.northwestern.edu">
            <button type="button" className="btn btn-warning">Join the Team!</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
