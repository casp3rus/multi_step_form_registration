import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Form, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { BASE_API_URL } from './../../utils';
import { motion } from 'framer-motion';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user_email: '',
      user_password: '',
    },
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [userDetails, setUserDetails] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${BASE_API_URL}/login`, data);
      setSuccessMessage('User with the provided credentials found.');
      setErrorMessage('');
      setUserDetails(response.data);
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data);
      }
    }
  };

  return (
    <Form className='input-form' onSubmit={handleSubmit(onSubmit)}>
      <motion.div
        className='col-md-6 offset-md-3'
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150 }}
      >
        {errorMessage ? (
          <Alert variant='danger'>{errorMessage}</Alert>
        ) : (
          <div>
            {userDetails && (  
            <div>
            <Alert variant='success'>{successMessage}</Alert>
            <Table striped bordered hover size="sm">
              <tbody>
                <tr>
                  <td>First name</td>
                  <td>{userDetails.first_name}</td>
                </tr>
                <tr>
                  <td>Last name</td>
                  <td>{userDetails.last_name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{userDetails.user_email}</td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td>{userDetails.country}</td>
                </tr>
                <tr>
                  <td>State / County</td>
                  <td>{userDetails.state}</td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>{userDetails.city}</td>
                </tr>
              </tbody>
            </Table>
            </div>
            )}
          </div>
        )}
        <Form.Group controlId='user_email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            name='user_email'
            placeholder='Enter your email address'
            {...register('user_email', {
              required: 'Email is required.',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid.',
              },
            })}
            // className={`${errors.user_email ? 'input-error' : ''}`}
          />
          {errors.user_email && (
            <p className='errorMsg'>{errors.user_email.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId='user_password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='user_password'
            placeholder='Choose a password'
            {...register('user_password', {
              required: 'Password is required.',
              minLength: {
                value: 6,
                message: 'Password should have at-least 6 characters.',
              },
            })}
            // className={`${errors.user_password ? 'input-error' : ''}`}
          />
          {errors.user_password && (
            <p className='errorMsg'>{errors.user_password.message}</p>
          )}
        </Form.Group>

        <Button variant='primary' type='submit'>
          Check Login
        </Button>
      </motion.div>
    </Form>
  );
};

export default Login;
