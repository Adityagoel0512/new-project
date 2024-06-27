// BackButton.js
import './BackButton.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="BackButton" onClick={() => navigate(-1)}>
      <FontAwesomeIcon icon={faChevronLeft} className="icon" /> Oro Policies

    </button>
  );
};

export default BackButton;
