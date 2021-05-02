import actiontypes from '../actiontypes';
import axios from '../../axios';



export const loginRoot = ({email, password}) => {
  // console.log("within loginroot", email, password)
  // const loginDetails = {email,password}
  return async dispatch => {
    const res = await axios.post('/users/login', {email,password})
    if(res.status === 200) {
      localStorage.setItem('token', res.data.token)
      dispatch(loginToken(res.data.token))
      dispatch(login())
    } 
  }
}

export const signUpRoot = newUser => {
  return async dispatch => {
    const res = await axios.post('/users/register', newUser)
    if(res.status === 201) {
      dispatch(loginRoot(newUser))
    } 
  }
}

export const loginToken = token => {
  return {
    type: actiontypes().auth.loginToken,
    payload: token
  }
}

export const login = () => {
  return {
    type: actiontypes().auth.login,
    payload: true
  }
}

export const logout = () => {
  return {
    type: actiontypes().auth.logout,
    payload: false
  }
}

export const getUserDetails = (id) => {
  return async dispatch => {
    const res = await axios.get(`/users/${id}`)
    dispatch(setUserDetails(res.data));
  }
}

export const editUserDetails = (userDetails) => {
  return async dispatch => {
    await axios.patch(`/users/${userDetails.userId}`, userDetails)
    dispatch(setUserDetails(userDetails));
  }
}

export const setUserDetails = (userDetails) => {
  return {
    type: actiontypes().auth.setUserDetails,
    payload: userDetails
  }
}