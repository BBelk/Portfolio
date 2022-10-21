import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

const styles = {
  navStyle: {
    background: '#E0EDC5',
    // justifyContent: 'flex-end',
    color: 'white',
    padding: 20
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-pills nav-fill" style={styles.navStyle}>
      <h1 className='text-black px-4'>Bruce Belk</h1>
      <li className="nav-item my-2">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      
      <li className="nav-item my-2">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item my-2">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item my-2">
        <a
          href="#resume"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
