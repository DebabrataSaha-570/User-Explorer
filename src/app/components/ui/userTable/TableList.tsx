import { TUser } from "@/app/types/user.types";
import Image from "next/image";
import React from "react";

const TableList = ({
  user,
  index,
  handleUserDetails,
}: {
  user: TUser;
  index: number;
  handleUserDetails: any;
}) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-12 rounded-full">
            <Image
              src={user.avatar}
              alt="Image"
              width={50}
              height={50}
              className="object-cover"
            ></Image>
          </div>
        </div>
      </td>
      <td>
        {user.profile.firstName} {user.profile.lastName}{" "}
      </td>

      <td>
        <button
          onClick={() => handleUserDetails(user)}
          className="btn btn-sm btn-info  btn-outline text-xs rounded-full text-white"
        >
          Details
        </button>
        {/* <button
          onClick={() => handleUserDetails(user)}
          className="px-5 py-2 border hover:bg-[#047EFF] transition-all duration-300 focus:ring-2 ring- focus:bg-[#047EFF]  text-xs rounded-full text-white"
        >
          Details
        </button> */}
      </td>
    </tr>
  );
};

export default TableList;
