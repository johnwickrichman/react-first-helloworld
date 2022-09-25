import React from 'react'


const Sidebar = () => {

    // let fullname = "John"
    const [fullname, setFullname] = React.useState('John')

    const changeName = () => {
        // fullname = "Marry"
        setFullname('Marry')
    }

  return (
    <>
    <p>Sidebar</p>

    <p>สวัสดี {fullname}</p>
    <button onClick={changeName}>เปลี่ยนชื่อ</button>
    </>
  )
}

export default Sidebar