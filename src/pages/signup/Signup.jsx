import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword } from '../../firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slice/AuthSlice';

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.password
      );
      
      const user = userCredential.user;
      
      dispatch(setUser({
        uid: user.uid,
        email: user.email,
        displayName: formData.username
      }));
      
      navigate('/');
    } catch (error) {
      setError(error.message);
      console.error('Signup error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='md:flex w-[100%] gap-3 justify-center items-center'>
      <div className='md:flex hidden md:w-[40%] w-[100%] md:pt-5 justify-center'>
        <img src="https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5598.jpg?w=740" alt="" />
      </div>
      <div className="flex justify-center md:pt-5 mt-24 md:mt-0 md:w-[40%] w-[100%]">
        <form
          className="bg-white p-8 rounded-lg shadow-2xl w-96"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">Sign Up</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border-b border-gray-600 outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border-b border-gray-600 outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password (min 6 characters)"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border-b border-gray-600 outline-none"
              required
              minLength="6"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
          <Link to={'/login'} className='flex gap-1 mt-4 justify-center'>Already registered? <p className='flex text-blue-900 font-bold'>Login</p></Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;