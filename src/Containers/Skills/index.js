import React from 'react'
import Header from '../../Components/Header'
import { BsInfoCircleFill } from 'react-icons/bs'
import { skills } from './skillsdata'
import { Animate, AnimateKeyframes } from 'react-simple-animate'
import { Line } from 'rc-progress'
import './styles.css'

const Skills = () => {
  return (
    <div className='skills_container'>
      <Header title='Skills' icon={<BsInfoCircleFill className='image_size' />} />

      <div className='skills_body_container'>
        {skills.map((item) => (
          <div className='skills_mapping'>
            <Animate play duration={1} delay={0.3}
              start={{ transform: 'translateX(-200px)' }}
              end={{ transform: 'translateX(0px)' }}
            >
              <h3 className='label_text'> {item?.label} </h3>
              <div className='skills_list'>
                {item?.data?.map((itemskill) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={['opactity : 1', 'opacity :0']}
                    iterationCount='1'
                  >
                    <div className='item_skill' key={itemskill?.skill}>
                      <p> {itemskill?.skill} </p>

                      <Line
                        percent={itemskill?.percentage}
                        strokeWidth={'4'}
                        strokeColor='var(--yellow-theme-main-color)'
                        trailWidth={'4'}
                        strokeLinecap='square'
                      >
                      </Line>
                    </div>
                  </AnimateKeyframes>
                ))
                }
              </div>
            </Animate>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Skills