import React from "react";
import UserItem from "./UserItem";
import UserListData from "../../Mock/data";

const UserList = (props) => {
  return (
    <>
      {UserListData.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          avatar={user.avatar}
          name={`${user.first_name} ${user.last_name}`}
          email={user.email}
        />
      ))}
    </>
  );
};

export default UserList;
