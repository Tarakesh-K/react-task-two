import React, { useState, Component, useContext } from 'react';
import './Counter1.css';
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa0, faCircleDot, faCopyright, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import { CounterDataContext } from './Context';

export default function Counter1() {
  const consumedValues = useContext(CounterDataContext);
  return (
    <div className='box-3'>
      <div className='container'>
        <div className='main'>
          <div className='row row-1'>
            <div className='row-main col-6 col-md-4 col-lg-3'>
              <div className='card-body'>
                <div className='body-top'>
                  <p className='text-center'>450*300</p>
                </div>
                <div className='body-main-content'>
                  <div className='body-content text-center'>
                    <h5>Fancy Product</h5>
                    <p>$40.00 - $80.00</p>
                  </div>
                  <div className='btn-div text-center'>
                    <button className='btn-cart btn btn-outline-dark text-align-center'>View options</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='row-main col-6 col-md-4 col-lg-3'>
              <div className='card-body'>
                <div className='body-top d-flex align-middle justify-content-center text-center text-align center'>
                  <p>450*300</p>
                </div>
                <div className='body-main-content'>
                  <div className='body-content-2 text-center'>
                    <h5>Special Item</h5>
                    <FontAwesomeIcon icon={faStar} className='star-gold'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className='star-gold'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className='star-gold'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className='star-gold'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className='star-gold'></FontAwesomeIcon>
                    <p><s>$20.00</s>&nbsp;$18.00</p>
                  </div>
                  <div className='btn-div text-center'>
                    <button onClick={(e) => consumedValues.handleIncrementFromProvider(e)} className='btn-cart btn btn-outline-dark text-align-center'>{consumedValues.initialTextFromProvider}</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='row-main col-6 col-md-4 col-lg-3'>
              <div className='card-body'>
                <div className='body-top d-flex align-middle justify-content-center text-center text-align center'>
                  <p>450*300</p>
                </div>
                <div className='body-main-content'>
                  <div className='body-content text-center'>
                    <h5>Sale Item</h5>
                    <p><s>$50.00</s>&nbsp;$25.00</p>
                  </div>
                  <div className='btn-div text-center'>
                    <button onClick={(e) => consumedValues.handleIncrementFromProvider(e)} className='btn-cart btn btn-outline-dark text-align-center'>{consumedValues.initialTextFromProvider}</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='row-main col-6 col-md-4 col-lg-3'>
              <div className='card-body'>
                <div className='body-top d-flex align-middle justify-content-center text-center text-align center'>
                  <p>450*300</p>
                </div>
                <div className='body-main-content'>
                  <div className='body-content-2 text-center'>
                    <h5>Popular Item</h5>
                    <FontAwesomeIcon icon={faStar} className='star-gold'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className='star-gold'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className='star-gold'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className='star-gold'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className='star-gold'></FontAwesomeIcon>
                    <p>$40.00</p>
                  </div>
                  <div className='btn-div text-center'>
                    <button onClick={(e) => consumedValues.handleIncrementFromProvider(e)} className='btn-cart btn btn-outline-dark text-align-center'>{consumedValues.initialTextFromProvider}</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='row-main col-6 col-md-4 col-lg-3'>
              <div className='card-body'>
                <div className='body-top d-flex align-middle justify-content-center text-center text-align center'>
                  <p>450*300</p>
                </div>
                <div className='body-main-content'>
                  <div className='body-content text-center'>
                    <h5>Sale Item</h5>
                    <p><s>$50.00</s>&nbsp;$25.00</p>
                  </div>
                  <div className='btn-div text-center'>
                    <button onClick={(e) => consumedValues.handleIncrementFromProvider(e)} className='btn-cart btn btn-outline-dark text-align-center'>{consumedValues.initialTextFromProvider}</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='row-main col-6 col-md-4 col-lg-3'>
              <div className='card-body'>
                <div className='body-top'>
                  <p className='text-center'>450*300</p>
                </div>
                <div className='body-main-content'>
                  <div className='body-content text-center'>
                    <h5>Fancy Product</h5>
                    <p>$40.00 - $80.00</p>
                  </div>
                  <div className='btn-div text-center'>
                    <button className='btn-cart btn btn-outline-dark text-align-center'>View options</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='row-main col-6 col-md-4 col-lg-3'>
              <div className='card-body'>
                <div className='body-top d-flex align-middle justify-content-center text-center text-align center'>
                  <p>450*300</p>
                </div>
                <div className='body-main-content'>
                  <div className='body-content-2 text-center'>
                    <h5>Special Item</h5>
                    <FontAwesomeIcon icon={faStar} className='star-gold'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className='star-gold'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className='star-gold'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className='star-gold'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className='star-gold'></FontAwesomeIcon>
                    <p><s>$20.00</s>&nbsp;$18.00</p>
                  </div>
                  <div className='btn-div text-center'>
                    <button onClick={(e) => consumedValues.handleIncrementFromProvider(e)} className='btn-cart btn btn-outline-dark text-align-center'>{consumedValues.initialTextFromProvider}</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='row-main col-6 col-md-4 col-lg-3'>
              <div className='card-body'>
                <div className='body-top d-flex align-middle justify-content-center text-center text-align center'>
                  <p>450*300</p>
                </div>
                <div className='body-main-content'>
                  <div className='body-content-2 text-center'>
                    <h5>Popular Item</h5>
                    <FontAwesomeIcon icon={faStar} className='star-gold'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className='star-gold'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className='star-gold'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className='star-gold'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className='star-gold'></FontAwesomeIcon>
                    <p>$40.00</p>
                  </div>
                  <div className='btn-div text-center'>
                    <button onClick={(e) => consumedValues.handleIncrementFromProvider(e)} className='btn-cart btn btn-outline-dark text-align-center'>{consumedValues.initialTextFromProvider}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}