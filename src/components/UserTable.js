import React from "react";
import Button from 'react-bootstrap/Button';

function UserTable(props) {
    function TableBody() {
        if (props.users.length > 0) {
            return props.users.map((user) => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                        <Button
                            onClick={() => props.EditRow(user)}
                        >
                            Edit
                        </Button>
                        <Button
                            onClick={() => props.DeleteUser(user.id)}
                        >
                            Delete
                        </Button>
                    </td>
                </tr>
            ));
        }
        else {
            return (
                <tr>
                    <td>no users</td>
                </tr>
            );
        }
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <TableBody />
                </tbody>
            </table>
        </>
    );
}

export default UserTable;