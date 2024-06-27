import React from 'react';
import BackButton from './BackButton';
import TitleBar from './title';
import TextBox from './Textbox';



const KycPage = () => {
  return (
    <div className='App'>
      <BackButton/>
      <TitleBar/><h1>KYC Documents Required</h1>
      <TextBox/>

      
    </div>
  );
};

export default KycPage;
