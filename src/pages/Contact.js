import React from "react";
import { useState } from "react";
import "../assets/css/style.css";
import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import { Typography } from "@mui/material";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateName = (name) => {
    if (name.length <= 0) setErrorMessage("Name is required");
    else setErrorMessage("");
  };

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const validateEmail = (email) => {
    if (email.length <= 0) setErrorMessage("Email is required");
    else if (!isEmailValid(email)) setErrorMessage("Email is not valid");
    else setErrorMessage("");
  };

  const validateMessage = (message) => {
    if (message.length <= 0) setErrorMessage("Message is required");
    else setErrorMessage("");
  };

  return (
    <section>
      <Typography variant="h3" sx={{ marginBottom: 1 }}>
        Contact
      </Typography>
      <FormControl className="contactForm">
        <FormLabel htmlFor="name">Name:</FormLabel>
        <TextField
          type="text"
          id="name"
          size="small"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          onBlur={(e) => validateName(e.currentTarget.value)}
          required
        />
        <FormLabel htmlFor="email">Email address:</FormLabel>
        <TextField
          type="email"
          id="email"
          size="small"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          onBlur={(e) => validateEmail(e.currentTarget.value)}
          required
        />
        <FormLabel htmlFor="message">Message:</FormLabel>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
          onBlur={(e) => validateMessage(e.currentTarget.value)}
          required
        />
        {errorMessage && (
          <Typography className="error">{errorMessage}</Typography>
        )}
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </FormControl>
    </section>
  );
}

export default Contact;
