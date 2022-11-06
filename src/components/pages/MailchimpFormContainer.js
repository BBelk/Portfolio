import React from 'react';
// import './mcFormStyles.scss';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const MailchimpFormContainer = props => {

  // const postUrl = 'https://brucebelk.us8.list-manage.com/subscribe/post'
  // const postUrl = `https://brucebelk.us8.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
      <div>
       <h1>{process.env.REACT_APP_MAILCHIMP_U}</h1>
      <h1>Hellow world</h1>
      </div>
        // <div className="mc__form-container">
        //     <MailchimpSubscribe 
        //       url={postUrl}
        //     />
        // </div>
    );
};

export default MailchimpFormContainer;