import React, { useState, useEffect } from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'

import socialMediaData from './socialmediaContants'
import Header from '../../Components/Header'
import './styles.css'

const Contact = () => {
  const [state, setState] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setState(true);
    }, 5);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <Header title='Contact Info' icon={<BsInfoCircleFill className='image_size' />} />
      <div className={`contact_container ${state ? 'zoom-out-enter' : 'zoom-out-leave'}`}>
        <div className='contact_container_text'>
          Get in touch with me at <a className='contact_container_link' href="mailto: karthikvakani@gmail.com">karthikvakani@gmail.com</a>.&nbsp;Also find me here...
        </div>

        <div className='socialmedia_lists_container'>
          {socialMediaData.map((item) => (
            <div className='socialmedia_list_item' key={item?.name}>
              <a href={item?.src}>
                {item?.img}
              </a>
            </div>

          ))
          }
        </div>

      </div>

    </div>
  )
}

export default Contact