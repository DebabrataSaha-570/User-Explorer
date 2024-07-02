"use client";
import React, { useEffect, useState } from "react";
import TableList from "./TableList";
import { TUser } from "@/app/types/user.types";
import { loadUsers } from "@/services/actions/loadUsers";

//have to change 'any' type later
const UserTable = ({ handleUserDetails }: any) => {
  const [users, setUsers] = useState<TUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        if (Array.isArray(data)) {
          console.log(data);
          setLoading(false);
          setUsers(data);
        } else {
          setUsers([]);
          setLoading(false);
        }
      });
  }, []);

  console.log(users);

  if (loading) {
    return (
      <div className="h-screen w-full text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      {users.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table border ">
            {/* head */}
            <thead className="text-white text-sm  md:text-xl rounded ">
              <tr>
                <th>Index</th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {users?.map((user: TUser, index: number) => (
                <TableList
                  handleUserDetails={handleUserDetails}
                  user={user}
                  index={index}
                  key={index}
                ></TableList>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="h-screen">
          <h2>No Users Found</h2>
        </div>
      )}
    </div>
  );
};

export default UserTable;
