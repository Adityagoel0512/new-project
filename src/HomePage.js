// HomePage.js
import React from 'react';
import Navbar from './navbar';
import Container from './container';
import RedirectBtn from './redirectbutton';
import frame from './frame';


const HomePage = () => {
  return (
    <><><div className="HomePage">
      <Navbar />



    </div><div className="container"><Container /></div><div className='frame'><h1>Oro Policies</h1><p>Here's a repository of all the policies we have at Oro</p><frame/></div></><RedirectBtn /></>
  )
};

export default HomePage;
