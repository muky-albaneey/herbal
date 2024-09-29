// export default LogInForm;
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStoreUser } from '../../utills/store/auth';

const LogInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const setAuthData = useAuthStoreUser((state) => state.setAuthData);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePassword = (password: string): string | null => {
    if (!password) return 'The password field is empty.';
    if (password.length < 6) return 'The password should exceed 5 characters.';
    if (password.length > 14) return 'The password should not exceed 14 characters.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const validationError = validatePassword(formData.password);
    if (validationError) {
      setError(validationError);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(
        'https://backend-herbal.onrender.com/user/login',
        { email: formData.email, password: formData.password },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      
      const res = response.data;
      const { password, ...rest } = formData;
      setAuthData(res.jwtTokens, res.roleToken, res.refreshToken, rest);
      navigate('/');
    } catch (err) {
      if (err.response) {
        const { message } = err.response.data;
        setError(message || 'An error occurred. Please try again.');
      } else {
        setError('An error occurred. Please check your internet connection.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="mb-2.5 block font-medium text-white">Email</label>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-2.5 block font-medium text-white">Password</label>
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-success text-white rounded-lg"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-white">
            Don't have an account?{' '}
            <Link to="/register" className="text-green-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
