import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import walker from '../assets/img/rv-walker.jpg'

const Home = () => {

    const isAuth = useSelector(state => state.auth.isAuthenticated)

    return (
    <div className="contain">
        <div className="container style404 w-75">
            <h2 className="text-center">Welcome to Funko store</h2>
            <div className="links d-flex justify-content-center my-2">
                <p className="mb-3 text-center">Here at Funko Store we would like to think of ourselves as your favorite friendly Funko-Pop resource. We are prepared to go the extra mile for you, and rest assured we will put in plenty of extra effort to ensure that we always keep you up to date with the latest hype and releases. Like you we understand the potential value of collectibles, and the pleasure and excitement that collecting can bring. We intend to do our very best to provide you with the highest quality service, and we also hope you will find our sortiment of both rare and regular Funko-Pops to your satisfaction. Please sign in already to start browsing our extensive selection of Funko Pops!</p>
                { !isAuth 
                    ?   <div>
                            <p className="text-center">Already a member? <Link to="/signin">Log in</Link></p>
                            <p className="text-center">Not a member? <Link to="/signup">Sign up</Link></p>
                        </div>
                    :   <div />
                }
            </div>
            <img src={ walker } className="imgStyle my-3" alt="RV-Walker" />  
        </div>
    </div>
    )
}

export default Home
