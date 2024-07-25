import { validateEmail } from '../../utils';
import { useState } from 'react';

export default function Contact() {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue)
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    setUserName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
    <div className="contactHeaderContainer">
    <h2><strong>Contact</strong> me</h2>
    <h3 className="sectionSubtitle sectionSubtitlePortfolio">Using the form below:</h3>
  </div>

    <form className="form" onSubmit={handleFormSubmit}>
      <div className="input-container">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          className="input"
        />
      </div>
      <div className="input-container">
        <input
          // value={userName}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          className="input"
        />
      </div>
      <div className="input-container">
      <input
        // value={message}
        name="message"
        onChange={handleInputChange}
        type="text"
        placeholder="message"
        className="input"
      />
      </div>

      <button type="submit">
        Submit
      </button>
    </form>
    </>
  );
}
