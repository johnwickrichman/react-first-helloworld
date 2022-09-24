import React from 'react'

const Footer = (props) => {

  const {title, province, postcode, isOpen} = props;

  return (
    <div>
      <hr />
        <h3>Footer</h3>
        <h3>{title} &copy; {new Date().getFullYear()}</h3>
        <h3>From props  {province} {postcode+1000}</h3>

        {
          isOpen && (
            <>
            <p>ส่ง Boolean ผ่าน props สำเร็จแล้ว</p>
            <p>ค่าที่ส่งมาคือ : {isOpen.toString()}</p>
            </>
          )
        }

    </div>
  )
}

export default Footer