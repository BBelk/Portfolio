import React from 'react'

const styles = {
  footerStyle: {
    // background: 'blue',
    justifyContent: 'flex-end',
    // color: 'white',
    padding: 20,
    backgroundColor: '#92AA83',
    
  },
};

export default function Footer() {
  return (
    <section style={styles.footerStyle} className="footer mt-auto py-3">
      <h2>&copy; 2022</h2>
    </section>
  );
}