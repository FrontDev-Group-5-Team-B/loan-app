import React, { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import "../../styles/borrowersProfile.css"




// Modal.setAppElement('#root');
const BorrowerProfile = () => {


  return (
    <div  className='loansgener-wrapper'>
         <div className='generated-flex'>
            <Link to='/dashboard' style={{textDecoration: 'none', color: '#808080'}} ><p>Dashboard</p></Link>
           <p className='arrowimg'> <MdKeyboardArrowRight/></p>
            <h3>Borrower's Profile</h3>
        </div>
        <div>
            <div className='bprofile-div'>
                <div>
                <h4>Blessing Effiong</h4>
                <p>Date: 15/02/23</p>
                </div>
                
            </div>

            <div className='bprofile-div2'>
                <div className='p-borrow1'>
                    <p>Loan Amonunt:</p>
                     <p>#5,000,000</p>
                </div>
                <div  className='p-borrow1'>
                    <p>Loan Status:</p>
                    <p>Successful</p>
                </div>
                <div className='p-borrow1'>
                    <p>Admin in Charge:</p>
                    <p>Mabel Okeke</p>
                </div>
                <div>
                <Link to='/dashboard/fullbprofile'><button className='modal-btn'>View Borrower's Data</button></Link>

        </div>

    </div>
</div>
</div>
  )
}

export default BorrowerProfile