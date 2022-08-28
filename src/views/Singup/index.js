import React, { useContext } from 'react';
import { DataContext } from '../../state/dataContext';
import Form from '../../components/Form';

const FormSignup = () => {
  const {
    handleSubmit, 
    handleChange, 
    values, 
    errors
  } = useContext(DataContext);

  return (
    <Form 
    title='Register'
    onSubmit={handleSubmit}
    >
      <div>
        <label>Name</label>
        <input
          type='text'
          name='username'
          placeholder='Enter your username'
          value={values.username}
          onChange={handleChange}
        />
        {!!errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type='email'
          name='email'
          placeholder='Enter your email'
          value={values.email}
          onChange={handleChange}
        />
        {!!errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Enter your password'
          value={values.password}
          onChange={handleChange}
        />
        {!!errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type='password'
          name='password2'
          placeholder='Confirm your password'
          value={values.password2}
          onChange={handleChange}
        />
        {!!errors.password2 && <p>{errors.password2}</p>}
      </div>
      <button type='submit'>
        Sign up
      </button>
      <span>
        Already have an account? Login <a href='#'>here</a>
      </span>
    </Form>
  );
};

export default FormSignup;