import React from 'react';
import './contact.css';
import { useForm } from '@formspree/react';
import Lottie from 'lottie-react';
import doneAnimation from '../animation/done.json';
import contactAnimation from '../animation/contact.json';

export default function Contact() {
  const [state, handleSubmit] = useForm('mqkvrleq');

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-email"></span>
        Contact us
      </h1>
      <p className="subtitle">Contact us for more information and git notification about packet.</p>
      <div style={{ justifyContent: 'space-between' }} className="flex">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input autoComplete="off" type="email" name="email" id="email" required />
          </div>
          <div className="" style={{ marginTop: '24px' }}>
            <label htmlFor="message">Your message:</label>
            <textarea name="message" id="message" required />
          </div>
          <button id="contact" type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? 'submitting...' : 'submit'}
          </button>

          {state.succeeded && (
            <h1 className="flex lighttitle" style={{ marginTop: '24px' }}>
              <Lottie loop={false} style={{ height: 60 }} animationData={doneAnimation} /> Thanks.
              Your message has been sent successfully!
            </h1>
          )}
        </form>
        <div className="animation ">
          <Lottie
            className="contactanimation"
            style={{ height: 300 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
}
