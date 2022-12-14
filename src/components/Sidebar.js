import React from 'react'


const Sidebar = () => {

    // let fullname = "John"
    const [fullname, setFullName] = React.useState('John')
    const [isShow, setIsShow] = React.useState(true)

    const changeName = () => {
        // fullname = "Marry"
        setFullName('Marry')
        setIsShow(!isShow)
    }

    React.useEffect( () => {
        console.log( 'sidebar useEffect')
    })

    React.useEffect( () => {
        console.log( 'sidebar useEffect onetime only')
    },[])

    React.useEffect( () => {
        console.log( 'sidebar useEffect from fullname =>' + fullname)
    },[fullname])


  return (
    <>
    <p>Sidebar</p>
    {
        isShow ? <p>ค่า isShow เป็นจริง</p> : <p>ค่า isShow เป็นเท็จ</p>
    }

    <p>สวัสดี {fullname}</p>
    <button onClick={changeName}>เปลี่ยนชื่อ</button>
    </>
  )
}

export default Sidebar