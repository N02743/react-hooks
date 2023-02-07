import logo from "./logo.svg";
import "./App.css";
import UserTable from "./components/UserTable";
import React, { useState } from "react";
import AddUserForm from "./components/AddUserForm";

function App() {
  const usersData = [
    // { id: 1, name: 'Tang', username: 'Tangbadvoice'},
    // { id: 2, name: 'Toy', username: 'TheToys'},
    // { id: 3, name: 'Champ', username: 'Maiyarap'},
  ]

  const [users, setUsers] = useState(usersData)

  const AddUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }

  const DeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm AddUser={AddUser}/>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} DeleteUser={DeleteUser}/>
        </div> 
      </div>
    </div>
  );
}

export default App;
