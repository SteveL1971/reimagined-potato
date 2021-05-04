import actiontypes from '../actiontypes';
import axios from '../../axios';

export const getUsers = () => {
  return async dispatch => {
    const res = await axios.get(`/users/`)
    dispatch(setUsers(res.data));
  }
}

export const setUsers = (users) => {
  return {
    type: actiontypes().users.setUsers,
    payload: users
  }
}

// export const setAllOrders = (orders) => {
//   return {
//     type: actiontypes().orders.setAllOrders,
//     payload: orders
//   }
// }

export const deleteUser = (id) => {
  axios.delete(`/users/delete/${id}`)
  return async dispatch => {
    dispatch(getUsers);
  }
}
