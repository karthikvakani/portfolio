import React, { useState, useEffect } from 'react'
import { projectsData } from './projectsData'
import { BsInfoCircleFill } from 'react-icons/bs'

import Header from '../../Components/Header'
import './styles.css'


const Projects = () => {
  const [hoveredItem, setHoveredItem] = useState({});
  const [state, setState] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setState(true);
    }, 5);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleImageHover = ({ name, technology, description }) => {
    setHoveredItem({ name: name, technology: technology, description: description });
  };

  console.log(hoveredItem, 'hoveredItem')
  return (
    <div className='projects_container'>
      <Header title='Projects' icon={<BsInfoCircleFill className='image_size' />} />

      <div className={`projects_body_container ${state ? 'zoom-out-enter' : 'zoom-out-leave'}`}>
        {projectsData.map((item) => (
          <div
            className='projects_item_card'
            onMouseEnter={() => handleImageHover({ name: item?.name, technology: item?.technology, description: item?.description })}
            onMouseLeave={() => handleImageHover({})}
          >
            <img src={item?.icon} alt='Icon' className='project_icon' />

            <div className='project_text'>{item?.name}</div>
          </div>
        ))}
      </div>

      <div className='project_description'>
        {hoveredItem?.name || hoveredItem?.technology || hoveredItem?.description ? (
          <div className='description_content'>
            <div className='p_title'> <div className='heading'> Title: </div> <div> {hoveredItem?.name} </div> </div>
            <div className='p_technology'> <div className='heading'>  Technology: </div> {hoveredItem?.technology} </div>
            <div className='p_description'> <div className='heading'>  Description: </div> {hoveredItem?.description} </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Projects