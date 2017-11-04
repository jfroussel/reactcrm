import React from 'react';
import { Route } from 'react-router-dom';

import Calendars from './routes/calendars/'
import Companies from './routes/companies/'
import Contacts from './routes/contacts/'
import Folders from './routes/folders/'
import Projects from './routes/projects/'
import Tasks from './routes/tasks/'



const Corporate = ({ match }) => (
  <div>
    <Route path={`${match.url}/calendars`} component={Calendars}/>
    <Route path={`${match.url}/contacts`} component={Contacts}/>
    <Route path={`${match.url}/companies`} component={Companies}/>
    <Route path={`${match.url}/folders`} component={Folders}/>
    <Route path={`${match.url}/projects`} component={Projects}/>
    <Route path={`${match.url}/tasks`} component={Tasks}/>
  </div>
)

export default Corporate;
