import React from "react";
import GeneratedLoanData from "../../data/GeneratedLoanData";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import "../../styles/dashPages.css";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const LoansGenerated = () => {
  //  LOGIC FOR FETCHING ALL LOANS STARTS HERE //////////////
  const fetchCompanyLoans = async () => {
    try {
      const response = await axios.get(
        "https://nodebtdev.onrender.com/api/loans/company-loans",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  };

  const { data, isLoading, isError, error } = useQuery(
    "companyLoans",
    fetchCompanyLoans
  );
  console.log(data);
  //  LOGIC FOR FETCHING ALL LOANS STARTS HERE //////////////
  return (
    <>
      <div className="loansgener-wrapper">
        <div className="generated-flex">
          <Link
            to="/dashboard"
            style={{ textDecoration: "none", color: "#808080" }}
          >
            <p>Dashboard</p>
          </Link>
          <p className="arrowimg">
            {" "}
            <MdKeyboardArrowRight />
          </p>
          <h3>Loans Generated</h3>
        </div>
        <div className="generatedboard-wrap">
          <h4>Loans Generated</h4>
          <div className="loans-heading">
            <div>
              <p className="generated-blue">Total Amount: 4,587,541.28</p>
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
              {GeneratedLoanData?.map((generatedData, index) => (
                <tr key={index}>
                  <td>{generatedData.borrower_name}</td>
                  <td>{generatedData.date}</td>
                  <td className="generated-blue">{generatedData.status}</td>
                  <td>{generatedData.credit_score}</td>
                  <td>{generatedData.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LoansGenerated;
