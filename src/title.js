import React, { Children, useState } from "react";
import DownloadBtn from "./DownloadButton";
import "./title.css"



const TitleBar = ({titleImage='', titleText='',pdfURL=''}) => {
    return(
        <>
        <div className={"titlecontainer"}>
            {titleImage && <img className="imagecontainer" src={titleImage}></img>}
            <div className="headingcontainer">{titleText}</div>
            <DownloadBtn pdfLink={pdfURL}></DownloadBtn>
            
        </div>
        </>
    )   
}  

export default TitleBar;