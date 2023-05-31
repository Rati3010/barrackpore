
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
// import '@fullcalendar/core/main.css';
// import '@fullcalendar/daygrid/main.css';
// import '@fullcalendar/timegrid/main.css';
import RenderEvent from './components/RenderEvent';

const events = [
  { title: 'Meeting', start: new Date() }
]
function App() {
  return (
    <div className="App">
      <h1>Demo App</h1>
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView='timeGridWeek'
        weekends={false}
        events={events}
        eventContent={RenderEvent}
      />
    </div>
  );
}

export default App;
