
//validate Login
export const loginValidation = history => {
  return sessionStorage.getItem('userId') &&
    sessionStorage.getItem('userStatus')
    ? ''
    : history.push('/')
}
