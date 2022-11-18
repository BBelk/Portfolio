import React from 'react';

export default function Home() {
  return (
    <div className='p-2'>
      <h1>Resume</h1>
      <p>
        Resume is available <a href="https://docs.google.com/document/d/1HDgAJtdfN8kw20kA3bTNSPmSp-eRplVa7NmPXHd8i64/edit?usp=sharing" target="_blank">here.</a>
      </p>
      <div className='row'>
        <div className='col-sm-4'>
      <h2>Front-end Tech</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
        <li>Node.js</li>
        <li>RESTful APIs</li>
      </ul>
      </div>
      <div className='col-sm-4'>
      <h2>Back-end Tech</h2>
      <ul>
        <li>Express</li>
        <li>Sequelize</li>
        <li>NoSQL, SQL</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>React</li>
      </ul>
      </div>
      <div className='col-sm-4'>
      <h2>Game Development</h2>
      <ul>
        <li>4+ years Unity Experience</li>
        <li>C#</li>
        <li>Basic 3D modeling (Blender)</li>
        <li>Photoshop</li>
        <li>Steam</li>
        <li>iOS/Appstore</li>
      </ul>
      </div>
      
      </div>
    </div>
  );
}
