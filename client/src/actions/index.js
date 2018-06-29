import axios from 'axios'
import { UNAUTH_USER, AUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types'
const ROOT_URL = 'http://localhost:3090'

export function signinUser({email, password}) {

  return function (dispatch) {

    // submit email and password to server
    const request = axios.post(`${ROOT_URL}/signin`, {email, password})
    request
      .then(response => {
        // -Save the JWT token
        localStorage.setItem('token', response.data.token)

        // -if request is good, we need to update state to indicate user is authenticated
        dispatch({type: AUTH_USER})
      })

      // If request is bad...
      // -Show an error to the user
      .catch(() => {
        dispatch(authError('bad login info'))
      })

  }
}

export function signoutUser() {
  localStorage.removeItem('token')
  axios.get(`${ROOT_URL}/logout`)
   .then(response => console.log(response))
   .catch(err => console.log("CRAP!!!!", err))
  return {
    type: UNAUTH_USER
  }
}

export function signupUser({firstName, lastName, email, password, passwordConfirmation, homeCity}) {
  console.log(`first name is: ${firstName}`)
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signup`,
      { firstName,
        lastName,
        email,
        password,
        passwordConfirmation,
        homeCity
      })
      .then(response => {
         console.log("IN SUCCESS RESPONSE", response)
        dispatch({type: AUTH_USER})
        localStorage.removeItem('token')
        localStorage.setItem('token', response.data.token)
      })
      .catch(({response}) => {
         console.log("OH NO ERROR!", response);
        dispatch(authError(response.data.error))
      })
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function fetchMessage() {
  return function (dispatch) {
    axios.get(ROOT_URL, {
      headers: {authorization: localStorage.getItem('token')}
    })
      .then(response => {
         console.log("FETCH's MEssage: ", response.data.message)
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        })
      })
  }
}
