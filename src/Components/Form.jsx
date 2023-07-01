import React, { useState, useContext } from "react";
import { ContextGlobal } from '../Components/utils/global.context'

const Form = () => {
  // Create state variables for each input field
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const { state } = useContext(ContextGlobal);
  const { theme } = state;


  // Create a state variable for the message
  const [message, setMessage] = useState("");

  // Create an event handler for form submission
  const handleSubmit = (e) => {
    // Prevent the default behavior
    e.preventDefault();
    // Do something with the form data, such as sending it to an API
    console.log({ text, email, name, lastName });
    // Validate the form data
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    setMessage("")
    if (
      text.length > 0 &&
      emailRegex.test(email) &&
      name.length > 3 &&
      lastName.length > 3
    ) {
      // If the data is valid, show a success message
      setMessage(`Thanks ${name}`);
    } else {
      // If the data is invalid, show an error message
      setMessage("Please verify your input.");
    }
  };

  return (
    <form className={`contactForm ${theme === 'dark' ? 'dark' : 'light'}`} onSubmit={handleSubmit}>
      <label className="formLabel">
        Text:
        <input className="formInput"
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label className="formLabel">
        Email:
        <input className="formInput"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Please enter a valid email address"
        />
      </label>
      <label className="formLabel">
        Name:
        <input className="formInput"
          type="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          
        />
      </label>
      <label className="formLabel">
        Last Name:
        <input className="formInput"
          type="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          
        />
      </label>
      <button className= 'formButton'   type="submit">Submit</button>
      {/* Add a paragraph element to display the message */}
      <p style={{ color: message.includes("success") ? "green" : "red" }}>
        {message}
      </p>
    </form>
  );
};

export default Form;
