import actiontypes from '../actiontypes';
import axios from '../../axios';



export const loginRoot = loginDetails => {
  return async dispatch => {
    const res = await axios.post('/users/login', loginDetails)
    console.log("res:", res)
    if(res.status === 200) {
      localStorage.setItem('token', res.data.token)
      dispatch(loginToken(res.data.token))
      dispatch(login())
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