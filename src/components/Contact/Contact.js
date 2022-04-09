// STYLES
import './Contact.css'

// HOOKS 
import { useState } from 'react'
import { useRef } from 'react';

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const [showConf, setShowConf] = useState(false);
  const [showError, setShowError] = useState(false);
  const formRef = useRef(null)

  const closeModal = () => {
    setShowConf(false)
    setShowError(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://portfolio-server-api.herokuapp.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    if (response.ok) {
      setShowConf(true)
    } else {
      showError(true)
    }
    console.log(formRef)
    formRef.current.reset()
  };

  return (
    <div className="contact">
      <h1>CONTACT</h1>
      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <h2>Message me</h2>
        <div>
          <label htmlFor="name"></label>
          <input type="text" id="name" placeholder="Name" required />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input type="email" id="email" placeholder="Email" required />
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea id="message" placeholder="Message" required />
        </div>
        <button type="submit">{status}</button>
      </form>
      <div className="info">
        <p className="name-text">josh campanella</p>
        <p className="email-text">joshcamp503@gmail.com</p>
        <p className="phone-text">503.888.2479</p>
      </div>
      {showConf && 
        <div className="conf-modal" onClick={closeModal}>
          <div className="message">
            <h3>MESSAGE SENT</h3>
            <p>Thank you for reaching out!</p>
            <p>You will hear from me soon.</p>
            <button className="close-modal" >Close</button>
          </div>
        </div>
      }
      {showError && 
        <div className="conf-modal" onClick={closeModal}>
          <div className="message">
            <h3 className="error">Something went wrong...</h3>
            <p>Sorry, please try again.</p>
            <button className="close-modal" >Close</button>
          </div>
        </div>
      }
    </div>
  );
}

export default Contact

