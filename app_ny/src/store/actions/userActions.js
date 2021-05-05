import actiontypes from '../actiontypes';
import axios from '../../axios';

export const getUsers = () => {
  return async dispatch => {
    const res = await axios.get(`/users/`)
    dispatch(setUsers(res.data));
  }
}

// export const getUsers = () => {
//   return async dispatch => {
//     const res = await axios.get(`/users/`)
//     console.log("get", res.data)
//     dispatch(setUsers(res.data));
//   }
// }

export const setUsers = (users) => {
  return {
    type: actiontypes().users.setUsers,
    payload: users
  }
}

export const deleteUser = async (id) => {
  await axios.delete(`/users/delete/${id}`)
}
