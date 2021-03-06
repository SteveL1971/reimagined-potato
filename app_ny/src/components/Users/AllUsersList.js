import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser, getUsers } from '../../store/actions/userActions';

const AllUsersList = ({user}) => {

  const dispatch = useDispatch();

  const handleDeleteUser = () => {
    deleteUser(user._id).then (() => {
      dispatch(getUsers())
    })
  }

  return (
    <div id="allOrderList">
      <div className="box d-flex justify-content-between bg-white mb-2 px-2">
        <div className="allOrderHeader">
          <div className={` ${(user.admin)? "gradient-custom":"gradient-custom2"} d-flex w-100 p-1 btnDelete`}>
            <Link className="w-100" to={`/adminorders/${user._id}`}>
              <div className="d-flex testing0">
                <div className="testing">
                  {
                    user.admin
                    ? <h4 className="tcol1 px-1 orderH4">Admin id: </h4>
                    : <h4 className="tcol1 px-1 orderH4">Customer id: </h4>
                  }
                  <p className="tcol2">{ user._id }</p>
                </div>
                <div className="testing">
                  <h4 className="tcol1 px-1 orderH4">Name: </h4>
                  <p className="tcol2">{ user.firstName } { user.lastName }</p>
                </div>
                <div className="testing">
                  <h4 className="tcol1 px-1 orderH4">Orders: </h4>
                  <p className="tcol2">{ user.nrOrders }</p>
                </div>
                <div className={`testing ${(user.unsent>0)? "":""}`}>
                  <h4 className={`tcol1 px-1 orderH4 ${(user.unsent>0)? "red-text":""}`}>Unsent: </h4>
                  <p className={`tcol2 ${(user.unsent>0)? "red-text":""}`}>{ user.unsent }</p>
                </div>
              </div>
            </Link>
            <div className="deleteBtn px-2">
              {
                user.admin
                  ? <div />
                  : <button onClick={e => handleDeleteUser()} className="btn btn-danger btn-sm">X</button>
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllUsersList
