import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from '../../firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slice/AuthSlice';

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      
      const user = userCredential.user;
      
      dispatch(setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || user.email.split('@')[0]
      }));
      
      navigate('/');
    } catch (error) {
      setError(error.message);
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='md:flex w-[100%] gap-3 justify-center items-center'>
      <div className="flex justify-center md:pt-5 mt-24 md:mt-0 md:w-[40%] w-[100%]">
        <form
          className="bg-white p-8 rounded-lg shadow-2xl w-96"
          onSubmit={handleLogin}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">Log In</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={credentials.email}
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
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border-b border-gray-600 outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition duration-200 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
          <Link to={'/signup'} className='flex gap-1 mt-4 justify-center'>Not registered? <p className='flex text-blue-900 font-bold'>Signup</p></Link>
        </form>
      </div>
      <div className='md:flex hidden md:w-[40%] w-[100%] md:pt-5 justify-center'>
        <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7873.jpg?w=740" alt="" />
      </div>
    </div>
  );
}

export default Login;