import React from 'react'
import { FaReact } from 'react-icons/fa'
// import { HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import data from './constants'
import './styles.css'


const NavBar = () => {
  // const [toogleIcon, setToggleIcon] = useState(false);

  // const handleMenuClick = () => {
  //   setToggleIcon(!toogleIcon)
  // }


  return (
    <div>
      <nav className='navbar'>
        <div className='navbar_container'>
          <Link to={'/'} className='navbar_container_logo'>
            <FaReact size={30} />
          </Link>
        </div>

        <ul className='navbar_container_routes'>
          {data.map((item) => (
            <li className='navbar_container_routes_item' key={item.label}>
              <Link to={item.to} className='navbar_container_routes_item_links'>
                {item.label}
              </Link>
            </li>
          ))
          }
        </ul>

        {/* <div className='nav_icons' onClick={handleMenuClick}>
          {
            toogleIcon ? <HiX size={30} /> : <FaBars size={30} />
          }
        </div> */}
      </nav>
    </div>
  )
}

export default NavBar