const validationRules = {
  login: {
    email: 'required|email',
    password: 'required',
    confirmPassword:'required'
  },
  searchArticle:{
    title:'required'
  }

}

export default validationRules
