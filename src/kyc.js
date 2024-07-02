import React from "react";
import BackButton from "./BackButton";
import TitleBar from "./title";
import TextBox from "./Textbox";
import "./Pages.css";

const KycPage = () => {
  const pdfUrl = 'https://oromoney-prod.s3.ap-south-1.amazonaws.com/KYC.pdf';
  const linkStyle = {
    color: "#909090", // replace 'your-color' with your desired color
    textDecoration: "underline",
  };
  return (
    <>
      <style jsx global>{`
        body {
          background: ${"#f8f8f8"};
        }
      `}</style>
      <div className="container9">
        <BackButton />
        <TitleBar
          titleImage="/kyc.png"
          titleText="KYC Documents Required"
          pdfURL={pdfUrl} 
        ></TitleBar>
        <div className="container2">
          <TextBox>
            <div className="textcontainer">
              <div className="subtitlecontainer">
                Please keep these documents ready before your appointment with
                Oro’s field agent
              </div>
              <li style={{ listStyleType: 'none' }}>
                <div className="subtitlecontainer">
                  ID proof - Original (any one of the following):
                </div>
                <ol>
                  <li>Aadhar Card</li>
                  <li>Voter ID</li>
                  <li>Passport</li>
                  <li>Driving License</li>
                </ol>
                <div className="subtitlecontainer">
                  Address Proof - Original (any one of the following, local
                  address only):
                </div>
                <ol>
                  <li>Aadhar Card</li>
                  <li>Voter ID</li>
                  <li>Passport</li>
                  <li>Driving License</li>
                  <li>
                    Utility Bill / Lease Agreement of local address (Phone / Gas
                    / Electricity / Water / Broadband etc)
                  </li>
                </ol>
                <div className="subtitlecontainer">
                  Bank account proof - Original (any one of the following) :
                </div>
                <ol>
                  <li>Cancelled Cheque Leaf</li>
                  <li>Bank passbook</li>
                </ol>
                <div className="subtitlecontainer">Have Questions?</div>
                <p>
                  Please mail Oro support at{" "}
                  <a href="mailto:support@orocorp.in" style={linkStyle}>
                    support@orocorp.in </a> and an Oro support executive will get back to you to address
                    your concerns.
                  
                   
                </p>
              </li>
            </div>
          </TextBox>
        </div>
      </div>
    </>
  );
};

export default KycPage;

