
const AllUsersHeader = ({orders, users}) => {

    return (
        <div id="allOrderHeader" className="textStyle">
            <div className="row gradient-custom3 p-2">
                <h4 className="col-3 headerH4">Admin - User meny:</h4>
                <p className="col-9 headerP"> </p>
                <h4 className="col-3 headerH4">Users</h4>
                <p className="col-9 headerP">{ users }</p>
                <h4 className="col-3 headerH4">Total orders:</h4>
                <p className="col-9 headerP">{ orders }</p>
            </div>
        </div>
    )
}

export default AllUsersHeader
