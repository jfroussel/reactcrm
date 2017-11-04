import React from 'react';
import { Jumbotron, Button } from 'reactstrap';


class Calendar extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      title: "Section Calendar",
      lead:"This is a simple hero unit, a simple Jumbotron-style component for calling extra attention\n" +
      "            to featured content or information.",
      message:"It uses utility classes for typgraphy and spacing to space content out within the larger container.",
      btnMessage:"Learn more"
    };
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">{this.state.title}</h1>
          <p className="lead">{this.state.lead}</p>
          <hr className="my-2"/>
          <p>{this.state.message}</p>
          <p className="lead">
            <Button color="primary">{this.state.btnMessage}</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }

}

export default Calendar;




