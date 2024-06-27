import React from 'react';
import BackButton from './BackButton';
import TitleBar from './title';
import TextBox from './Textbox';



const CustomerPage = () => {
  return (
    <div className='App'>
      <BackButton/>
      <TitleBar/><h1>Customer Grievances/Complaints</h1>
      <TextBox/>
      
    </div>
  );
};

export default CustomerPage;
