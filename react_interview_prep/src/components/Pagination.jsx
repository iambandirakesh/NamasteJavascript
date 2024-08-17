import React from "react";
import { useState } from "react";
function Pagination({ numberOfPages = 10, currentPage = 1, changePage }) {
  return (
    <div className="pagination-container">
      <h1>Pagination</h1>
      <h2>Current Page:{currentPage}</h2>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <button
          style={{
            fontSize: "30px",
            border: "none",
            background: "none",
            boxShadow: "none",
            display: "flex",
            justifyContent: "flex-end",
            cursor: currentPage > 1 ? "pointer" : "not-allowed",
          }}
          onClick={() => {
            changePage(currentPage - 1);
          }}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>

        {new Array(numberOfPages).fill(0).map((ele, idx) => {
          return (
            <div
              style={{
                padding: "10px",
                backgroundColor: currentPage === idx + 1 ? "orange" : "gray",
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                changePage(idx + 1);
              }}
            >
              {idx + 1}
            </div>
          );
        })}
        <button
          style={{
            fontSize: "30px",
            border: "none",
            background: "none",
            boxShadow: "none",
            display: "flex",
            cursor: currentPage < numberOfPages ? "pointer" : "not-allowed",
          }}
          onClick={() => {
            changePage(currentPage + 1);
          }}
          disabled={currentPage === numberOfPages}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
function Main() {
  const [currentPage, setCurrentPage] = useState(1);
  const changePage = (page) => {
    setCurrentPage(page);
    console.log(page);
  };
  return (
    <Pagination
      numberOfPages={10}
      currentPage={currentPage}
      changePage={changePage}
    />
  );
}
export default Main;
