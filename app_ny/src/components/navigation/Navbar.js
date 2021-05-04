import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/actions/authenticate';
import { emptyCart } from '../../store/actions/cartActions';
import { emptyOrders } from '../../store/actions/ordersActions';
import { useHistory } from 'react-router-dom'

import logo from '../../assets/img/logo3.png'
import imgSuperman from '../../assets/img/superman.png'
import imgBelle from '../../assets/img/belle.png'
import imgCobain from '../../assets/img/cobain.png'
import imgSauron from '../../assets/img/sauron.png'
import imgDaenerys from '../../assets/img/daenerys.png'

const Navbar = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  const loggedInUser = useSelector(state => state.auth.loggedInUser)
  const counter = useSelector(state => state.cartReducer.cartCounter)
  const history = useHistory();

  const signOut = (e) => {
    e.preventDefault()
    dispatch(logout())
    dispatch(emptyCart())
    dispatch(emptyOrders())

    try { history.push(history.location.state.from.pathname) }
    catch { history.push('/') }
  }

  return (
    <nav className="maxWidth d-flex margin-auto">

      <div className="gradient-custom3">
            <div className="navLeft">
              <NavLink exact to="/" className="navLogo col">
                <img src={ logo } className="imgStyle" alt="logo"></img>
              </NavLink>
              { isAuth 
                ? <div className="navLeftText">
                  {/* <div>Hi { loggedInUser.firstName }!</div> */}
                  </div>
                : <div />
              }
            </div>
          </div>

          <div className="">
            <div className="navRight">
              <div className="container-fluid">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <div
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={imgSuperman} className="imgMini" alt="Superman"></img>
                      Meny
                    </div>
                    <ul className="dropdown-menu gradient-custom3 bg-black dropdown-menu-end" aria-labelledby="navbarDropdown">
                      <li>
                        <NavLink exact to="/" className="link dropdown-item" activeClassName="active-link"><img src={ imgSuperman} className="imgMini" alt="PImage3"></img>Home</NavLink>
                      </li>
                      <li><hr className="dropdown-divider" /></li>
                      { !isAuth ?
                        <div>
                          <li>
                            <NavLink exact to="/signin" className="link dropdown-item" activeClassName="active-link"><img src={ imgBelle} className="imgMini" alt="Belle"></img>Sign In</NavLink>
                          </li>
                          <li>
                            <NavLink exact to="/signup" className="link dropdown-item" activeClassName="active-link"><img src={ imgDaenerys} className="imgMini" alt="Daenerys"></img>Sign Up</NavLink>
                          </li>
                        </div>
                        :
                        <div></div>
                      }
                      <li>
                        <NavLink exact to="/orders" className="link dropdown-item" activeClassName="active-link"><img src={ imgCobain} className="imgMini" alt="Cobain"></img>My Orders</NavLink>
                      </li>

                      
                      <li>
                        <NavLink exact to="/products" className="link dropdown-item" activeClassName="active-link"><img src={ imgSauron} className="imgMini" alt="Sauron"></img>Products</NavLink>
                      </li>
                      { loggedInUser.admin 
                        ? <div>
                            <li><hr className="dropdown-divider" /></li>
                            <li><NavLink exact to="/adminorders" className="link dropdown-item" activeClassName="active-link"><img src={ imgCobain} className="imgMini" alt="Cobain"></img>Admin orders</NavLink></li>
                          </div>
                        : <div />
                      }
                      { loggedInUser.admin 
                        ? <div>
                            <li><NavLink exact to="/adminusers" className="link dropdown-item" activeClassName="active-link"><img src={ imgCobain} className="imgMini" alt="Cobain"></img>Admin users</NavLink></li>
                          </div>
                        : <div />
                      }
                      { isAuth 
                        ? <div>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a href="/#" className="link dropdown-item" onClick={e => signOut(e)}><img src={ imgBelle } className="imgMini" alt="Belle"></img>Log out</a></li>
                          </div>
                        : <div />
                      }
                    </ul>
                  </li>
                </ul>
              </div>
              <NavLink className="link d-flex basketDiv" exact to="/cart">
                <i className="fas fa-shopping-cart basket" />
                { isAuth 
                  ? <div className="basketCount">{ counter }</div>
                  : <div className="basketInv" />
                }
                
                {/* <div className="{basketShow: !populate}" className="basketCount">{count}</div> */}
                
              </NavLink> 

            </div>
          </div>
    </nav>
  )
}

export default Navbar