"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Header from "./Header";
import UserTable from "./userTable/UserTable";
import UserDetail from "./userDetail/UserDetail";
import { loadUsers } from "@/services/actions/loadUsers";
import { TUser } from "@/app/types/user.types";
const MainPage = () => {
  const [user, setUser] = useState({});

  const handleUserDetails = (user: TUser) => {
    setUser(user);
  };

  return (
    <main className="py-10  bg-[#10121A] text-[#FFFFFF]">
      <Container className="bg-[#191D2B] rounded-lg ">
        {/* header  */}
        <Header></Header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-3">
          <div className="order-2 md:order-1 col-span-2">
            <UserTable handleUserDetails={handleUserDetails}></UserTable>
          </div>
          <div className="order-1 md:order-2">
            <UserDetail user={user}></UserDetail>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default MainPage;
