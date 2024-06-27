import React, { Children, useState } from "react";
import DownloadBtn from "./DownloadButton";
import "./title.css"
import Image from './components/image 12.png';


const TitleBar = ({titleImage='', titleText='',pdfURL=''}) => {
    return(
        <>
        <div className={"titlecontainer"}>
            {titleImage && <img className="imagecontainer" src={Image}></img>}
            <div className="headingcontainer">{titleText}</div>
            <DownloadBtn pdfLink={pdfURL}></DownloadBtn>
            
        </div>
        </>
    )   
}  

export default TitleBar;