import React from 'react'
import './styles.css'

const Header = ({ icon, title }) => {
    return (
        <div className='Header_container'>
            <div className='title_container'>
                {title}
            </div>

            <div className='icon_container'>
                {icon}
            </div>
        </div>
    )
}

export default Header