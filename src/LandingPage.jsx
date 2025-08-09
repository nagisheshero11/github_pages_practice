import React from 'react'
import "./LandingPage.css" 
import { Library } from './Library';
import { Midland } from './Midland';
import { Current } from './Current';
import { Link } from 'react-router-dom'
import { useState } from 'react'
export const LandingPage = () => {


  return (
    <div>
    <div className='container-fluid'>
      <div className='row'>
        <div className='d-flex flex-row justify-content-start card_0'>

          <Library/>
          <Midland/>
          <Current/>

            </div>
        </div>
      </div>
    </div>

  )
}
