import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE, FETCH_CITIES, FETCH_ONE_CITY, FETCH_ONE_CITY_PENDING, FETCH_ONE_CITY_SUCCESS, FETCH_ONE_CITY_FAILURE } from '../actions/types'

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return {...state, error: '', authenticated: true}
    case UNAUTH_USER:
      return {...state, authenticated: false}
    case AUTH_ERROR:
      return {...state, error: action.payload}
    case FETCH_MESSAGE:
      return {...state, message: action.payload}
    case FETCH_CITIES:
      return {...state, cities: action.payload}
    case FETCH_ONE_CITY:
        return {...state, city: action.payload}
    case FETCH_ONE_CITY_PENDING:
        return {...state, message: "Loading city"}
    case FETCH_ONE_CITY_FAILURE:
        return {...state, error: action.payload}
    default:
      return state
  }
}
