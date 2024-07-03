import React from "react";

const Pagination = ({
  totalUsers,
  itemPerPage,
  setCurrentPage,
  currentPage,
}: {
  totalUsers: number;
  itemPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalUsers / itemPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex items-center flex-wrap gap-2 ">
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          className={`btn   btn-sm ${
            page == currentPage ? "btn-info" : "btn-neutral"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
