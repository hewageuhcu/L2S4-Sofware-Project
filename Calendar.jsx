import React, { useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react'; //import FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';
import axios from 'axios'; //import axios for HTTP requests

//props 'events' and 'setEvents'
export default function Calendar({ events, setEvents }) {
    const calendarRef = useRef(null);
    // Creating state
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [eventDetails, setEventDetails] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());

    // function to handle date click event
    const handleDateClick = (info) => {
        setSelectedDate(info.date);
        setShowDatePicker(true);
        setStartTime(new Date(info.date));
        setEndTime(new Date(info.date));
    };

    // function to handle event click event

    const handleEventClick = (info) => {
        const event = info.event;
    
        const startTime = event.start.toLocaleString('en-US', { timeZone: 'Asia/Colombo' }).replace(/ GMT.*$/, ''); //Convert time to string
        const endTime = event.end ? event.end.toLocaleString('en-US', { timeZone: 'Asia/Colombo' }).replace(/ GMT.*$/, '') : '0';  //Convert time to string
    
        //Display event details as a alert
        alert(
            `Event Info: t6 ${event.extendedProps.description}\n\nEvent Details: ${event.extendedProps.description}\nStart Time: ${startTime}\nEnd Time: ${endTime}\n\n`
        );  // extendedProps are used to access custom properties 

    };
    
    
    // function to handle button click event
    const handleButtonClick = () => {
        setShowDatePicker(true);
        setSelectedDate(new Date());
        setStartTime(new Date());
        setEndTime(new Date());
    };

    // function to handle adding new event
    const handleAddEvent = async () => {
        try {
            const newEvent = {
                
                id: events.length + 1,
                title: 'eventDetails',
                placement: 'top',
                trigger: 'hover',
                container: 'body',
                start: startTime.toISOString(),
                end: endTime.toISOString(),
                allDay: true,
                description: eventDetails,
            };

            await axios.post("http://localhost:8080/events", newEvent); // Sending POST request to add event

            setEvents([...events, newEvent]); // Updating events state with new event
            setShowDatePicker(false); // Hiding date picker
            setEventDetails(''); // Clearing event details in input field

             // Reload the app after adding the event
            window.location.reload();

            // Handling error 
        } catch (error) {
            console.error("Error creating event:", error);
        }
    };

  
    

    return (
        <div>
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}  // Adding full calendar plugins for different views
                initialView={'dayGridMonth'} //Set default view for the calendar
                selectable={true}  //Allow events to be selectable
                editable={true}  //Allow events to be editable
                dayMaxEvents={true}  //If total number of events exceeds the max number of events alow pop up
                dateClick={handleDateClick}  //when the date is clicked call handleDateClick function
                eventClick={handleEventClick} //when the event is clicked call handleEventClick function
                events={"http://localhost:8080/events"} // Setting events source for FullCalendar
                eventColor= '#378006'
                eventBackgroundColor= '#378006'
                displayEventTime= 'true'
                displayEventEnd= 'true'
                eventOrder= 'start'

                // Configuring header toolbar for FullCalendar
                headerToolbar={{
                    start: 'today prev,next',  //buttons for calendar
                    center: 'title',   //display a title for the calendar
                    end: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',  // different view for calendar
                }}
                height={'90vh'}  //height of header toolbar
            />

            {/* handle add events */}
            <div className="button1" onClick={handleButtonClick}>
                Create New Event
            </div>
            {showDatePicker && (
                <div>
                    <div className='button2-container'>
                        <label>Start Time: </label>
                        <DatePicker
                            selected={startTime}
                            onChange={(date) => {
                                setStartTime(date);
                                if (endTime < date) {
                                    setEndTime(date);
                                }
                            }}
                            showTimeSelect
                            timeIntervals={15}
                            dateFormat="Pp"
                        />
                    </div>
                    <br />
                    <div className='button2-container'>
                        <label>End Time: </label>
                        <DatePicker
                            selected={endTime}
                            onChange={(date) => setEndTime(date)}
                            showTimeSelect
                            timeIntervals={15}
                            dateFormat="Pp"
                        />
                    </div>
                    <div className='button2-container'>
                        <div className="eventdetails">
                            <label>Event Details: </label>
                            <input
                                type="text"
                                placeholder="Event details"
                                value={eventDetails}  // define the data that should be stored in the database
                                onChange={(e) => setEventDetails(e.target.value)} // Update the eventDetails state with the value typed into the input field
                                style={{ width: '300px', height: '50px' }}
                            />
                        </div>
                    </div>
                    <div className='button2-container'>
                        {/* Save the newly created event to the database */}
                        <div className="button2" onClick={handleAddEvent}>
                            Save
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
