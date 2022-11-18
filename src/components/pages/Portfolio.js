import React from 'react';
import { Gallery } from "react-grid-gallery";

import vanGame from '../../assets/images/itchBanner.png';
import flower1 from '../../assets/images/flowers.jpg';
import flower2 from '../../assets/images/flower2.jpg';
import flower3 from '../../assets/images/flower3.jpg';

// import gitHubPic from '../../assets/images/GitHub-Mark.png';
import { FaGithub, FaSteam } from "react-icons/fa";

const style = {
  imgStyle: {
    // width: '100%',
    // height: '50%',
    // background: 'transparent',
    // fill: "50%",
    // 'margin-bottom': '-200px',
  },
  logoStyle: {
    width: '25px',
    height: '25px',
    'margin-bottom': '4px',
  }
  
}

const images = [
  {
     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
     width: 320,
     height: 174,
     isSelected: true,
     caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
      customOverlay: (
       <div className="custom-overlay__caption">
         <div>
         <a href="https://www.github.com/Test"></a>
         </div>
       </div>
     ),
  },

  {
     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
     width: 320,
     height: 212,
  },
];
let iconStyle = {color: "black", fontSize: "0.8em", 'margin-bottom': '4px', 'margin-left': '4px'}

export default function Blog() {
  return (
    <div className='p-3'>
    <h5>Portfolio</h5>
{/* <Gallery images={images} /> */}
    <div className='row gx-2'>
  <div className="col-sm-3 pb-5" style= {style.imgStyle}>
    <div className='p-3'>
  <img src={vanGame} alt='the van game pic' className="img-thumbnail" style={{height:'100%', width:'100%'}} />
  <h3>
  <a href="https://store.steampowered.com/app/2081860/The_Van_Game/">The Van Game 
  <FaSteam style={iconStyle}/>
  </a>
    </h3> 
    </div>
  </div>

  <div className="col-sm-3 pb-5" style= {style.imgStyle}>
    <div className='p-3'>
  <img src={flower1} alt='profile pic' className="img-thumbnail" style={{height:'100%', width:'100%'}} />
  <h3>NotInsta-Clone 
  <a href="https://www.github.com/Test">
    <FaGithub style={iconStyle}/>
  </a>
    </h3> 
    </div>
  </div>

  <div className="col-sm-3 pb-5" style= {style.imgStyle}>
    <div className='p-3'>
  <img src={flower2} alt='profile pic' className="img-thumbnail" style={{height:'100%', width:'100%'}} />
  <h3>Pokemon Giphy
  <a href="https://www.github.com/Test">
    <FaGithub style={iconStyle}/>
  </a>
    </h3> 
    </div>
  </div>

  <div className="col-sm-3 pb-5" style= {style.imgStyle}>
    <div className='p-3'>
  <img src={flower3} alt='profile pic' className="img-thumbnail" style={{height:'100%', width:'100%'}} />
  <h3>A third Thing
  <a href="https://www.github.com/Test">
    <FaGithub style={iconStyle}/>
  </a>
    </h3> 
    </div>
  </div>

    
    </div>
      
  </div>
//     <div className='p-3'>
//       <h1>Portfolio</h1>
// {/* <Gallery images={images} /> */}
//       <div style={{display:'flex',
//       'flex-wrap':'wrap',
//       // display:'grid',
//     gridTemplateRows: 'auto',
//     rowGap: '5ch',
//     gridTemplateColumns: '1fr 1fr',
//     padding: '50px'
//     }}>
//     <div className="img-thumbnail" style= {style.imgStyle}>
//     <img src={vanGame} alt='profile pic' style={{height:'100%', width:'100%'}} />
//     <h3>The Van Game 
//     <a href="https://store.steampowered.com/app/2081860/The_Van_Game/">
//       <img  src={gitHubPic} alt='github logo' style= {style.logoStyle}/>
//     </a>
//       </h3> 
//     </div>

//     <div className="img-thumbnail" style= {style.imgStyle}>
//     <img src={flower1} alt='profile pic' style={{height:'100%', width:'100%'}} />
//     <h3>NotInsta-Clone 
//     <a href="https://www.github.com/Test">
//       <img  src={gitHubPic} alt='github logo' style= {style.logoStyle}/>
//     </a>
//       </h3> 
//     </div>

//     <div className="img-thumbnail" style= {style.imgStyle}>
//     <img src={flower2} alt='profile pic' style={{height:'100%', width:'100%'}} />
//     <h3>Pokemon Giphy
//     <a href="https://www.github.com/Test">
//       <img  src={gitHubPic} alt='github logo' style= {style.logoStyle}/>
//     </a>
//       </h3> 
//     </div>

//     <div className="img-thumbnail" style= {style.imgStyle}>
//     <img src={flower3} alt='profile pic' style={{height:'100%', width:'100%'}} />
//     <h3>A third Thing
//     <a href="https://www.github.com/Test">
//       <img  src={gitHubPic} alt='github logo' style= {style.logoStyle}/>
//     </a>
//       </h3> 
//     </div>

      
//       </div>
        
//     </div>
  );
}
