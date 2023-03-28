import React from 'react'
import "./AdsSection.scss";
const AdSection = () => {
  return (
      <div className='adSection'>
          <h1>All Startups</h1>
      <p>Read Startups Stories, Motivation Articles and Many More. </p>
      <div style={{fontWeight:"800",fontSize:"10px", color:"skyblue"}}>
        <span>#Business startups</span>
        <span>#Inventions</span>
        <span>#Tech startups</span>
      </div>
    </div>
  )
}

export default AdSection