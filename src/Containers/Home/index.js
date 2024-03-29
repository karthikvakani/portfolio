import React, { useEffect, useState } from 'react'

import './styles.css'
function Home() {
  const [state, setState] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setState(true);
    }, 5);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`home_container ${state ? 'zoom-out-enter' : 'zoom-out-leave'}`}>
      <div className='title_text'>
        karthik vakani
      </div>

      <div className='tags_list'>
        <div className='tag'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="52" viewBox="0 0 24 24">
            <path fill="currentColor" d="M21 1H3C1.346 1 0 2.346 0 4v11c0 1.654 1.346 3 3 3h6v2H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2h-3v-2h6c1.654 0 3-1.346 3-3V4c0-1.654-1.346-3-3-3zm-7 19h-4v-2h4v2zm8-5c0 .551-.449 1-1 1H3c-.551 0-1-.449-1-1V4c0-.551.449-1 1-1h18c.551 0 1 .449 1 1v11zM20 4H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm0 9H4V5h16v8z" />
          </svg>

          <div className='tag_title'>
            Developer
          </div>
        </div>
      </div>
      <div className='moblie_description'>
          Use a desktop. you'll be amazed!
        </div>
    </div>
  )
}

export default Home