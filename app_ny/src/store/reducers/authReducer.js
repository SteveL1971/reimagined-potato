import actiontypes from '../actiontypes';
// import axios from '../../axios';
import jwt_decode from "jwt-decode";

const initState = {
  isAuthenticated: false,
  token: null,
  userDetails: {
    firstName: '',
    lastName: '',
    email: '',
  },
  loggedInUser:{
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    exp: ''
  }
}

const authReducer = (state = initState, action) => {

  switch(action.type) {

    case actiontypes().auth.login:
      let authorised = false
      if(state.token){
        authorised=true
        const decoded = jwt_decode(state.token)
        var user = {
          id: decoded.id,
          firstName: decoded.firstName,
          lastName: decoded.lastName,
          email: decoded.email,
          exp: decoded.exp
        }
      } else {
        console.log("false")
        authorised=false
        user= {
          id: '',
          firstName: '',
          lastName: '',
          email: '',
          exp: '',
        }
      }

      return  {
        ...state,
        loggedInUser: user,
        isAuthenticated: authorised 
      }

    case actiontypes().auth.loginToken:
        return  {
          ...state,
          token: action.payload
        }
      // })
   
    case actiontypes().auth.logout:
      localStorage.removeItem('token')
      // state.token = null
      // state.isAuthenticated = action.payload
      const clearUser= {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        exp: '',
      }
      return {
        ...state,
        token: null,
        loggedInUser: clearUser,
        isAuthenticated: false
      }

      case actiontypes().auth.setUserDetails:
        console.log(action.payload)
        return {
          ...state,
          userDetails: action.payload
        }
      
    default:
      return state
  }
}

export default authReducer;