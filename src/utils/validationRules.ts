const validationRules = {
  login: {
    email: 'required|email',
    password: 'required',
    confirmPassword: 'required',
    fullName: 'required|alpha_space'
  },
  searchArticle: {
    title: 'required'
  }
}

export default validationRules
