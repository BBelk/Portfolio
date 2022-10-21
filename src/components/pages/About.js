import React from 'react';
import profilePic from '../../assets/images/its-me.png';

const imgStyle = {
  width: '200px',
  height: '200px',
}

export default function About() {
  return (
    <div className='p-3'>
      <h1>About Me</h1>
      <img src={profilePic} alt='profile pic' className="img-thumbnail" style= {imgStyle}/>
      <p className="p-3">
        Hello! My name is Bruce Belk and welcome to my portfolio website. I am currently in a Full Stack Bootcamp through UNC Charlotte. I live in Winston-Salem, North Carolina. I have previously worked in game development and have experience with C# and the Unity Game Engine. Contact me for more information!
      </p>
    </div>
  );
}
