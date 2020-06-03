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

  export const saveArticle =(dispatch:any,params:any)=>
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
    })
    .catch((error)=> { 
      loaderService.hide("Loader2")
      dispatch({
        type:actionType.SAVEARTICLES,
        payload:error.response
      })
  })
  }
