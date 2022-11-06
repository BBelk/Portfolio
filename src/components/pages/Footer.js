import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaMailBulk } from "react-icons/fa";

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
    width: '500px',
    height: '50px',
    // size: '50px',
    background: 'transparent',
  }
};

export default function Footer() {
  let iconStyle = {color: "black", fontSize: "3.5em"}
  return (
    <section style={styles.footerStyle} className="footer mt-auto py-2 text-center">
      <div className="row justify-content-center g-2">
      <a href="https://github.com/BBelk" className="col-sm-auto">
        <FaGithub style={iconStyle}/>
      </a>
      <a href="https://www.linkedin.com/in/bruce-belk-28716769/" className="imgStyle col-sm-auto">
        <FaLinkedin style={iconStyle}/>
      </a>
      <a href="mailto:bb@brucebelk.com" className="imgStyle col-sm-auto">
        <FaMailBulk style={iconStyle}/>
        {/* <img src='' alt='email logo' className="img-thumbnail m-3" style= {styles.imgStyle}/> */}
      </a>
      </div>


      {/* </div> */}
      <h5>&copy; 2022 &mdash; Bruce Belk</h5>
    </section>
  );
}