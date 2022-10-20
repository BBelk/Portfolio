import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  const styles = {
    doBG: {
      backgroundColor: "#F1F7EE",
      minHeight: '100vh',
      display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    },
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={styles.doBG}>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
      <Footer />
    </div>
  );
}
