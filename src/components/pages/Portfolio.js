import React from 'react';

import vanGame from '../../assets/images/itchBanner.png';
import flower1 from '../../assets/images/flowers.jpg';
import flower2 from '../../assets/images/flower2.jpg';
import flower3 from '../../assets/images/flower3.jpg';

import gitHubPic from '../../assets/images/GitHub-Mark.png';

const style = {
  imgStyle: {
    width: '350px',
    height: '250px',
    // background: 'transparent',
    fill: "50%",
  },
  logoStyle: {
    width: '25px',
    height: '25px',
  }
  
}


export default function Blog() {
  return (
    <div className='p-3'>
      <h1>Portfolio</h1>
      
      <div style={{display:'grid',
    gridTemplateRows: 'auto',
    rowGap: '5ch',
    gridTemplateColumns: '1fr 1fr',
    padding: '50px'
    }}>
    <div className="img-thumbnail" style= {style.imgStyle}>
    <img src={vanGame} alt='profile pic' style={{height:'100%', width:'100%'}} />
    <h3>The Van Game 
    <a href="https://www.github.com/Test">
      <img  src={gitHubPic} alt='github logo' style= {style.logoStyle}/>
    </a>
      </h3> 
    </div>

    <div className="img-thumbnail" style= {style.imgStyle}>
    <img src={flower1} alt='profile pic' style={{height:'100%', width:'100%'}} />
    <h3>NotInsta-Clone 
    <a href="https://www.github.com/Test">
      <img  src={gitHubPic} alt='github logo' style= {style.logoStyle}/>
    </a>
      </h3> 
    </div>

    <div className="img-thumbnail" style= {style.imgStyle}>
    <img src={flower2} alt='profile pic' style={{height:'100%', width:'100%'}} />
    <h3>Pokemon Giphy
    <a href="https://www.github.com/Test">
      <img  src={gitHubPic} alt='github logo' style= {style.logoStyle}/>
    </a>
      </h3> 
    </div>

    <div className="img-thumbnail" style= {style.imgStyle}>
    <img src={flower3} alt='profile pic' style={{height:'100%', width:'100'}} />
    <h3>A third Thing
    <a href="https://www.github.com/Test">
      <img  src={gitHubPic} alt='github logo' style= {style.logoStyle}/>
    </a>
      </h3> 
    </div>

      
      </div>
        
    </div>
  );
}
