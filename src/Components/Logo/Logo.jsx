import React from 'react'
import logorosa from '../../assets/logorosa.png'
import logobranca from '../../assets/logobranca.png'

const Logo = ({cor = 'rosa'}) => {
  return (
    <div>
      {cor == 'rosa' && <img src={logorosa} alt="Logo Digital" />}
      {cor == 'branca' &&  <img src={logobranca} alt="Logo Digital" />}
    </div>
  )
}

export default Logo
