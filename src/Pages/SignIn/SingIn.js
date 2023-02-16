import React from 'react';

const SingIn = () => {
  return (
    <div className='form_main_div'>
      <h2 className='title2'>Sign In</h2>
      <form className='form_div_reg'>
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

export default SingIn;