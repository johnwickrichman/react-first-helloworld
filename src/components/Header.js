import React from "react"

const Header = () => {
  
  let companyName = "ToolaCorporation"
  let companyAddress = <p>Korat</p>

  let a = 10
  let b = 20

  const showMessage = () => {
    return companyName + ".com"
  }

  return (
    <>
      <h1>Header 2022 and {companyName}</h1>
      <p>{companyAddress}</p>
      <p>A + B = {a + b + 100}</p>
      <p>{showMessage()}</p>
      <hr />
    </>
  )
}

export default Header
