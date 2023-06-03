import React from 'react'
import loanApplication from '../../data/loanApplication'
import {FiMenu} from "react-icons/fi"
import "../../styles/loanApplication.css"

const LoanApplication = () => {
 
  return (
    <div className="loan-app-wrapper">
        <div className="loan-app-title">
          <h2>Loan Applications</h2>
      <div className="loan-app-filter-icon">
        <FiMenu size="35px" /> 
        <h3>Filter</h3>
        </div>
      </div>
          <table className="loan-app-table">
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
          {loanApplication?.map((application, idx) => (
            <tr key={idx}>
              <td>{application.borrower_name}</td>
              <td>{application.date}</td>
              <td className="status">{application.status}</td>
              <td>{application.credit_score}</td>
              <td>{application.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LoanApplication