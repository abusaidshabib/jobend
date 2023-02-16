import React from 'react';
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className='contact_div'>

      <h1 className='title1'>Contact Us</h1>
      <p className='para1'>The purpose of a blog contact page is to provide a way for readers to get in touch with the blog owner or organization, whether for feedback, questions, or to pitch ideas for articles. It is an important element of any blog, as it allows readers to easily communicate with the blog owner and helps to build trust and credibility. A well-designed blog contact page should be easy to find and use, and should include clear and concise instructions on how to get in touch. It should also include any relevant contact details, such as an email address or social media profiles, and should provide multiple ways for readers to reach out, such as through a contact form, email, or social media. Additionally, it is important to regularly check and respond to any messages or inquiries received through the contact page to ensure that readers receive timely and helpful responses.</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <form className='form_div_reg'>
        <label className='title4' htmlFor='name'>
          Enter Your Name
        </label>
        <br />
        <br />
        <input className='input_field' type="text" name="name" id="name" />

        <label className='title4' htmlFor='email'>
          Enter Your Email
        </label>
        <br />
        <br />
        <input className='input_field' type="email" name="email" id="email" />

        <label className='title4' htmlFor="password">
          Enter Your Password
        </label >
        <br />
        <br />
        <input className='input_field' type="password" name="password" id="password" />
      </form>
    </div>
  );
};

export default ContactUs;