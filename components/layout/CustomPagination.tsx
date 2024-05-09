"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";
import Pagination from "react-js-pagination";

interface Props {
  resPerPage: number;
  filteredRoomCount: number;
}

const CustomPagination = ({ filteredRoomCount, resPerPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  let page = searchParams.get("page") || 1;
  page = Number(page);

  let queryParams;

  const handlePageChange = (currentPage: number) => {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);

      if (queryParams.has("page")) {
        queryParams.set("page", String(currentPage));
      } else {
        queryParams.append("page", String(currentPage));
      }
      const path = `${window.location.pathname}?${queryParams.toString()}`;
      router.push(path);
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      {resPerPage < filteredRoomCount && (
        <Pagination
          activePage={page}
          itemsCountPerPage={resPerPage}
          totalItemsCount={filteredRoomCount}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          nextPageText={"Next"}
          prevPageText={"Prev"}
          firstPageText={"First"}
          lastPageText={"Last"}
          itemClass="page-item"
          linkClass="page-link"
        />
      )}
    </div>
  );
};

export default CustomPagination;
