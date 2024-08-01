import React from 'react';
import './main.css';

const MeetAthletes = ({ arial, sansserif }) => {
  return (
    <div className="container text-center flex-grow-1 mt-4">
      <h1>Meet Our Athletes</h1>
      <div className="font-buttons">
        <button type="button" className="arial" onClick={arial}>Arial</button>
        <button type="button" className="sansserif" onClick={sansserif}>Sans-Serif</button>
      </div>
      <div className="team-links">
        <a href="#Womens-Team">Women's Team</a>
        <a href="#Mens-Team">Men's Team</a>
      </div>

      <div id="Womens-Team" className="section">
        <h2>Women's Team</h2>
        <h3>Women's Team EXEC:</h3>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="profile">
              <img src="Pictures/maura-min-100.jpeg" alt="Maura Madden. Women's Team Captain" className="img-fluid rounded" />
              <p>Captain<br />
                <a href="https://www.linkedin.com/in/maura-madden--/" target="_blank" rel="noopener noreferrer">Maura Madden</a><br />
                Mechanical Engineering '25
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="profile">
              <img src="Pictures/natalie-min-100.jpeg" alt="Natalie Hill. Women's Team Captain" className="img-fluid rounded" />
              <p>Captain<br />
                <a href="https://www.linkedin.com/in/nataliehill02/" target="_blank" rel="noopener noreferrer">Natalie Hill</a><br />
                Computer Science '25
              </p>
            </div>
          </div>
        </div>

        <h3>Rest of the team:</h3>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="profile">
              <img src="Pictures/me.jpg" alt="Gabriela Oyarzun Batlle" className="img-fluid rounded" />
              <p>
                <a href="https://www.linkedin.com/in/gabriela-oyarz%C3%BAn-batlle-908757239/" target="_blank" rel="noopener noreferrer">Gabriela Oyarzun Batlle</a><br />
                Mechanical Engineering '25
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="profile">
              <img src="Pictures\kathrin.jpeg" alt="Kathrin Salame" className="img-fluid rounded" />
              <p>
                <a href="https://www.linkedin.com/in/kathrin-salame-845a8629a/" target="_blank" rel="noopener noreferrer">Kathrin Salame</a><br />
                Engineering '26
              </p>
            </div>
          </div>
        </div>

        <div className="join-team text-center my-4">
          <a href="mailto:gabrielabatlle2025@u.northwestern.edu">
            <button type="button" className="btn btn-warning">Join the Team!</button>
          </a>
        </div>
      </div>

      <div id="Mens-Team" className="section">
        <h2>Men's Team</h2>
        <h3>Coming soon...</h3>
        <div className="join-team text-center my-4">
          <a href="mailto:gabrielabatlle2025@u.northwestern.edu">
            <button type="button" className="btn btn-warning">Join the Team!</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MeetAthletes;
