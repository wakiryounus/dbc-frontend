import React from "react";
import DbcButton from "../../components/dbc-button";
import { logoutUser } from "../../api-client/auth-request";
import { userActions } from "../../data-services/user-dux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

const Homepage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        dispatch(userActions.loadCurrentUser());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      Home Page
      <DbcButton onClick={handleLogout}>Logout</DbcButton>
    </div>
  );
};

export default Homepage;
