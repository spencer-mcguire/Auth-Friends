import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import { FriendsCard } from "./FriendsCard";
import { AddFriendForm } from "./AddFriendForm";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  console.log(friends);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        setFriends(res.data);
      })
      .then(err => console.log(err));
  };

  const modifyFriend = a => {
    setFriends(a);
  };

  return (
    <div>
      {friends.length === 0 && (
        <Loader type="Grid" color="white" height={80} width={80} />
      )}
      {friends.map(i => (
        <FriendsCard key={i.id} data={i} modifyFriend={modifyFriend} />
      ))}
      <AddFriendForm addFriend={modifyFriend} />
    </div>
  );
};

export default FriendsList;
