//IMPORTS
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
//COMPONENTS
import Navbar from './components';
import TableName from './components/body';

//HOOKS
import { useState, useEffect } from 'react';

//FUNCTION MAIN
function App() {
  const [users, setUsers] = useState([]);
  const [tableUsers, setTableUsers] = useState([]);
  const [search, setSearch] = useState("");

  const requestGet = async () => {
    await axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        setUsers(response.data)
        setTableUsers(response.data)
    }).catch(error => {
        console.log(error)
    })
}

useEffect(() => {
    requestGet();
}, [])

  return (
    <div className="App">
      <Navbar changeSearch={setSearch} search={search} tableUsers={tableUsers} users={setUsers}/>
      <TableName userState={users}/>
    </div>
  );
}

export default App;
