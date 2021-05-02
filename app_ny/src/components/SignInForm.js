import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { loginToken, login } from '../store/actions/authenticate';
import { loginRoot } from '../store/actions/authenticate';
import { useHistory, Link } from 'react-router-dom'

const SignInForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginRoot({email, password})) 
    history.push('/products') 
  }

  return (
    <div id="signIn" className="margin-auto w-100">
      <div className="card formStyle row">
        <div className="gradient-custom mb-3 p-2 d-flex justify-content-center headerH5">Log in</div>
          <div className="card-body px-3 pt-4">
            <form className="textColor" onSubmit={e => handleSubmit(e)}>
              <div className="md-form mb-3 orderH5">
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control form-control-sm" />
                <label htmlFor="email">E-mail</label>
              </div>
              <div className="md-form mb-5 orderP">
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control form-control-sm" />
                <label htmlFor="password">Password</label>
              </div>
              <div className="px-5">
                <button className="btn btn-info btn-block w-100" type="submit">Log in</button>
              </div>
              <div className="d-flex justify-content-center my-4">
                <p>Not a member? <Link to="/signup">Sign up</Link></p>
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default SignInForm

