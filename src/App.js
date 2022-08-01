import React, { useState } from "react"

function App() {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [rememberMe, setRememberMe] = useState(false)
  let [emailIsValid, setEmailIsValid] = useState(false)
  let [passwordIsValid, setPasswordIsValid] = useState(false)
  let [isSubmitted, setIsSubmitted] = useState(false)

  const handleEmailChange = (e) => {
    const value = e.target.value
    const regEx = new RegExp(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    const isValid = regEx.test(value)
    setEmailIsValid(emailIsValid = isValid)

    setEmail((value))
  }

  const handlePasswordChange = (e) => {
    const value = e.target.value
    const isValid = value.length > 5
    setPasswordIsValid(passwordIsValid = isValid)

    setPassword((password = value))
    console.log(password)
    console.log(passwordIsValid)
  }

  const handleRememberMeChange = () => {
    setRememberMe(rememberMe === true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let allIsValid = passwordIsValid && emailIsValid
    setIsSubmitted(isSubmitted = allIsValid)
    console.log(email)
    console.log(password)
  }

  const emailInputClass = emailIsValid ? "is-valid" : "is-invalid"
  const passwordInputClass = passwordIsValid ? "is-valid" : "is-invalid"


  return (
    <>
    
      <h1 className="mt-5 text-center">Login</h1>

      <div className="container d-flex justify-content-center mt-5">
        {isSubmitted ? (
          <div>
            <p>Welcome! You are logged as {email}</p>
          </div>
        ) : (
          <form className="col-10" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className={`form-control ${emailInputClass}`}
                id="email"
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${passwordInputClass}`}
                id="password"
                onChange={handlePasswordChange}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="remember-me"
                onChange={handleRememberMeChange}
              />
              <label className="form-check-label" htmlFor="remember-me">
                Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </div>

    </>
  )
}


export default App;