import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const FullBProfile = ({ page, formData, ModalTwo }) => {
  const [ModalIsopen, setModalIsOpen] = useState(ModalTwo);

  const {
    fullname,
    guarantor,
    email,
    address,
    employmentType,
    phoneNumber,
    nationalIdentityNumber,
    incomePerMonth,
    loanAmount,
    purposeOfLoan,
    loanType,
    collateralType,
    age,
    socialSecurityNumber,
    otherSourcesOfIncome,
    gender,
    jobSector,
    maritalStatus,
    jobRole,
    repaymentType,
    collateralValue,
    collateralInformation,
  } = formData;

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "50px",
    },
  };

  return (
    <div
      style={page === "preview" ? { display: "block" } : { display: "none" }}
      className="borrow-wrap"
    >
      <div>
        <div className="generated-flex">
          <Link
            to="/dashboard/borrow"
            style={{ textDecoration: "none", color: "#808080" }}
          >
            Input Borrower's data
          </Link>
          <p className="arrowimg">
            {" "}
            <MdKeyboardArrowRight />
          </p>
          <h3>Borrower's data preview</h3>
        </div>
        <div className="b-header">
          <h2>Borrowers Data Preview</h2>{" "}
        </div>
        <div className="p-fbp">
          <p className="fbp-header2">Personal and contact information</p>
          <div className="fbp-flex">
            <div>
              <div>
                <input
                  type="text"
                  name="fullname"
                  value={fullname}
                  // onChange={handleChange}
                  placeholder="Mrs Tumise Anudolapo"
                  className="placeholder"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="anu@yahoo.com"
                  className="placeholder"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  value={address}
                  placeholder="45 cresent Ikeja"
                  className="placeholder"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="employmentType"
                  value={employmentType}
                  placeholder="Unemployed"
                  className="placeholder"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="maritalStatus"
                  value={maritalStatus}
                  // onChange={handleChange}
                  placeholder="Marital Status"
                  className="placeholder"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="gender"
                  value={gender}
                  // onChange={handleChange}
                  placeholder="Gender"
                  className="placeholder"
                />
              </div>
            </div>
            <div>
              <div>
                <input
                  type="text"
                  name="phoneNumber"
                  value={phoneNumber}
                  placeholder="+2346587512520"
                  className="placeholder"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="age"
                  value={age}
                  placeholder="13th August 1986"
                  className="placeholder"
                />
              </div>

              <div>
                {" "}
                <input
                  type="text"
                  name="jobRole"
                  value={jobRole}
                  // onChange={handleChange}
                  placeholder="Job Role"
                  className="placeholder"
                />
              </div>
              <div>
                {" "}
                <input
                  type="text"
                  name="jobSector"
                  value={jobSector}
                  // onChange={handleChange}
                  placeholder="Jod Sector"
                  className="placeholder"
                />
              </div>
              <div>
                {" "}
                <input
                  type="number"
                  name="nationalIdentityNumber"
                  value={nationalIdentityNumber}
                  // onChange={handleChange}
                  placeholder="National Identity Number"
                  className="placeholder"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="incomePerMonth"
                  value={incomePerMonth}
                  placeholder="10,000"
                  className="placeholder"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="l-fbp">
        <p className="fbp-header2">Loan Information</p>
        <div className="fbp-flex">
          <div>
            <div>
              {" "}
              <input
                type="text"
                name="loanType"
                value={loanType}
                placeholder="Student Loan"
                className="placeholder"
              />
            </div>
            {/* <div>
              {" "}
              <input
                type="text"
                placeholder="Upload Credit report"
                className="placeholder"
              />
            </div> */}

            <div>
              <input
                type="text"
                name="loanAmount"
                value={loanAmount}
                placeholder="Loan Amount"
                className="placeholder"
              />
            </div>
          </div>
          <div>
            <div>
              {" "}
              <input
                type="text"
                name="repaymentType"
                value={repaymentType}
                placeholder="Repayment Type"
                className="placeholder"
              />
            </div>
          </div>
        </div>
        <textarea
          name="purposeOfLoan"
          value={purposeOfLoan}
          className="fbp-text"
        >
          Purpose of loan
        </textarea>
      </div>

      <div className="c-fbp">
        <p className="fbp-header2">Collateral Information</p>
        <div className="fbp-flex">
          <div>
            {" "}
            <input
              type="text"
              name="collateralType"
              value={collateralType}
              placeholder="Type of Asset"
              className="placeholder"
            />
          </div>

          <div>
            {" "}
            <input
              type="text"
              name="collateralValue"
              value={collateralValue}
              placeholder="Collateral Value"
              className="placeholder"
            />
          </div>
        </div>
        <textarea
          name="collateralInformation"
          value={collateralInformation}
          className="fbp-text"
        >
          Provide collateral information e.g location, car model, mileage e.t.c
        </textarea>
      </div>

      <div className="g-fbp">
        <p className="fbp-header2">Guarantor's Information</p>
        <div className="fbp-flex">
          <div>
            <div>
              <input
                type="text"
                name="guarantor.fullname"
                value={guarantor.fullname}
                placeholder="Name"
                className="placeholder"
              />
            </div>
            <div>
              <input
                type="email"
                name="guarantor.email"
                value={guarantor.email}
                placeholder="Email"
                className="placeholder"
              />
            </div>
            <div>
              <input
                type="text"
                name="guarantor.address"
                value={guarantor.address}
                placeholder="Address"
                className="placeholder"
              />
            </div>
            <div>
              <input
                type="text"
                name="guarantor.relationship"
                value={guarantor.relationship}
                placeholder="relationship"
                className="placeholder"
              />
            </div>
            <div>
              <input
                type="text"
                name="guarantor.otherSourcesOfIncome"
                value={guarantor.otherSourcesOfIncome}
                placeholder="Other sources of income"
                className="placeholder"
              />
            </div>
          </div>

          <div>
            <div>
              <input
                type="number"
                name="guarantor.phoneNumber"
                value={guarantor.phoneNumber}
                placeholder="Phone Number"
                className="placeholder"
              />
            </div>
            <div>
              <input
                type="number"
                name="guarantor.age"
                value={guarantor.age}
                placeholder="Age"
                className="placeholder"
              />
            </div>
            <div>
              <input
                type="text"
                name="guarantor.socialSecurityNumber"
                value={guarantor.socialSecurityNumber}
                placeholder="Social Security Number"
                className="placeholder"
              />
            </div>
            <div>
              <input
                type="text"
                name="guarantor.employmentType"
                value={guarantor.employmentType}
                placeholder="Employment Type"
                className="placeholder"
              />
            </div>
            <div>
              <input
                type="text"
                name="guarantor.incomePerMonth"
                value={guarantor.incomePerMonth}
                placeholder="Income per month"
                className="placeholder"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="fbp-grade">
        <p>
          <i>
            After carefully previewing the borrower's data form, go ahead to
            upload and check loan eligibilty to predict loan default
          </i>
        </p>
      </div>
      <div className="fbp-admin">
        <p>Admin in charge </p>
        <div>
          <input type="text" name="fullname" value={fullname} placeholder="Input Name" className="placeholder" />
        </div>
      </div>

      <div>
        <div className="f-btn-div">
          {/* <button onClick={handleNext}>Preview</button>
          <button>Cancel</button> */}
          <button type="submit" className="f-btn">
            Upload Data
          </button>
          <Modal
            isOpen={ModalTwo}
            onRequestClose={() => setModalIsOpen(false)}
            style={customStyles}
          >
            <div className="bs-preview">
              <h6>Borower's data has been Uploaded successfully!</h6>
              <Link to="/dashboard/eligibilitystatus">
                <button>Check Eligibility Status</button>
              </Link>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default FullBProfile;
