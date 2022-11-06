import React, { useState, useEffect}  from 'react';
import profilePic from '../../assets/images/its-me.png';
import MailchimpFormContainer from './MailchimpFormContainer';
import { useGHStContext } from '../../utils/ContextProvider';
import PrimaryCTAButton from "../../ui/PrimaryCTAButton/PrimaryCTAButton";
import Modal from './components/ui/Modal/Modal.js';





function About() {
  const imgStyle = {
    width: '200px',
    height: '200px',
  }

  const [openMenu, setOpenMenu] = useState(false);

  const {setModalOpen} = useGHStContext();
  
  const mailchimpModalHandler = () => {
    setModalOpen(true);
    setOpenMenu(false);
  }

  return (
    <div className='p-3'>
      {/* <MailchimpFormContainer /> */}
      <h1>About Me</h1>
      <img src={profilePic} alt='profile pic' className="img-thumbnail" style= {imgStyle}/>
      <p className="p-3">
        Hello! My name is Bruce Belk and welcome to my portfolio website. I am currently in a Full Stack Bootcamp through UNC Charlotte. I live in Winston-Salem, North Carolina. I have previously worked in game development and have experience with C# and the Unity Game Engine. Contact me for more information!
      </p>
      <div>
                <PrimaryCTAButton
                    handleClick={mailchimpModalHandler}
                    label="get updates"
                    icon={null}
                />
            </div>
            <Modal><MailchimpFormContainer /></Modal>
    </div>
    
  );
}

export default About;