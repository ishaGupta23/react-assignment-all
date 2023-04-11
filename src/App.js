
import React, { useState } from "react";


function UserForm() {
  // State to keep track of the user input
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  // State to keep track of the list of users
  const [users, setUsers] = useState([]);

  //  handle changes to the input fields
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  //  handle adding a new user
  function handleAddUser(event) {
    event.preventDefault();
    setUsers((prevUsers) => [...prevUsers, formData]);
    setFormData({
      name: "",
      age: "",
      email: "",
    });
  }

  //  handle deleting a user by index
  function handleDeleteUser(index) {
    setUsers((prevUsers) =>
      prevUsers.filter((user, i) => i !== index)
    );
  }

  //  handle updating a user by index
  function handleUpdateUser(index, updatedData) {
    setUsers((prevUsers) =>
      prevUsers.map((user, i) => (i === index ? updatedData : user))
    );
  }

  return (
    <div >
      <form onSubmit={handleAddUser}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add User</button>
      </form>
      <hr />
      <h2>Users:</h2>
      <ul>
        {users.map((user, i) => (
          <li key={i}>
            {user.name}, {user.age}, {user.email}
            <br />
            <button onClick={() => handleDeleteUser(i)}>Delete</button>
            <button
              onClick={() => {
                const updatedData = {
                  name: prompt("Enter updated name:", user.name),
                  age: prompt("Enter updated age:", user.age),
                  email: prompt("Enter updated email:", user.email),
                };
                handleUpdateUser(i, updatedData);
              }}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserForm;


