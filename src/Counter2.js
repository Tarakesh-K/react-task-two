import React, { useState, Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Counter2.css';
import { fa0, faCircleDot, faCopyright, faHelicopterSymbol, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';

export default function Counter2() {
  return (
    <div className='box-main'>
      <div className='w-100 footer d-flex justify-content-center text-center'>
        <p>Copyright&nbsp; <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>&nbsp; Your Website 2022</p>
      </div>
    </div>
  );
}