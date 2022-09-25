import React from 'react'
import { logoStyle, titleStyle } from '../styles/style'
import useHover from '../hooks/UseHover'

const Logo = () => {

  const [ hover, attrs ] = useHover()

    const logoImage = {
        url: './logo192.png'
    }
    
  return (
    <div>
        {/* <img src="./logo192.png" width="100" alt="logo" /> */}
        <img onMouseOver={attrs.onMouseOver} onMouseOut={attrs.onMouseOut} src={logoImage.url} width="100" alt="logo" />
        {
          hover ? <p>Hello Logo</p> : null
        }

        <p style={logoStyle}>ทดสอบ style จาก style.js</p>
        <p style={titleStyle}>ทดสอบ style จาก style.js</p>
    </div>
  )
}

export default Logo