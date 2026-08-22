import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {

  const user = useContext(UserContext);

  return (
    <div>

      <h2>Profile</h2>

      <p>Name: {user.name}</p>

      <p>Email: {user.email}</p>

    </div>
  );
}

export default Profile;