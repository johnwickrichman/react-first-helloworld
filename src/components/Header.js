import React from "react"
import Logo from "./Logo"

const Header = () => {
  let companyName = "ToolaCorporation"
  let companyAddress = <p>Korat</p>

  let a = 10
  let b = 20

  const showMessage = () => {
    return `${companyName}.com - ลองใช้ function ใน JSX`
  }

  const isLogin = true

  const showMe = () => {
    alert('แสดงฟังก์ชั่น แต่ตอนใส่ชื่อ ไม่ต้องใส่ ()')
  }

  const products = [
    { id: 1, name: 'Coke'},
    { id: 2, name: 'Pepsi'},
    { id: 3, name: 'Fanta'},
  ]

  return (
    <>
      <h1>Header 2022 and {companyName}</h1>
      <p>{companyAddress}</p>
      <p>A + B = {a + b + 100}</p>
      <p>{showMessage()}</p>
      <hr />

      {isLogin === true && <p>แสดงว่า isLogin เป็นจริง แบบที่ 1</p>}

      {isLogin && <p>แสดงว่า isLogin เป็นจริง แบบที่ 2</p>}

      {isLogin && (
        <>
          <p>แสดงว่า isLogin เป็นจริง แบบที่ 3</p>
          <p>แสดงว่า isLogin เป็นจริง แบบที่ 3</p>
        </>
      )}

      {isLogin ? <p>isLogin เป็นจริง</p> : <p>ไม่มีสิทธิ์ดูโลโก้นะจ๊ะ</p>}

      {isLogin && <Logo />}
      <hr />

      <button onClick={showMe}>ลองกดดูสิ</button>

      <hr />

        <ul>
        {
          products.map( (pro, index) => {
            return (
              <li key={ pro.id }> รายการที่ { index+1} คือ { pro.name }  </li>
            )
          })
        }
        </ul>
    </>
  )
}

export default Header
