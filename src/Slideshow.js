import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './main.css';

const Slideshow = () => {
  const [caption, setCaption] = useState('');

  const handleMouseEnter = (captionText) => {
    setCaption(captionText);
  };

  const handleMouseLeave = () => {
    setCaption('');
  };

  return (
    <Carousel>
      <Carousel.Item
        onMouseEnter={() => handleMouseEnter('Group picture of after both teams won first place in Lake Side 7s!')}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="d-block w-100"
          src="Pictures/group_picture.jpeg"
          alt="Group Picture"
        />
        {caption && (
          <Carousel.Caption>
            <h3>{caption}</h3>
          </Carousel.Caption>
        )}
      </Carousel.Item>

      <Carousel.Item
        onMouseEnter={() => handleMouseEnter("Women's Team")}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="d-block w-100"
          src="Pictures/all-min.jpeg"
          alt="Women's Team"
        />
        {caption && (
          <Carousel.Caption>
            <h3>{caption}</h3>
          </Carousel.Caption>
        )}
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideshow;

