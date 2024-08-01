import React from 'react';
import './main.css';

const SeeUs = () => {
  return (
    <div className="container text-center flex-grow-1 mt-4">
      <h1>Come see us at our next game!</h1>
      <div className="calendar-jumps">
        <a href="#Fall24"><button type="button">Fall '24</button></a>
        <a href="#Winter25"><button type="button">Winter '25</button></a>
        <a href="#Spring25"><button type="button">Spring '25</button></a>
      </div>

      <div id="Fall24" className="section mb-4">
        <h2>Fall '24: Game Calendar</h2>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            title="Fall '24 Game Calendar"
            className="embed-responsive-item"
            src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=YOUR_TIMEZONE"
            style={{ border: 0 }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
        <div className="add-calendar mt-3">
          <a href="https://calendar.google.com/calendar/r?cid=your_calendar_id%40group.calendar.google.com" target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-warning">Add to My Calendar</button>
          </a>
        </div>
      </div>

      <div id="Winter25" className="section mb-4">
        <h2>Winter '25: Game Calendar</h2>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            title="Winter '25 Game Calendar"
            className="embed-responsive-item"
            src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=YOUR_TIMEZONE"
            style={{ border: 0 }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
        <div className="add-calendar mt-3">
          <a href="https://calendar.google.com/calendar/r?cid=your_calendar_id%40group.calendar.google.com" target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-warning">Add to My Calendar</button>
          </a>
        </div>
      </div>

      <div id="Spring25" className="section mb-4">
        <h2>Spring '25: Game Calendar</h2>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            title="Spring '25 Game Calendar"
            className="embed-responsive-item"
            src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=YOUR_TIMEZONE"
            style={{ border: 0 }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
        <div className="add-calendar mt-3">
          <a href="https://calendar.google.com/calendar/r?cid=your_calendar_id%40group.calendar.google.com" target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-warning">Add to My Calendar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SeeUs;
