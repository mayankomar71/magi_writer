import actionType from "./actionTypes";
import axios from "axios";
import {loaderService} from '../general/loader/loader.service'
export const loginAction = (dispatch: any, params: any, history:any) => {

  let url = "http://ec2-13-234-75-34.ap-south-1.compute.amazonaws.com:8088/api/user/login";
  loaderService.show("Loader2")
  axios.post(url,params)
    .then((response: any) => {
      loaderService.hide("Loader2")
      dispatch({
        type: actionType.LOGINACTION,
        payload: response
      })
      sessionStorage.setItem('userId',response.data.data[0].id)
      sessionStorage.setItem('userStatus',response.data.data[0].status);
      sessionStorage.setItem('emailId',response.data.data[0].email.split("@")[0])
      history.push('/dashboard')
    })
    .catch((error)=> { 
      loaderService.hide("Loader2")
      dispatch({
        type:actionType.LOGINACTION,
        payload:error.response
      })
      })
}

export const signupAction = (dispatch: any, params: any) => {

  let url = "http://ec2-13-234-75-34.ap-south-1.compute.amazonaws.com:8088/api/user/register";
  loaderService.show("Loader2")
  axios.post(url,params)
    .then((response: any) => {
      loaderService.hide("Loader2")
      dispatch({
        type: actionType.SIGNUPACTION,
        payload: response
      })
    })
    .catch((error)=> {
      loaderService.hide("Loader2")
      dispatch({
        type:actionType.SIGNUPACTION,
        payload:error.response
      })
    })
}
export const checkEmail = (dispatch: any, params: any) => {

  let url = "http://ec2-13-234-75-34.ap-south-1.compute.amazonaws.com:8088/api/user/checkemail";
  loaderService.show("Loader2")
  axios.post(url,params)
    .then((response: any) => {
      loaderService.hide("Loader2")
      dispatch({
        type: actionType.CHECKUSERACTION,
        payload: response
      })
    })
    .catch((error)=> {
      loaderService.hide("Loader2")
      dispatch({
        type:actionType.CHECKUSERACTION,
        payload:error.response
      })
    })
}