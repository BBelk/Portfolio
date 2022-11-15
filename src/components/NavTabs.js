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
    <div>
      <nav className="navbar navbar-expand-lg" style={styles.navStyle} >
  {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <h1 className='text-black px-4 navbar-brand'>
    <a
        className="nav-link"
          href="#about"
          onClick={() => handlePageChange('About')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          Bruce Belk
        </a>
    </h1>
  
  <div>
    <ul className="navbar-nav mr-auto" >
    {/* <ul className="nav nav-pills nav-fill" style={styles.navStyle}> */}
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      
      <li className="nav-item">
        <a
        className="nav-link"
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
        className="nav-link"
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
        className="nav-link"
          href="#resume"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    </div>
    </nav>
    </div>

    
  );
}

export default NavTabs;
