import React, { useEffect, useState } from "react";
import DeclinedLoanData from "../../data/DeclinedLoanData";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import "../../styles/dashPages.css";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const LoansDeclined = () => {
  const [declined, setDeclined] = useState();
  const getToken = localStorage.getItem("token");

  const getDeclinedData = async () => {
    const gethead = new Headers();
    gethead.append("Authorization", `Bearer ${getToken}`);
    const res = await fetch(
      "https://nodebtdev.onrender.com/api/loans/rejected-loans/ascending",
      {
        method: "GET",
        headers: gethead,
      }
    );
    return res.json();
  };

  const { data } = useQuery("declinedAscend", getDeclinedData);
  useEffect(() => {
    console.log(data);
    setDeclined(data);
  }, [data]);
  return (
    <>
      <div className="loansgener-wrapper">
        <div className="generated-flex">
          <Link
            to="/dashboard"
            style={{ textDecoration: "none", color: "#808080" }}
          >
            Dashboard
          </Link>
          <p className="arrowimg">
            {" "}
            <MdKeyboardArrowRight />
          </p>
          <h3>Loans Declined</h3>
        </div>
        <div className="generatedboard-wrap">
          <h4>Loans Declined</h4>
          <div className="loans-heading">
            <div>
              <p className="generated-red">Total Amount: 842,458.25</p>
              <h6>Last Month</h6>
            </div>
            <div className="sort-div">
              {" "}
              <p>
                Sort by month
                <span>
                  <RiArrowDownSLine />
                  Month
                </span>
              </p>
            </div>
          </div>
          <table className="loans-table">
            <thead>
              <tr>
                <th>Borrower's Name</th>
                <th>Date</th>
                <th>Status</th>
                <th>Credit Score</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {/* {DeclinedLoanData?.map((declinedData, index) => (
                <tr key={index}>
                  <td>{declinedData.borrower_name}</td>
                  <td>{declinedData.date}</td>
                  <td className="generated-red">{declinedData.status}</td>
                  <td>{declinedData.credit_score}</td>
                  <td>{declinedData.amount}</td>
                </tr>
              ))} */}
              {declined && (
                <p style={{ paddingTop: "1rem", fontSize: "4rem" }}>
                  {declined.message}!
                </p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LoansDeclined;
