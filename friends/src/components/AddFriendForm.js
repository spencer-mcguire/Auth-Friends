import React, { useState } from "react";

export const AddFriendForm = () => {
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
  };

  return (
    <form>
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
