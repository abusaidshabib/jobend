import React from 'react';
import "./SignUp.css";

const SignUp = () => {

  return (
    <div className='form_main_div'>
      <h2 className='title2'>Sign up</h2>
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

export default SignUp;