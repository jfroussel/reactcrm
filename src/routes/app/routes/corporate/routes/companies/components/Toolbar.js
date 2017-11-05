import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar>
        <ToolbarTitle text="Companies List" />
        <ToolbarGroup firstChild>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Show Customers" />
            <MenuItem value={2} primaryText="Show  Prospects" />
            <MenuItem value={3} primaryText="Show partners" />
          </DropDownMenu>
          <RaisedButton href="#/app/corporate/companies/create" label="Create Company" primary  />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarSeparator />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

const ToolbarSection = () => (
    <ToolbarExamplesSimple />
);


export default  ToolbarSection;

