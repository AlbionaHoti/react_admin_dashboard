import React, { Component } from "react";

import {
  Button,
  Grid,
  Header,
  Divider
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
        name: "Stevie Feliciano",
        bio: "Stevie has been a member since August 2013",
        button: "More Info"
      },
      {
        name: "Matt",
        bio: "Matt has been a member since July 2014",
        button: "More Info"
      }
    ];

    return (
        <Grid centered divided rows={3}>
        {patients.map(patient => (
          <Grid.Row width={4} textAlign="center">
                <div>
                  <Header as="h4">{patient.name}</Header>
                  <p>{patient.bio}</p>
                  <Button>{patient.button}</Button>
                  <Divider />
                </div>
          </Grid.Row>
          ))}
        </Grid>
    );
  }
}
