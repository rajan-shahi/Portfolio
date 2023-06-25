import React from 'react'
import "./portfolio.scss"
// import DemoComponent from '../DemoComponent'

export default function Portfolio() {
  return (
    <div className="Portfolio" id= "portfolio">

      <h1>Portfolio</h1>
     
      <ul>

        <li className='active'>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Desing</li>
        <li>Branding</li>

      </ul>

      <div className="container">

        <div className="item">
          <img src='assets/image/nt.png'></img>
          <h3>Banking App</h3>
        </div>

        <div className="item">
          <img src='assets/image/img3.png'></img>
          <h3>Banking App</h3>
        </div>

        <div className="item">
          <img src='assets/image/img4.png'></img>
          <h3>Banking App</h3>
        </div>

        <div className="item">
          <img src='assets/image/img5.png'></img>
          <h3>Banking App</h3>
        </div>

        <div className="item">
          <img src='assets/image/img2.png'></img>
          <h3>Banking App</h3>
        </div>


        <div className="item">
          <img src='assets/image/read.png'></img>
          <h3>Banking App</h3>
        </div>

      </div>
      
    </div>
  )
}




