import React from 'react';
import { connect } from 'react-redux';
import {Button} from "semantic-ui-react";

const ClickButton = props => (
    <Button>
        Click me!
    </Button>
);

export default connect()(ClickButton);
