import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import { FriendsCard } from "./FriendsCard";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  console.log(friends);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => setFriends(res.data))
      .then(err => console.log(err));
  };

  return (
    <div>
      {friends.length === 0 && <p>loading friends</p>}
      {friends.map(i => (
        <FriendsCard key={i.id} data={i} />
      ))}
    </div>
  );
};

export default FriendsList;
