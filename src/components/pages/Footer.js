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
  let iconStyle = {color: "black", fontSize: "2.5em"}
  return (
    <section style={styles.footerStyle} className="footer mt-auto py-2 text-center justify-content-center">
      <div className="row w-25 justify-content-center g-3">
      <a href="https://github.com/BBelk" className="col">
        <FaGithub style={iconStyle}/>
      </a>
      <a href="https://www.linkedin.com/in/bruce-belk-28716769/" className="col">
        <FaLinkedin style={iconStyle}/>
      </a>
      <a href="https://twitter.com/BruceBelk" className="col">
        <FaTwitter style={iconStyle}/>
      </a>
      <a href="mailto:contact@brucebelk.com?subject=Hello!" className="col">
        <FaMailBulk style={iconStyle}/>
      </a>
      </div>


      {/* </div> */}
      <h5 className="my-1">&copy; 2022 &mdash; Bruce Belk</h5>
    </section>
  );
}