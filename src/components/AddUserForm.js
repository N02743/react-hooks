import React, { useState } from "react";

function AddUserForm(props) {
  const initstate = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initstate);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  }

  return (
    <>
      <form
        onSubmit={(event) => {
            event.preventDefault()
            if (!user.name || !user.username) return  
            
            props.AddUser(user)
            setUser(initstate) 
            console.log("submit")
        }}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        ></input>

        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        ></input>
        <button>Add new user</button>
      </form>
    </>
  );
}

export default AddUserForm;
