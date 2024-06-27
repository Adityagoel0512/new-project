import React from 'react';
import Logo from './components/orologo.png';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src={Logo} alt="Logo" className="navbar-logo" />
            <div className="links">
               
               
               <a href="https://orocorp.in/">Orocorp</a>
               <a href="https://www.oromoney.in/">Oro Money</a>
               <a href="https://www.orosafe.in/">OroSafe</a>
               <a href="https://www.careers.orocorp.in/">Careers</a>
               <a href="https://www.oromoney.in/contact">ContactUs</a>
               <a href="tel: 086088 60845" className="callbtn">Call Oro</a>
               
               
               
            

               
               
               
            </div>
        
           
            
        </nav>
     );
}
 
export default Navbar;