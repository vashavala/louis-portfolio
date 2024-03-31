'use client'
import React, { useState } from 'react';

export default function ContactMe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [error, setError] = useState('')

  function onSubmit(e: any) {
    e.preventDefault();
    e.stopPropagation();

    // fetch("https://formcarry.com/s/e2JkanJeIzf", {
    fetch("https://formcarry.com/s/dC753SSD0Uh", {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
      .then(response => response.json())
      .then(response => {
        if (response.code === 200) {
          alert("We received your submission, thank you!");
        }
        else if (response.code === 422) {
          // Field validation failed
          setError(response.message)
        }
        else {
          // other error from formcarry
          setError(response.message)
        }
      })
      .catch(error => {
        // request related error.
        setError(error.message ? error.message : error);
      });
  }

  return (
    <section className="h-[50vh] w-full flex flex-col items-center justify-center gap-16" id="Contact Me">
      <span className="text-4xl font-bold">Let me know what I can do for you</span>

      <form onSubmit={(e) => onSubmit(e)} className="flex flex-col items-center gap-16 text-2xl">
        <div className="flex items-center gap-12">
          <div className="flex flex-col gap-4">
            <label htmlFor="name">Full Name</label>
            <input className="bg-[var(--background-color)] rounded border-2 border-solid border-[var(--text-color)] p-2" type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Your first and last name" />

            <label htmlFor="email">Your Email Address</label>
            <input className="bg-[var(--background-color)] rounded border-2 border-solid border-[var(--text-color)] p-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Enter your email" />
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="message">Your message</label>
            <textarea rows={4} className="bg-[var(--background-color)] rounded border-2 border-solid border-[var(--text-color)] p-2" value={message} onChange={(e) => setMessage(e.target.value)} id="message" placeholder="Enter your message..."></textarea>
          </div>
        </div>

        <div className="flex flex-col">
          <button type="submit" className='rounded-md border-2 border-[var(--text-color)] w-48 aspect-[3]'>Send</button>
        </div>
      </form>
    </section>
  );
}



