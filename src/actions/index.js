import axios from 'axios'
import { AUTH_USER, AUTH_ERROR } from './types'

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3050/signup', formProps)
    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    })
    localStorage.setItem('token', response.data.token)
    callback()
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: 'Email is already in use!' })
  }
}

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3050/signin', formProps)
    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    })
    localStorage.setItem('token', response.data.token)
    callback()
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid credentials!' })
  }
}

export const signout = payload => {
  localStorage.removeItem('token')
  return {
    type: AUTH_USER,
    payload: ''
  }
}
