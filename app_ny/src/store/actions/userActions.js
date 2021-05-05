import actiontypes from '../actiontypes';
import axios from '../../axios';

export const getUsers = () => {
  // const res = await axios.get(`/users/`)
  return async dispatch => {
    const res = await axios.get(`/users/`)
    console.log("get", res.data)
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
  console.log("set", users)
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

// export const deleteUser = (id) => {
//   axios.delete(`/users/delete/${id}`)
//   return async dispatch => {
//     dispatch(getUsers);
//   }
// }

// export const deleteUser = async (id) => {

//   await axios.delete(`/users/delete/${id}`)
//   const res = await axios.get(`/users/`)
//   console.log("burp: ", res.data)

//   return async dispatch => {
//     axios.get(`/users/`).then((res) => {
//       dispatch(setUsers(res.data))
//     })
//   }
// }

// export const deleteUser = async (id) => {
//   await axios.delete(`/users/delete/${id}`)
//   await axios.get(`/users/`).then(res => {
//     console.log(res.data)
//     return {
//       type: actiontypes().users.setUsers,
//       payload: res.data
//     }
//   })
// }

export const deleteUser = async (id) => {
  await axios.delete(`/users/delete/${id}`)
  // const res = await axios.get(`/users/`)
  // return async dispatch => {
  //   const res = await axios.get(`/users/`)
  //   console.log("get", res.data)
  //   dispatch(setUsers(res.data));
  // }
  return
}
