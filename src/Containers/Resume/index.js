import React,{useState,useEffect} from 'react'
import resume from '../../images/KarthikResume.jpg'
import { BsInfoCircleFill } from 'react-icons/bs'

import Header from '../../Components/Header'
import './styles.css'

const Resume = () => {
  const [state, setState] = useState(false)

  const url = 'http://localhost:3000/KarthikResume.pdf'

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setState(true);
    }, 5);

    return () => clearTimeout(timeoutId);
  }, []);

  const downloadFileAtUrl = () => {
    fetch(url).then((response) => response.blob()).then((blob) => {
      const blobURL = URL.createObjectURL(new Blob([blob]));
      const fileName = url?.split('/').pop();
      const aTag = document.createElement('a');
      aTag.href = blobURL;
      aTag.setAttribute('download', fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    });
  };

  const previewFileAtUrl = () => {
    window.open(url)
  }
  return (
    <div className='resume_container'>
      <Header title='Resume' icon={<BsInfoCircleFill className='image_size' />} />
      
      <div className={`resume_container_body ${state ? 'zoom-out-enter' : 'zoom-out-leave'}`}>
        <div className='resume_image_container'>
          <img src={resume} alt='My Resume' className='resume_image' />
        </div>

        <div className='resume_download_button_container'>
          <button className='download_button' onClick={previewFileAtUrl}>
            Preview Resume
          </button>

          <button className='download_button' onClick={downloadFileAtUrl}>
            Download Resume
          </button>
        </div>
      </div>
    </div>
  )
}

export default Resume