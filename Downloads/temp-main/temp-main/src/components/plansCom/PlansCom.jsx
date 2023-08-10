import React from 'react'
import "./plansCom.css"
const PlansCom = ({name,mobile,basic,standard,premium}) => {

  // console.log(name,mobile,basic,standard,premium)
  if(typeof mobile === "number"){
    mobile = `₹ ${mobile}`
    basic = `₹ ${basic}`
    standard = `₹ ${standard}`
    premium = `₹ ${premium}`
  }
  // 
  return (
    <div className='plansCom'>
      <div>{name}</div>
      <div className="prices">
        <h3>{mobile}</h3>
        <h3>{basic}</h3>
        <h3>{standard}</h3>
        <h3>{premium}</h3>
      </div>
    </div>
  )
}

export default PlansCom
