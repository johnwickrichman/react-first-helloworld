import React from 'react'

const Footer = (props) => {
  
  const {title, province, postcode} = props

  return (
    <div>
      <hr />
        <h3>Footer</h3>
        <h3>{title} &copy; {new Date().getFullYear()}</h3>
        <h3>From props  {province} {postcode}</h3>
    </div>
  )
}

export default Footer