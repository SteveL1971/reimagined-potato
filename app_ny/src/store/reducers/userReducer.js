import actiontypes from '../actiontypes';

let initState = {
  users: [],
}

const userReducer = (state = initState, action) => {

  switch(action.type) {
    
    case actiontypes().users.getUsers:
      return {
        ...state,
        users: action.payload
      }

    case actiontypes().users.setUsers:
      return {
        ...state,
        users: action.payload
      }

    default:
      return state;
  }

}

export default userReducer;