import React from "react";
import TableList from "./TableList";

const UserTable = async () => {
  const res = await fetch(
    "https://602e7c2c4410730017c50b9d.mockapi.io/users/",
    {
      cache: "no-store", //data will not be cached
    }
  );
  const users = await res.json();
  //   console.log(users);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <TableList user={user} index={index} key={index}></TableList>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
