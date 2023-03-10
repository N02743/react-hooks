import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser)

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()

                props.UpdateUser(user.id, user)
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
        <button>Update user</button>
        <button
            onClick={() => props.setEditing(false)}
        >
            Cancel
        </button>
      </form>
    );
}

export default EditUserForm;