import logo from "./logo.svg";
import "./App.css";
import UserTable from "./components/UserTable";
import React, { useState } from "react";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./forms/EditUserForm";

function App() {
  const usersData = [
    // { id: 1, name: 'Tang', username: 'Tangbadvoice'},
    // { id: 2, name: 'Toy', username: 'TheToys'},
    // { id: 3, name: 'Champ', username: 'Maiyarap'},
  ];

  const [users, setUsers] = useState(usersData);

  const [editing, setEditing] = useState(false);

  const initstate = { id: null, name: "", username: "" };

  const [currentUser, setCurrentUser] = useState(initstate);

  const EditRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const UpdateUser = (id, UpdateUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? UpdateUser : user)));
  };

  const AddUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const DeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                UpdateUser={UpdateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm AddUser={AddUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} DeleteUser={DeleteUser} EditRow={EditRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
