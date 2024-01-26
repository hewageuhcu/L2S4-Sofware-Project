// Calendar.jsx

import React, { useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';

export default function Calendar() {
  const calendarRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [eventDetails, setEventDetails] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const handleDateClick = (info) => {
    setSelectedDate(info.date);
    setShowDatePicker(true);
    setStartTime(new Date(info.date));
    setEndTime(new Date(info.date));
  };

  const handleEventClick = (info) => {
    // Display the event details pop-up when an event is clicked
    const event = info.event;
  
    // Format start and end times without the time zone information
    const startTime = event.start.toLocaleString('en-US', { timeZone: 'Asia/Colombo' }).replace(/ GMT.*$/, '');
    const endTime = event.end.toLocaleString('en-US', { timeZone: 'Asia/Colombo' }).replace(/ GMT.*$/, '');
  
    
    alert(
      `Event Details:\n\nEvent Details: ${event.title}\nStart Time: ${startTime}\nEnd Time: ${endTime}`
    );
  };
  

  const handleButtonClick = () => {
    setShowDatePicker(true);
    setSelectedDate(new Date());
    setStartTime(new Date());
    setEndTime(new Date());
  };

  const handleAddEvent = () => {
    const calendarApi = calendarRef.current.getApi();

    // Example: Add a new event to the calendar with selected date, time, and event details
    const newEvent = {
      title: eventDetails || 'New Event',
      start: startTime,
      end: endTime,
      allDay: false, // Set to false to include time
      description: eventDetails,
    };

    calendarApi.addEvent(newEvent);
    setShowDatePicker(false);
    setEventDetails(''); // Clear the event details after adding the event
  };

  return (
    <div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView={'dayGridMonth'}
        selectable={true}
        dateClick={handleDateClick}
        eventClick={handleEventClick} 
        
        editable= {true}
        eventDurationEditable ={true}
        eventResizableFromStart ={true}
        eventStartEditable ={true}


        headerToolbar={{
          start: 'today prev,next',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        }}
        height={'90vh'}
      />
      <div className="button1" onClick={handleButtonClick}>
        Create New Event
      </div>
      {showDatePicker && (
        <div>
          <label>Start Time: </label>
          <DatePicker
            selected={startTime}
            onChange={(date) => setStartTime(date)}
            showTimeSelect
            timeIntervals={15}
            dateFormat="Pp"
          />
          <br />
          <label>End Time: </label>
          <DatePicker
            selected={endTime}
            onChange={(date) => setEndTime(date)}
            showTimeSelect
            timeIntervals={15}
            dateFormat="Pp"
          />
          <div className="eventdetails">
            <label>Event Details: </label>
            <input
              type="text"
              placeholder="Event details"
              value={eventDetails}
              onChange={(e) => setEventDetails(e.target.value)}
              style={{ width: '300px', height: '50px' }}
            />
          </div>
          <div className="button2" onClick={handleAddEvent}>
            Save
          </div>
        </div>
      )}
    </div>
  );
}