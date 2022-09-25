import React from 'react'
import { logoStyle, titleStyle } from '../styles/style'


const Logo = () => {

    const logoImage = {
        url: './logo192.png'
    }
    
  return (
    <div>
        {/* <img src="./logo192.png" width="100" alt="logo" /> */}
        <img src={logoImage.url} width="100" alt="logo" />

        <p style={logoStyle}>ทดสอบ style จาก style.js</p>
        <p style={titleStyle}>ทดสอบ style จาก style.js</p>
    </div>
  )
}

export default Logo