import React from 'react';
import { connect } from 'react-redux';
import {Segment} from "semantic-ui-react";

const Home = props => (
  <Segment>
    <h1>React Admin Dashboard</h1>
  </Segment>
);

export default connect()(Home);
