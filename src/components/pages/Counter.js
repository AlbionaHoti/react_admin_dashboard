import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {actionCreators} from '../../store/Counter'
import 'semantic-ui-css/semantic.min.css'
import {Card, Icon, Image} from 'semantic-ui-react'

const Counter = props => (
    <Card>
        <Image src='/assets/images/avatar/large/matthew.png'/>
        <Card.Content>
            <Card.Header>
                Matthew
            </Card.Header>
            <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
            </Card.Meta>
            <Card.Description>
                Matthew is a musician living in Nashville.
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user'/>
                22 Friends
            </a>
        </Card.Content>
    </Card>
);

export default connect(
    state => state.counter,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Counter)
