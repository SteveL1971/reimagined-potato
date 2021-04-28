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
    console.log({email, password})
    dispatch(loginRoot({email, password})) 
    // dispatch(loginToken({email, password})) 
    // dispatch(login())

    try { history.push(history.location.state.from.pathname) }
    catch { history.push('/products') }
  }

  return (
    <div>
      <div className="card formStyle">
        <div className="gradient-custom mb-3 p-2 d-flex justify-content-center orderH5">Log in</div>
          <div className="card-body px-lg-2 pt-4">
            <form className="textColor" onSubmit={e => handleSubmit(e)}>
              <div className="md-form mb-3 orderP">
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control form-control-sm" />
                <label htmlFor="email">E-mail</label>
              </div>
              <div className="md-form mb-5 orderP">
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control form-control-sm" />
                <label htmlFor="password">Password</label>
              </div>
              <div className="px-5">
                <button className="btn btn-info btn-rounded btn-block w-100" type="submit">Log in</button>
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

