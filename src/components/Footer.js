import React from 'react'
import PropTypes from 'prop-types';


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
            <p style={{color:'green', fontSize: 25}}>ส่ง Boolean ผ่าน props สำเร็จแล้ว</p>
            <p style={styles.title}>ค่าที่ส่งมาคือ : {isOpen.toString()}</p>
            </>
          )
        }

    </div>
  )
}


const styles = {
  title: {
    color: 'red',
    fontSize: 30,
  }
}


Footer.propTypes = {
  title: PropTypes.string,
  province: PropTypes.string,
  postcode: PropTypes.number,
  isOpen: PropTypes.bool
}

export default Footer