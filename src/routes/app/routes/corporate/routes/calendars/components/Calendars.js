import React from 'react';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import FullCalendar from 'fullcalendar-reactwrapper';
import './fullcalendarCustom.css';
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
            right: 'prevYear,month,basicWeek,basicDay,nextYear,close',
          }}
          footer={{right:'nextYear'}}
          defaultDate={'2017-09-12'}
          navLinks= {true}
          editable= {true}
          eventLimit= {true}
          events = {this.state.events}
          locale={'fr'}
        />
      </div>
    );
  }
}

export default Calendar;
