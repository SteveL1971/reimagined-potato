import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AllUsersList from './AllUsersList';
import AllUsersHeader from './AllUsersHeader';
import UsersEmpty from './UsersEmpty';
import { getAllOrders } from '../../store/actions/ordersActions';
import { getUsers } from '../../store/actions/userActions';

const AllUsers = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch])
  
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch])

  const users = useSelector(state => state.userReducer.users);
  const orders = useSelector(state => state.ordersReducer.allOrders);
  const loggedInUser = useSelector(state => state.auth.loggedInUser)

  const NrOrders = (id) => {
    let counting=0
    orders.forEach(element => {
      if (element.customerId===id){
      counting++
      }
    });
    return counting;
  }

  const onlySeries = () => {
    return users.map(user => user._id);
  }

  const uniqueSeries = () => {
      return onlySeries().filter((value, index, self) => self.indexOf(value) === index);
  }
  
  const customers = () => {
    return uniqueSeries().map(order => (
      {
      customerId: order,
      nrOrders: NrOrders(order)
      }
    ));
  }

  const completeUsers = () => {
    return users.map(user => (
      {
        ...user,
        nrOrders: NrOrders(user._id)
      }
    ))
  }

  console.log ("complete", completeUsers())
  
  return (
      <div id="orderMain" className="list card maxWidth">
        <div className="box d-flex justify-content-between bg-white px-2">
          <AllUsersHeader orders={orders.length} users={users.length}/>
          { 
            (users.length===0) ? <UsersEmpty />
            : loggedInUser.admin ? completeUsers() && completeUsers().map(user => <AllUsersList key={user._id} user={user} />) : <div /> 
          }
          </div>
      </div>
  )
}

export default AllUsers
