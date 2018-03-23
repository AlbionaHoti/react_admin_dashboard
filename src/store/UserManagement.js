const GET_ALL_USERS_ACTION = "GET_ALL_USERS";
const DELETE_USER_ACTION = "DELETE_USER";
const UPDATE_USER_ACTION = "UPDATE_USER";
const ADD_USER_ACTION = "ADD_USER";

const initialState = {
  users: [
    {
      name: "Albiona",
      email: "alb@gmail.com",
      role: "Admin",
      caloryLimit: 123
    },
    {
      name: "Albiona",
      email: "alb@gmail.com",
      role: "Admin",
      caloryLimit: 123
    },
    {
      name: "Albiona",
      email: "alb@gmail.com",
      role: "Admin",
      caloryLimit: 123
    }
  ]
};

export const actionCreators = {
  getUsers: () => async (dispatch, getState) => {
    // dispatch({ type: GET_ALL_USERS_ACTION, users: json });
  },
  removeUser: id => async (dispatch, getState) => {
    dispatch({
      type: DELETE_USER_ACTION,
      users: getState().userManagement.users.filter(m => m.id !== id)
    });
  },
  editUser: user => async (dispatch, getState) => {
    dispatch({
      type: UPDATE_USER_ACTION,
      users: getState().userManagement.users.map(
        m => (m.id === user.id ? user : m)
      )
    });
  },
  addUser: user => async (dispatch, getState) => {
    dispatch({
      type: ADD_USER_ACTION,
      user: Object.assign({}, user, { id: Math.random() })
    });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === GET_ALL_USERS_ACTION) {
    return { ...state, users: action.users };
  }
  if (action.type === DELETE_USER_ACTION) {
    return { ...state, users: action.users };
  }
  if (action.type === UPDATE_USER_ACTION) {
    return { ...state, users: action.users };
  }
  if (action.type === ADD_USER_ACTION) {
    return { ...state, users: [...state.users, action.user] };
  }

  return state;
};
