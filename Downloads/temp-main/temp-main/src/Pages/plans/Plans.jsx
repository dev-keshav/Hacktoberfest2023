import React from 'react'
import "./plans.css"
const Plans = () => {
  return (
    <div className='container'>
      <h1>Choose the right plan for you</h1>
      <div className="container-part2">
       <div className="left">
        <div className="toggle">Monthly</div>
        <div className="txt-info">
          <h3>Monthly Price</h3>
          <h3>Video Quality</h3>
          <h3>Resolution</h3>
          <h3>Devices you can watch on</h3>
        </div>
        
        </div> 
       <div className="right">
        <div className="right-part2">
          <div className="par"></div>
        </div>
        <div className="right-part2"></div>
        <div className="right-part2"></div>
        <div className="right-part2"></div>
       </div>
        
      </div>
    </div>
  )
}

export default Plans
