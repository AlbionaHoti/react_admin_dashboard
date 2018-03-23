import React, { Component } from "react";
import {
  Button,
  Form,
  Header,
  Icon,
  Input,
  Message,
  Segment,
  Table
} from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/UserManagement";
import { connect } from "react-redux";

class UserManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        name: "",
        email: "",
        role: "",
        caloryLimit: 0
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getTableData = props => {
    return props.state.userManagement.users.filter(user => {
        return user.name.includes(props.state.searchStore.text)
    }).map(user => <Table.Row>
        <Table.Cell>
          {user.name +
            (user.password
              ? ' | Pass: "' + user.password + '" !!Attention'
              : "")}
        </Table.Cell>
        <Table.Cell>{user.email}</Table.Cell>
        <Table.Cell>{user.role}</Table.Cell>
        <Table.Cell>{user.caloryLimit}</Table.Cell>
        <Table.Cell>
          <Button onClick={() => this.selectUserForEditing(user.id)} size="mini" icon>
            <Icon name="pencil" />
          </Button>
          <Button onClick={() => this.deleteUser(user.id)} color="red" size="mini" icon>
            <Icon name="delete" />
          </Button>
        </Table.Cell>
      </Table.Row>);
  };

  deleteUser = id => {
    this.props.removeUser(id);
  };

  selectUserForEditing = id => {
    let user = this.props.state.userManagement.users.find(v => v.id === id);

    this.setState({
      newUser: user
    });
  };

  handleSubmit = () => {
    if (this.state.newUser.id) this.props.editUser(this.state.newUser);
    else this.props.addUser(this.state.newUser);

    this.clearUserForm();
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      newUser: Object.assign({}, this.state.newUser, {
        [name]: value
      })
    });
  };

  onDropdownSelection = (e, { value }) => {
    this.setState({
      newUser: Object.assign({}, this.state.newUser, {
        role: value
      })
    });
  };

  clearUserForm = () => {
    this.setState({
      newUser: {
        name: "",
        email: "",
        role: "",
        caloryLimit: 0
      }
    });
  };

  render() {
    if (!this.props.state.userManagement.users) {
      return <Message>USERMNG Loading</Message>;
    }
    return [
      <Segment>
        <Header>Registered Users</Header>
        <Table compact celled>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Role</Table.HeaderCell>
              <Table.HeaderCell>Calory Limit</Table.HeaderCell>
              <Table.HeaderCell width={2}>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{this.getTableData(this.props)}</Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan={5} />
            </Table.Row>
          </Table.Footer>
        </Table>
      </Segment>,
      <Segment>
        <Form>
          <Form.Group unstackable widths={2}>
            <Form.Field>
              <label>Username</label>
              <Input
                type="text"
                name="name"
                value={this.state.newUser.name}
                onChange={this.handleChange}
                placeholder="Enter name..."
              />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <Input
                type="text"
                name="email"
                value={this.state.newUser.email}
                onChange={this.handleChange}
                placeholder="Enter email..."
              />
            </Form.Field>
          </Form.Group>

          <Form.Group unstackable widths={2}>
            <Form.Field>
              <label>Role</label>
              <Input
                type="text"
                onChange={this.handleChange}
                name="role"
                value={this.state.newUser.role}
                placeholder="Enter role..."
              />
            </Form.Field>
            <Form.Field>
            <label>Calory Limit</label>
            <Input
              type="number"
              onChange={this.handleChange}
              name="caloryLimit"
              value={this.state.newUser.caloryLimit}
              placeholder="Select Calory Limit"
              fluid
            />
            </Form.Field>
          </Form.Group>
          <Button primary type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
          <Button onClick={this.clearUserForm}>Clear</Button>
        </Form>
      </Segment>
    ];
  }
}


export default connect(
  state => {
    const { searchStore, userManagement } = state;
    return {
      state: { searchStore, userManagement }
    };
  },
  dispatch => bindActionCreators(actionCreators, dispatch)
)(UserManagement);
