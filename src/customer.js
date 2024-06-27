import React from "react";
import BackButton from "./BackButton";
import TitleBar from "./title";
import TextBox from "./Textbox";
import "./Pages.css";

const CustomerPage = () => {
  const linkStyle = {
    color: "#454545", // replace 'your-color' with your desired color
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
          titleImage="/customer.png"
          titleText="Customer Grievances/Complaints"
        ></TitleBar>
        <div className="container2">
          <TextBox>
            <li style={{ listStyleType: "none" }}>
              <p>
                <font color="#909090">
                  In the event of any grievances, complaints, clarifications or
                  feedback, please write to{" "}
                </font>
                <a href="mailto:support@orocorp.in" style={linkStyle}>
                  support@orocorp.in
                </a>{" "}
                .
              </p>
              <p>
                <font color="#909090">
                The Lender shall endeavour to respond to your communications
                within 3 business days, failing which the Borrower can address
                his/her grievances, complaints, clarifications or feedback to
                the escalations phone number{" "}</font>
                <font color="#454545" textDecoration="bold">+91-9585795856.</font>
              </p>
            </li>
          </TextBox>
        </div>
      </div>
    </>
  );
};

export default CustomerPage;
