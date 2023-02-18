import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';
import useTitle from '../../hook/UseTitle/UseTitle';
import "./SignUp.css";

const SignUp = () => {

  useTitle("Register")

  const { createUser, updateUser, verify } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form?.pathname || "/";

  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        const userData = {
          displayName: name
        }
        updateUser(userData)
          .then(() => {
            verify()
              .then(() => {
                form.reset();
                navigate(from, { replace: true });
              })
          })
          .catch(error => console.log(error));

      })
      .catch(error => console.log(error));
  }

  return (
    <div className='form_main_div'>
      <h2 className='title2'>Sign up</h2>
      <form onSubmit={handleSignUp} className='form_div_reg'>
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
        <p className='para1'>If you have any account <Link className='text_link' to="/login">Login</Link></p> <br /><br />
        <input className='button1' type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;