import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/6a7a00c0-6399-11ed-891b-4f350712a1f0";

const Contact = () => {
  const [status, setStatus] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Anything you need to inject dynamically
    const injectedData = {
      DYNAMIC_DATA_EXAMPLE: 123,
    };
    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    Object.assign(data, injectedData);

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // It's likely a spam/bot request, so bypass it to validate via captcha
        if (response.status === 422) {
          Object.keys(injectedData).forEach((key) => {
            const el = document.createElement("input");
            el.type = "hidden";
            el.name = key;
            el.value = injectedData[key];

            e.target.appendChild(el);
          });

          e.target.submit();
          throw new Error("Please finish the captcha challenge");
        }

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => setStatus("We'll be in touch soon."))
      .catch((err) => setStatus(err.toString()));
  };

  if (status) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">{status}</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div>
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div>
        <button type="submit"> Send a message </button>
      </div>
    </form>
  );
}


export default Contact;








// import React, { useState } from 'react';
// import { validateEmail } from '../../utils/helpers';

// function Contact() {
//   const [formState, setFormState] = useState({ name: '', email: '', message: '' });

//   const [errorMessage, setErrorMessage] = useState('');
//   const { name, email, message } = formState;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!errorMessage) {
//       console.log('Submit Form', formState);
//     }
//   };

//   const handleChange = (e) => {
//     if (e.target.name === 'email') {
//       const isValid = validateEmail(e.target.value);
//       if (!isValid) {
//         setErrorMessage('Your email is invalid.');
//       } else {
//         setErrorMessage('');
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage('');
//       }
//     }
//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//       console.log('Handle Form', formState);
//     }
//   };

//   const checkAndSend = () => {
//     if(errorMessage != ''){
//       console.log("messed up");
//       return;
//     }
//     console.log("good to go");
//   }

//   return (
//     <div className='d-flex justify-content-center'>

//       <section className='contact-form'>
//         <h1 className='heroHeader'>Contact Me</h1>
//         <form id="form-handler" onSubmit={handleSubmit}>
          
//             <p className='contact-headers'>Name:</p>
//             <input className="contact-input" type="text" name="name" defaultValue={name} onBlur={handleChange} />

//             <p className='contact-headers'>Email:</p>
//             <input className="contact-input" type="email" name="email" defaultValue={email} onBlur={handleChange} />

//             <p className='contact-headers'>Message:</p>
//             <textarea className="contact-input" name="message" defaultValue={message} onBlur={handleChange} />

//             <div className="button">
//               <button data-testid="button" type="submit" onClick={checkAndSend}>Submit</button>
//             </div>
         
//         </form>
//       </section>
//     </div>
//   );
// }

// export default Contact;