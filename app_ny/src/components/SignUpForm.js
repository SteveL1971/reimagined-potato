import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpRoot } from '../store/actions/authenticate';
import { useHistory, Link } from 'react-router-dom'

const SignUpForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      firstName,
      lastName,
      email,
      password
    }
    dispatch (signUpRoot(newUser))

    history.push('/')

  }

  return (
    <div className="maxWidth d-flex margin-auto">
      <form className="card formStyle row" onSubmit={e => handleSubmit(e)}>
        <div className="gradient-custom mb-3 p-2 d-flex justify-content-center orderH5">Sign up as a new customer</div>
          <div className="col p-2 mt-3">
            <div className="row">
              <div className="mb-2 col-12 orderP">
                <input type="text" id="cfirstname" value={firstName} onChange={e => setFirstName(e.target.value)} className="form-control form-control-sm" />
                <label htmlFor="cfirstname">First name</label>
              </div>
              <div className="mb-2 col-12 orderP">
              <input type="text" id="clastname" value={lastName} onChange={e => setLastName(e.target.value)} className="form-control form-control-sm" />
              <label htmlFor="clastname">Surname</label>
              </div>
            </div>
            <div className="mb-2 col-12 orderP">
              <input type="email" id="cemail" value={email} onChange={e => setEmail(e.target.value)} className="form-control form-control-sm" />
              <label htmlFor="cemail">E-mail</label>
            </div>
            <div className="mb-2 col-12 orderP">
              <input type="password" id="cpassword" value={password} onChange={e => setPassword(e.target.value)} className="form-control form-control-sm" />
              <label htmlFor="cpassword">Enter a password</label>
            </div>
          </div>
          <div className="px-5 col-12">
          <button className="btn btn-info w-100 waves-effect z-depth-0">Sign up</button>
          <div className="d-flex justify-content-center my-4">
            <p>Already a member? <Link to="/signin">Log in</Link></p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm

