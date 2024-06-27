import React from "react";
import Link from "next/link";
import { PiArrowRightLight } from "react-icons/pi";
import './redirect.css';

const RedirectBtn = () => {
    return (
        <div className="btncontainer">
            <div className="bcontainer">    
                <Link href="Privacy" target="_self" className="button"><div className="shieldcontainer"><img src="shieldVector.jpg" alt="" width="10" height="12"></img></div>Privacy<br></br>Policy<div className={"iconcontainer"}><PiArrowRightLight></PiArrowRightLight></div></Link>
                <Link href="About" target="_self" className="button"><div className="shieldcontainer"><img src="shieldVector.jpg" alt="" width="10" height="12"></img></div>Terms and<br></br>Conditions<div className={"iconcontainer"}><PiArrowRightLight></PiArrowRightLight></div></Link>
                <Link href="Refund" target="_self" className="button"><div className="shieldcontainer"><img src="shieldVector.jpg"alt="" width="10" height="12"></img></div>Refund<br></br>Policy<div className={"iconcontainer"}><PiArrowRightLight></PiArrowRightLight></div></Link>
                <Link href="kyc" target="_self" className="button"><div className="shieldcontainer"><img src="shieldVector.jpg" alt=""width="10" height="12"></img></div>KYC <br></br>Documents<br></br>Required<div className="iconcontainer2"><PiArrowRightLight></PiArrowRightLight></div></Link>
                <Link href="customer" target="_self" className="button"><div className="shieldcontainer"><img src="shieldVector.jpg" alt=""width="10" height="12"></img></div>Customer <br></br>Grievances / Complaints<div className="iconcontainer2"><PiArrowRightLight></PiArrowRightLight></div></Link>
        </div>
        </div>
    )
}

export default RedirectBtn;