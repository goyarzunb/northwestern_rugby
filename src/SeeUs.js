import React from 'react';
import './main.css';

const SeeUs = () => {
  return (
    <div className="container text-center flex-grow-1 mt-4">
      <h1>Northwestern Rugby</h1>
      <div className="font-buttons">
        <button type="button" className="arial" onClick={() => document.body.style.fontFamily = 'Arial'}>Arial</button>
        <button type="button" className="sansserif" onClick={() => document.body.style.fontFamily = 'Sans-Serif'}>Sans-Serif</button>
      </div>
      <p>One of the greatest parts of this sport is our supporters. Come support us at our games, and add our game calendar to yours so you don't miss out on anything!</p>

      <div className="calendar-jumps">
        <a href="#Fall24"><button type="button">Fall '24</button></a>
        <a href="#Winter25"><button type="button">Winter '24</button></a>
        <a href="#Spring25"><button type="button">Spring '25</button></a>
      </div>

      <div id="Fall24" className="section mb-4">
        <h2>Fall '24: Game Calendar</h2>
        <div className="calendar-container">
          <iframe
            className="embed-responsive-item"
            src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=YOUR_TIMEZONE"
            style={{ border: 0 }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
        <div className="add-calendar mt-3">
          <a href="https://calendar.google.com/calendar/r?cid=your_calendar_id%40group.calendar.google.com" target="_blank">
            <button type="button" className="btn btn-warning">Add to My Calendar</button>
          </a>
        </div>
      </div>

      <div id="Winter25" className="section mb-4">
        <h2>Winter '25: Game Calendar</h2>
        <div className="calendar-container">
          <iframe
            className="embed-responsive-item"
            src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=YOUR_TIMEZONE"
            style={{ border: 0 }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
        <div className="add-calendar mt-3">
          <a href="https://calendar.google.com/calendar/r?cid=your_calendar_id%40group.calendar.google.com" target="_blank">
            <button type="button" className="btn btn-warning">Add to My Calendar</button>
          </a>
        </div>
      </div>

      <div id="Spring25" className="section mb-4">
        <h2>Spring '25: Game Calendar</h2>
        <div className="calendar-container">
          <iframe
            className="embed-responsive-item"
            src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=YOUR_TIMEZONE"
            style={{ border: 0 }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
        <div className="add-calendar mt-3">
          <a href="https://calendar.google.com/calendar/r?cid=your_calendar_id%40group.calendar.google.com" target="_blank">
            <button type="button" className="btn btn-warning">Add to My Calendar</button>
          </a>
        </div>
      </div>

      <div className="join-team text-center my-4">
        <a href="mailto:gabrielabatlle2025@u.northwestern.edu"><button type="button" className="btn btn-warning">Join the Team!</button></a>
      </div>
    </div>
  );
};

export default SeeUs;
