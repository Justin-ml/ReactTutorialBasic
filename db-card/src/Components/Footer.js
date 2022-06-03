import React from 'react'
import facebookicon from '../images/facebookIcon.jpg';
import instagramIcon from '../images/instagramIcon.jpg';
import twitterIcon from '../images/twitterIcon.jpg';
import gitIcon from '../images/gitIcon.png';

export default function Footer () {
  return (
    <footer className='social-media'>
        <img src={facebookicon} alt='Fb Icon' />
        <img src={instagramIcon} alt='instagram icon' />
        <img src={twitterIcon} alt='twitter Icon' />
        <img src={gitIcon} alt='git Icon' />
        
    </footer>
  )
}

