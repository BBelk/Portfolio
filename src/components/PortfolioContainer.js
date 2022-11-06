import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './pages/Footer';
import { GHSProvider } from '../utils/ContextProvider';
// import MailchimpFormContainer from './pages/MailchimpForm';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
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
    <>
      <GHSProvider>
    <div style={styles.doBG}>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
      <Footer />
    </div>
    </GHSProvider>
    </>
  );
}
