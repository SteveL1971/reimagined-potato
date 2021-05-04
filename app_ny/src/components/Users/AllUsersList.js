import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../store/actions/userActions';
import { getUsers } from '../../store/actions/userActions';


const AllUsersList = ({user}) => {

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUsers());
  // }, [dispatch])

  const handleDeleteUser = () => {
    deleteUser(user._id)
    dispatch(getUsers())
  }

    return (
      
        <div id="allOrderList">
          <div className="box d-flex justify-content-between bg-white mb-2 px-2">
            <div className="allOrderHeader">
              <div className="gradient-custom2 d-flex p-1 btnDelete">
                <Link to={`/adminorders/${user._id}`}>
                  <div className="row">
                    <div className="col-12 row testing">
                      <h4 className="headerH4 col-4">Customer id: </h4>
                      <p className="col">{ user._id }</p>
                    </div>
                    <div className="col-12 row testing">
                      <h4 className="headerH4 d-flex col-4">Name: </h4>
                      <p className="col">{ user.firstName } { user.lastName }</p>
                    </div>
                    <div className="col-12 row testing">
                      <h4 className="headerH4 d-flex col-4">Orders: </h4>
                      <p className="col">{ user.nrOrders }</p>
                    </div>
                  </div>
                </Link>
                <div className="p-1">
                  <button onClick={e => handleDeleteUser()} className="btn btn-danger btn-sm">X</button>
                </div>
              </div>
              
              {/* { order.cart.map((product, index) => <OrdersRows key={index} product={product} />) }                 */}
            </div>
          </div>
        </div>
      
  
    )
}

export default AllUsersList
