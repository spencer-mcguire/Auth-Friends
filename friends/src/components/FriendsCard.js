import React from "react";

export const FriendsCard = props => {
  const { name, age, email } = props.data;
  return (
    <div>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  );
};
