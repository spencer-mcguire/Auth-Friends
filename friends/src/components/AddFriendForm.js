import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const AddFriendForm = ({ addFriend }) => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  // Changes
  const handleChanges = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  // Submit
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", newFriend)
      .then(res => {
        console.log(res);
        addFriend(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newFriend.name}
        onChange={handleChanges}
      />
      <input
        type="text"
        name="age"
        placeholder="Age"
        value={newFriend.age}
        onChange={handleChanges}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={newFriend.email}
        onChange={handleChanges}
      />
      <button>Submit</button>
    </form>
  );
};
