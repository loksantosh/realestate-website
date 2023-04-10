import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from "react-icons/bi"
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
 const getMenuStyle=(menuOpened)=>{
  if(document.documentElement.clientWidth<=800)
  return ({right: !menuOpened && "-100%"})
 }

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />
        
          <div className="flexCenter h-menu"
          style={getMenuStyle(menuOpened)}
          >
            <a href="">
              Residencies
            </a>
            <a href="">
              Our Value
            </a>
            <a href="">
              Contact Us
            </a>
            <a href="">
              Get Started
            </a>
            <a href="">
              <button className='button'>
                Contact
              </button>
            </a>
          </div>
        
        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  )
}

export default Header