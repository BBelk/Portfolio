import React from 'react'

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
};

export default function Footer() {
  return (
    <section style={styles.footerStyle} className="footer mt-auto py-1 text-center">
      <h5>&copy; 2022 &mdash; Bruce Belk</h5>
    </section>
  );
}