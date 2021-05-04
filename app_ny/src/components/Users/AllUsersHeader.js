
const AllUsersHeader = ({orders, users}) => {

    return (
        <div id="allOrderHeader" className="textStyle d-flex">
            <div className="gradient-custom3 w-100">
                <div className="d-flex testing0 px-2">
                    <div className="testing">
                        <h4 className="tcol1 orderH4">Admin</h4>
                        <p className="tcol2 headerP">user meny</p>
                    </div>
                    <div className="testing">
                        <h4 className="tcol1 orderH4">Users</h4>
                        <p className="tcol2 headerP">{ users }</p>
                    </div>
                    <div className="testing">
                        <h4 className="tcol1 orderH4">Total orders:</h4>
                        <p className="tcol2 headerP">{ orders }</p>
                    </div>
                </div>
            </div>
        </div>
        // <div id="allOrderHeader" className="textStyle">
        //     <div className="row gradient-custom3 p-2">
        //         <h4 className="col-3 headerH4">Admin - User meny:</h4>
        //         <p className="col-9 headerP"> </p>
        //         <h4 className="col-3 headerH4">Users</h4>
        //         <p className="col-9 headerP">{ users }</p>
        //         <h4 className="col-3 headerH4">Total orders:</h4>
        //         <p className="col-9 headerP">{ orders }</p>
        //     </div>
        // </div>
    )
}

export default AllUsersHeader
