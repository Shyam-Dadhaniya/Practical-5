import React from "react";
import MainStyle from "../../styled/Main.styles";
import Header from "../Header/Header";
import UserList from "../User/UserList";
import UserCard from "../UserCard/UserCard";
import { useSelector } from "react-redux";
const Main = () => {
  const user = useSelector((state) => state.card.user);
  return (
    <MainStyle>
      <Header />
      <UserList />
      {user && (
        <UserCard>
          email={user.email} name={user.name} avatar={user.avatar}
        </UserCard>
      )}
    </MainStyle>
  );
};

export default Main;
