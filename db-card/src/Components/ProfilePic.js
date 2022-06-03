import React from 'react';
import profilepic from '../images/profile-pic1.jpg';

export default function ProfilePic() {
  return (
    <div>
        <img src={profilepic} alt='Profilepic' id='profile-pic' />
    </div>
  )
}
