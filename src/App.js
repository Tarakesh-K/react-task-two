import React, { useState, Component, createContext } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa0, faCircleDot, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CounterDataContext } from './Context.js';
import Counter from './Counter.js';
import Counter1 from './Counter1.js';

export default function App() {
  let [initialValue, setInitialValue] = useState(0);
  let [initialText, setInitialText] = useState("Add to cart");

  const handleIncrement = (e) => {
    if (e.target.innerText === "Add to cart") {
      setInitialValue(initialValue + 1);
      e.target.innerText = "Remove from Cart";
    }
    else if (e.target.innerText === "Remove from Cart"){
      setInitialValue(initialValue - 1);
      e.target.innerText = "Add to Cart";
    }
  }
  
  return (
    <div className='box-1'>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid w-75">
          <a className="navbar-brand anch" href="#">Start Bootstrap</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Shop</a>
              </li>
            </ul>
          </div>
          <div className='navbar navbar-right'>
            <button className='btn border border-dark'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> &nbsp; Cart &nbsp; <span className='numb'>{initialValue}</span></button>
          </div>
        </div>
      </nav>
      <CounterDataContext.Provider
        value={{
          initialValueFromProvider: initialValue,
          initialTextFromProvider: initialText,
          setInitialValueFromProvider: setInitialValue,
          setInitialTextFromProvider: setInitialText,
          handleIncrementFromProvider: handleIncrement,
        }}
      >
        <Counter />
        <Counter1 />
      </CounterDataContext.Provider>
    </div>
  );
}