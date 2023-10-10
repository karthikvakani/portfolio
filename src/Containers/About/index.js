import React, { useEffect, useState } from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'

import Header from '../../Components/Header'
import myimage from '../../images/my_image.jpeg'
import './styles.css'

const About = () => {
  const [state, setState] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setState(true);
    }, 5);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`about_container`}>
      <Header title='About Me' icon={<BsInfoCircleFill className='image_size' />} />

      <div className={`about_container_content ${state ? 'zoom-out-enter' : 'zoom-out-leave'}`} >
        <div className='about_left_container' >
          <img alt="myimage" src={myimage} className='image_tag' />
        </div>

        <div className='about_right_container'>
          <div className='about_text'>
            <div>
              Hey, my name is karthik vakani. I am a software developer based in Kandukur, India.
            </div>

            <div>
              I've achieved my B.Tech degree in Computer Science and Engineering from SASTRA Deemed University in Thanjavur.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About