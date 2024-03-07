import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Arafat Number </h1>

      {users.map((user) => (
        <SingleUser Ayman={user.name} 
        id={user.id}
        key={user.id}
        email={user.email}>
        </SingleUser>
      ))}
    </div>
  );
};

export default User;
