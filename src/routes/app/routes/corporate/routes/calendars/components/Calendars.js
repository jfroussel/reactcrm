import React from 'react';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import FullCalendar from 'fullcalendar-reactwrapper';
import events from './events';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        events:events
    };
  }

  render() {
    return (
      <div id="calendar" >
        <FullCalendar
          id = "your-custom-ID"
          header = {{
            left: 'prev,next today myCustomButton',
            center: 'title',
            right: 'month,basicWeek,basicDay'
          }}
          defaultDate={'2017-09-12'}
          navLinks= {true}
          editable= {true}
          eventLimit= {true}
          events = {this.state.events}
        />
      </div>
    );
  }
}

export default Calendar;
