import React from 'react';
import { Carousel } from 'react-bootstrap';
import './main.css';

const Slideshow = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/Pictures/group_picture.jpeg`}
          alt="Men and Womens' team after winning first place at Lake Side 7s"
        />
        <Carousel.Caption>
          <h3>Group picture after both teams won first place in Lake Side 7s!</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/Pictures/all-min.jpeg`}
          alt="Women's Team Group Picture"
        />
        <Carousel.Caption>
          <h3>Women's Team</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideshow;
