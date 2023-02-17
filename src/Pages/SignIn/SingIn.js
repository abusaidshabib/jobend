import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';

const SingIn = () => {

  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form?.pathname || "/";

  const handleSignIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then(result => {
        const user = result.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(error => console.log(error));
  }

  return (
    <div className='form_main_div'>
      <h2 className='title2'>Sign In</h2>
      <form className='form_div_reg' onSubmit={handleSignIn}>
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
        <p className='para1'>If you don't have any account <Link className='text_link' to="/signup">Register</Link></p> <br/><br/>
        <input className='button1' type="submit" value="Sign In" />
      </form>
    </div>
  );
};

export default SingIn;