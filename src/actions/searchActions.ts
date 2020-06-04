import actionType from "./actionTypes";
import axios from "axios";
import {loaderService} from '../general/loader/loader.service';

export const  getArticles = (dispatch: any, params: any) => {

    let url = "http://ec2-13-234-75-34.ap-south-1.compute.amazonaws.com:8088/api/user/articalList";
    loaderService.show("Loader2")
    axios.post(url,params)
      .then((response: any) => {
        loaderService.hide("Loader2")
        dispatch({
          type: actionType.GETARTICLES,
          payload: response
        })
      })
      .catch((error)=> { 
        loaderService.hide("Loader2")
        dispatch({
          type:actionType.GETARTICLES,
          payload:error.response
        })
    })
  }

  export const saveArticle =(dispatch:any,params:any ,history)=>
  {
    let url="http://ec2-13-234-75-34.ap-south-1.compute.amazonaws.com:8088/api/user/addArticalDetails";
    loaderService.show("Loader2")
    axios.post(url,params)
    .then((response: any) => {
      loaderService.hide("Loader2")
      dispatch({
        type: actionType.SAVEARTICLES,
        payload: response
      })
      history.push('/dashboard')
    })
    .catch((error)=> { 
      loaderService.hide("Loader2")
      dispatch({
        type:actionType.SAVEARTICLES,
        payload:error.response
      })
  })
  }
  export const  getuserArticles = (dispatch: any, params: any) => {

    let url = `http://ec2-13-234-75-34.ap-south-1.compute.amazonaws.com:8088/api/user/getUserData?userId=${params.userId}`;
    
    loaderService.show("Loader2")
    axios.get(url)
      .then((response: any) => {
        loaderService.hide("Loader2")
        dispatch({
          type: actionType.GETUSERARTICLES,
          payload: response
        })
      })
      .catch((error)=> { 
        loaderService.hide("Loader2")
        dispatch({
          type:actionType.GETUSERARTICLES,
          payload:error.response
        })
    })
  }
  export const  deleteArticle = (dispatch: any, params: any) => {

    let url = `http://ec2-13-234-75-34.ap-south-1.compute.amazonaws.com:8088/api/user/deleteArtical`;
    
    loaderService.show("Loader2")
    axios.delete(url,{data:params})
      .then((response: any) => {
        loaderService.hide("Loader2")
        dispatch({
          type: actionType.DELETEARTICLE,
          payload: response
        })
      })
      .catch((error)=> { 
        loaderService.hide("Loader2")
        dispatch({
          type:actionType.DELETEARTICLE,
          payload:error.response
        })
    })
  }