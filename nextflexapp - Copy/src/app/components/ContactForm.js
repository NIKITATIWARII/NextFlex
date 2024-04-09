'use client'
import React, { useState } from 'react';
import styles from '@/app/contact/contact.module.css'

const ContactForm = () => {
  const [user, setUser]  = useState({
    username:"",
    email:"",
    Phone:"",
    message:""
  })

  function handleChange(e) {
    const name = e.target.value;
    const value = e.target.value;

    setUser((prevUser) => ({...prevUser, [name]:value}))
  }

  function handleSubmit() {

  }
  return (
    <form className={styles.contact_form} onSubmit={handleSubmit} > 
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
            Enter Your Name:
        <input type='text' name='username' id='username' placeholder='enter your name' value={user.username} onChange={handleChange}/>
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
            Enter Your email:
        <input type='email' name='email' id='email' placeholder='enter your email' value={user.email} onChange={handleChange} />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="Phone" className={styles.label}>
            Enter Your Phone:
        <input type='text' name='Phone' id='Phone' placeholder='enter your Phone' value={user.Phone} onChange={handleChange} />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
            Enter Your Message:
        <textarea type='text' name='message' id='message' placeholder='enter your message' rows={3} value={user.message} onChange={handleChange} />
        </label>
      </div>
      <div>
        <button type='submit'>
         Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
