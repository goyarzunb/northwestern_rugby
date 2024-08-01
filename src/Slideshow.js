import React from 'react';
import { Carousel } from 'react-bootstrap';
import './main.css';

const Slideshow = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="image-container">
          <img
            className="d-block w-100"
            src="Pictures/group_picture.jpeg"
            alt="Group Picture"
          />
          <div className="caption">Group picture of after both teams won first place in Lake Side 7s!</div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="image-container">
          <img
            className="d-block w-100"
            src="Pictures/all-min.jpeg"
            alt="Womens' Team"
          />
          <div className="caption">Womens' Team</div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideshow;
