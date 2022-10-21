import React from 'react'

import gitHubPic from '../../assets/images/GitHub-Mark.png';
import linkedInPic from '../../assets/images/linkedInLogo.png';
import emailPic from '../../assets/images/email.png';

const styles = {
  footerStyle: {
    // background: 'blue',
    justifyContent: 'flex-end',
    // height: '10px',
    // margin-bottom: '10px',
    // color: 'white',
    padding: 20,
    // padding-bottom: '10px',
    // pb-1,
    backgroundColor: '#92AA83',    
  },
  imgStyle: {
    width: '50px',
    height: '50px',
    background: 'transparent',
  }
};

export default function Footer() {
  return (
    <section style={styles.footerStyle} className="footer mt-auto py-1 text-center">
      {/* <div d-inline-block> */}
      <a href="https://www.github.com/Test">
        <img  src={gitHubPic} alt='github logo' className="img-thumbnail m-3" style= {styles.imgStyle}/>
      </a>
      <a href="https://www.linkedin.com/">
        <img src={linkedInPic} alt='linkedin logo' className="img-thumbnail m-3" style= {styles.imgStyle}/>
      </a>
      <a href="mailto:test@gmail.com">
        <img src={emailPic} alt='email logo' className="img-thumbnail m-3" style= {styles.imgStyle}/>
      </a>


      {/* </div> */}
      <h5>&copy; 2022 &mdash; Bruce Belk</h5>
    </section>
  );
}