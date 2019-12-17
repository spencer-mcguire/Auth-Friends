import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FriendsCard = props => {
  const { name, age, email, id } = props.data;

  const deleteFriend = a => {
    console.log(a);
    axiosWithAuth()
      .delete(`/friends/${a.id}`)
      .then(res => props.modifyFriend(res.data))
      .then(err => console.log(err));
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{email}</p>
      <button onClick={() => deleteFriend({ id })}>DELETE</button>
    </div>
  );
};
