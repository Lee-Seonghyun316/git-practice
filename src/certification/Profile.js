import React from "react";

function Profile({ user }) {
  const { id, password, name } = user || {};
  return (
    <div>
      <h1>Profile</h1>
      <table>
        <tr>
          <td>Id</td>
          <td> : {id}</td>
        </tr>
        <tr>
          <td>Password</td>
          <td> : {password}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td> : {name}</td>
        </tr>
      </table>
    </div>
  );
}

export default Profile;
