"use client";
import Image from "next/image";
import userImage from "../../../../../public/assests/user.svg";

const UserDetail = ({ user }: any) => {
  console.log("user Id", user);
  return (
    <>
      {/* <h3 className="text-lg">User Details</h3> */}

      {user?.id ? (
        <div className="card bg-[#10121A]  w-full shadow-xl text-center">
          <div className="card-body">
            <div>
              <div className="avatar">
                <div className="ring-info ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  {user.avatar ? (
                    <Image
                      src={user.avatar}
                      alt="image"
                      width={96}
                      height={96}
                      className="object-cover"
                    ></Image>
                  ) : (
                    <Image
                      src={userImage}
                      alt="image"
                      width={96}
                      height={96}
                      className="object-cover"
                    ></Image>
                  )}
                </div>
              </div>

              <h3 className="text-xl  pt-2">
                {user.profile.firstName} {user.profile.lastName}
              </h3>
              <p className="text-base">{user?.jobTitle}</p>

              <p className="text-sm">{user.Bio}</p>

              <p className="mt-2">Email : {user.profile.email}</p>
              <p className="">User Name : {user.profile.username}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="card bg-[#10121A]  w-full shadow-xl text-center py-5">
          <h2 className="text-xl text-center ">User Details </h2>{" "}
        </div>
      )}
    </>
  );
};

export default UserDetail;
