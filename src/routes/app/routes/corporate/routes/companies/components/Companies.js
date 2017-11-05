import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter} from 'material-ui/Table';
import QueueAnim from 'rc-queue-anim';
import Toolbar from './Toolbar';
import BottomToolbar from './BottomToolbar';


const TableCompanies = () => (

  <article className="article">
    <Toolbar/>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableRowColumn>1</TableRowColumn>
          <TableRowColumn>John Smith</TableRowColumn>
          <TableRowColumn>Employed</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>2</TableRowColumn>
          <TableRowColumn>Randal White</TableRowColumn>
          <TableRowColumn>Unemployed</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>3</TableRowColumn>
          <TableRowColumn>Stephanie Sanders</TableRowColumn>
          <TableRowColumn>Employed</TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>4</TableRowColumn>
          <TableRowColumn>Steve Brown</TableRowColumn>
          <TableRowColumn>Employed</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  </article>
);


class Company extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (

      <div className="container-fluid with-maxwidth chapter">
        <QueueAnim type="bottom" className="ui-animate">
          <div key="1"><TableCompanies /></div>
          <BottomToolbar/>
        </QueueAnim>
      </div>
    );
  }
}


module.exports = Company;
