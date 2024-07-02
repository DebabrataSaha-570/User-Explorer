import React from "react";
import Container from "./components/ui/Container";
import UserTable from "./components/ui/userTable/UserTable";
import UserDetail from "./components/ui/userDetail/UserDetail";

const Home = () => {
  return (
    <main className="my-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="order-2 md:order-1 col-span-2">
            <UserTable></UserTable>
          </div>
          <div className="order-1 md:order-2">
            <UserDetail></UserDetail>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Home;
