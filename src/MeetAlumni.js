import React from 'react';
import './main.css';

const MeetAlumni = ({ arial, sansserif }) => {
  return (
    <div className="container text-center flex-grow-1 mt-4">
      <h1>Meet Our Alumni</h1>
      <div className="font-buttons">
        <button type="button" className="arial" onClick={arial}>Arial</button>
        <button type="button" className="sansserif" onClick={sansserif}>Sans-Serif</button>
      </div>
      <br></br>
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="profile">
            <img src="Pictures/jim.jpg" alt="Jim Hebson. Men's Team Coach" className="img-fluid rounded" />
            <p>Mens Coach<br />Jim Hebson<br />English '89</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="profile">
            <img src="Pictures/john.jpg" alt="John Perkaus. Men's Team Coach" className="img-fluid rounded" />
            <p>Mens Coach<br />
              <a href="https://www.linkedin.com/in/john-perkaus-6581aa231/" target="_blank" rel="noopener noreferrer">John Perkaus</a><br />Business '87</p>
          </div>
        </div>
      </div>

      <div className="join-team text-center my-4">
        <a href="mailto:gabrielabatlle2025@u.northwestern.edu">
          <button type="button" className="btn btn-warning">Join the Team!</button>
        </a>
      </div>
    </div>
  );
};

export default MeetAlumni;
