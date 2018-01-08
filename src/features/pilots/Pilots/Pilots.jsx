import React, { Component } from 'react';
import { connect } from 'react-redux'
import PilotsList from "../PilotsList";
import PilotDetails from "../PilotDetails";
import {
  Grid,
  // Table,
  Segment,
  Header,
  // Form,
  // Dropdown
} from 'semantic-ui-react';

const pilots = [
    {
        name : "Natasha Kerensky",
        rank : "Captain",
        age : 52,
        gunnery : 2,
        piloting : 3,
        mechType : "WHM-6R",
    }
];


// const RANKS = [
//   {
//     value: 'Private',
//     text: 'Private'
//   }, {
//     value: 'Corporal',
//     text: 'Corporal'
//   }, {
//     value: 'Sergeant',
//     text: 'Sergeant'
//   }, {
//     value: 'Lieutenant',
//     text: 'Lieutenant'
//   }, {
//     value: 'Captain',
//     text: 'Captain'
//   }, {
//     value: 'Major',
//     text: 'Major'
//   }, {
//     value: 'Colonel',
//     text: 'Colonel'
//   }
// ];

// const MECHS = [
//   {
//     value: 'WHM-6R',
//     text: 'Warhammer WHM-6R'
//   }
// ];

export class Pilots extends Component {
  state = {
    pilots: pilots,
  }

  render() {
    const { pilots } = this.state;
    // Use the first pilot as the "current" one for display, if available.
    const currentPilot = pilots[0] || {};
    return (
      <Segment>
        <Grid>
          <Grid.Column width={10}>
            <Header as="h3">Pilot List</Header>
            <PilotsList pilots={pilots} />
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as="h3">Pilot Details</Header>
            <Segment >
              <PilotDetails pilot={currentPilot} />
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
  // return (<Segment>
  //   <Grid>
  //     <Grid.Column width={10}>
  //       <Header as='h3'>Pilot List</Header>
  //       <Table celled>
  //
  //         <Table.Header>
  //           <Table.Row>
  //             <Table.HeaderCell width={5}>
  //               Name
  //             </Table.HeaderCell>
  //             <Table.HeaderCell width={3}>
  //               Rank
  //             </Table.HeaderCell>
  //             <Table.HeaderCell width={2}>
  //               Age
  //             </Table.HeaderCell>
  //             <Table.HeaderCell width={2}>
  //               Skills
  //             </Table.HeaderCell>
  //             <Table.HeaderCell width={4}>
  //               Mech
  //             </Table.HeaderCell>
  //
  //           </Table.Row>
  //         </Table.Header>
  //         <Table.Body>
  //           <Table.Row>
  //             <Table.Cell>
  //               Natasha Kerensky
  //             </Table.Cell>
  //             <Table.Cell>
  //               Captain
  //             </Table.Cell>
  //             <Table.Cell>
  //               52
  //             </Table.Cell>
  //             <Table.Cell>
  //               2/3
  //             </Table.Cell>
  //             <Table.Cell>
  //               WHM-6R
  //             </Table.Cell>
  //           </Table.Row>
  //         </Table.Body>
  //
  //       </Table>
  //     </Grid.Column>
  //     <Grid.Column width={6}>
  //       <Header as='h3'>Pilot Details</Header>
  //       <Segment >
  //         <Form size='large'>
  //           <Form.Field name='name' width={16}>
  //             <label>Name</label>
  //             <input placeholder='Name' value='Natasha Kerensky' readOnly/>
  //           </Form.Field>
  //           <Form.Field name='rank' width={16}>
  //             <label>Rank</label>
  //             <Dropdown fluid selection options={RANKS} value='Colonel'/>
  //           </Form.Field>
  //           <Form.Field name='age' width={6}>
  //             <label>Age</label>
  //             <input placeholder='Age' value='52' readOnly/>
  //           </Form.Field>
  //           <Form.Field name='gunnery' width={6}>
  //             <label>Gunnery</label>
  //             <input value='2' readOnly/>
  //           </Form.Field>
  //           <Form.Field name='piloting' width={6}>
  //             <label>Piloting</label>
  //             <input value='3' readOnly/>
  //           </Form.Field>
  //           <Form.Field name='mech' width={16}>
  //             <label>Mech</label>
  //             <Dropdown fluid selection options={MECHS} value='WHM-6R'/>
  //           </Form.Field>
  //         </Form>
  //       </Segment>
  //     </Grid.Column>
  //   </Grid>
  // </Segment>)
}

export default connect()(Pilots);
