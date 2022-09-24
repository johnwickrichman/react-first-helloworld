import React from "react"

const Header = () => {

  let companyName = "ToolaCorporation"
  let companyAddress = <p>Korat</p>

  let a = 10
  let b = 20

  const showMessage = () => {
    return companyName + ".com"
  }

  const isLogin = true;

  return (
    <>
      <h1>Header 2022 and {companyName}</h1>
      <p>{companyAddress}</p>
      <p>A + B = {a + b + 100}</p>
      <p>{showMessage()}</p>
      <hr />

     { isLogin && <p>แสดงว่า isLogin เป็นจริง</p>}

     { isLogin ? (
      <p>isLogin เป็นจริง</p>
     ) : (
      <p>isLogin เป็นเท็จ</p>
     )}


    </>
  )
}

export default Header
