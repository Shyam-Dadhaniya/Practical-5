import styled from "styled-components";

const UserInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & img {
    border-radius: 50%;
    width: 6rem;
    margin-bottom: 3px;
  }

  & .name {
    margin-bottom: 6px;
  }

  & .email {
    margin-bottom: 6px;
    color: dimgrey;
    font-size: 15px;
  }

  & .plan {
    margin-bottom: 6px;
    font-weight: 500;
    font-size: 14px;
  }

  & .button {
    height: 2rem;
    width: 9rem;
    background-color: orange;
    border-radius: 5px;
    border: none;
    color: white;
    font-weight: 550;
    margin-bottom: 4px;
  }

  & .active {
    color: green;
    font-size: 23px;
    font-weight: 900;
  }
`;

export default UserInfoStyle;
