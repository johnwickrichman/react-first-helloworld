import React from 'react'
import useHover from '../hooks/UseHover'

const Menu = () => {

    // const [ hover, mouseOver, mouseOut ] = useHover()
    const [ hover, attrs ] = useHover()

  return (
    <div>
        <h1>Menu</h1>
        {
            hover ? <h3>เมนูหลัก</h3> : null
        }

        {/* <img onMouseOver={mouseOver} onMouseOut={mouseOut} src='./logo192.png' alt="logo" /> */}
        <img onMouseOver={attrs.onMouseOver} onMouseOut={attrs.onMouseOut} src='./logo192.png' alt="logo" />
    </div>
  )
}

export default Menu