import React from 'react';

export default function Home() {
  return (
    <div className='p-2'>
      <h1>Resume</h1>
      <p>
        Resume is available <a href="https://docs.google.com/document/d/1HDgAJtdfN8kw20kA3bTNSPmSp-eRplVa7NmPXHd8i64/edit?usp=sharing" target="_blank">here.</a>
      </p>
      <h2>Front-end Tech</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
        <li>Node.js</li>
        <li>RESTful APIs</li>
      </ul>
      <h2>Back-end Tech</h2>
      <ul>
        <li>Express</li>
        <li>Sequelize</li>
        <li>NoSQL, SQL</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>React</li>
        <li>React.js</li>
      </ul>
    </div>
  );
}
