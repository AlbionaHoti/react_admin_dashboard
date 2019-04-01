import React, { Component } from "react";

import {
  Button,
  Grid,
  Header,
  Segment
} from "semantic-ui-react";

export default class NotificationContent extends Component {
  state = {};
  render() {
    const patients = [
      {
        name: "Elliot Fu",
        bio: "Elliot has been a member since July 2012",
        button: "More Info"
      },
      {
        name: "James Frank",
        bio: "James has been a member since Sep 2011",
        button: "More Info"
      },
      {
        name: "Algo Hemil",
        bio: "Algo has been a member since Nov 2015",
        button: "More Info"
      }
    ];

    return (
      <Grid.Column textAlign='center'>
        {patients.map(patient => (

          <Segment>
            <Header as='h4'>Basic Plan</Header>
            <p>
              {patient.bio}
            </p>
            <Button>{patient.button}</Button>
          </Segment>
        ))}
      </Grid.Column>
    );
  }
}
