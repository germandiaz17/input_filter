const Navbar = (props) => {
    const handleChange = (e) => {
        props.changeSearch(e.target.value);
        filterUser(e.target.value)
    }

    const filterUser = (characters) => {
        let resultSearch = props.tableUsers.filter((element) => {
            if(element.name.toString().toLowerCase().includes(characters.toLowerCase())
            || element.company.name.toString().toLowerCase().includes(characters.toLowerCase())
            ){
                return element;
            }
        })
        props.users(resultSearch)
    }

    return(
        <div>
            <input type="text " className="form-control inputBuscar" placeholder="Search here" onChange={handleChange} value={props.search}/>
            <button className="btn btn-success w-100">Search</button>
        </div>
    )
}

export default Navbar