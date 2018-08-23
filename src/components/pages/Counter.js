import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {actionCreators} from '../../store/Counter'
import 'semantic-ui-css/semantic.min.css'
import { Form, Text, Scope } from 'informed'
import { Card, Icon, Image } from 'semantic-ui-react'

import { Button, Checkbox } from 'semantic-ui-react'

const CardForm = props => (
    <Card>
        <Form id="complex-form">
            <label htmlFor="complex-name">First name:</label>
            <Text field="name" id="complex-name" />
            <Scope scope="favorite">
                <label htmlFor="complex-color">Favorite color:</label>
                <Text field="color" id="complex-color" />
                <label htmlFor="complex-food">Favorite food:</label>
                <Text field="food" id="complex-food" />
            </Scope>
            <label htmlFor="complex-friend-0">Friend 1:</label>
            <Text field="friends[0]" id="complex-friend-0"/>
            <label htmlFor="complex-friend-1">Friend 2:</label>
            <Text field="friends[1]" id="complex-friend-1"/>
            <label htmlFor="complex-friend-2">Friend 3:</label>
            <Text field="friends[2]" id="complex-friend-2"/>
            <Button type="submit">
                Submit
            </Button>
        </Form>
    </Card>
);

export default connect(
    state => state.counter,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(CardForm)
