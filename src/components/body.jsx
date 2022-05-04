const TableName = (props) => {
    return(
        <table className="table table-sm table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>WebSite</th>
                    <th>City</th>
                    <th>Business</th>
                </tr>
            </thead>

            <tbody>
                {
                    props.userState&&
                    props.userState.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.phone}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                            <td>{user.address.city}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default TableName