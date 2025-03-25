import React, { useState } from 'react';
import { BookOpenIcon, MailIcon, LockIcon, UserIcon } from 'lucide-react';
import { motion } from 'framer-motion';
const Auth = ({
  onLogin
}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call with timeout
    setTimeout(() => {
      setIsLoading(false);
      // Pass user data to parent component
      onLogin({
        username: formData.username || 'BookLover',
        email: formData.email
      });
    }, 1500);
  };
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };
  return <div className="min-h-screen pt-20 pb-12 flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <motion.div className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }}>
        <div className="px-4 py-8 sm:px-10">
          <div className="flex justify-center">
            <BookOpenIcon className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? 'Sign in to your account' : 'Create your account'}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button onClick={toggleAuthMode} className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none transition-colors duration-300">
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {!isLogin && <div>
                  <label htmlFor="username" className="sr-only">
                    Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input id="username" name="username" type="text" required className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300" placeholder="Username" value={formData.username} onChange={handleChange} />
                  </div>
                </div>}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MailIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300" placeholder="Email address" value={formData.email} onChange={handleChange} />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300" placeholder="Password" value={formData.password} onChange={handleChange} />
                </div>
              </div>
            </div>
            {isLogin && <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-300">
                    Forgot your password?
                  </a>
                </div>
              </div>}
            <div>
              <button type="submit" disabled={isLoading} className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                {isLoading ? <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg> : null}
                {isLogin ? 'Sign in' : 'Sign up'}
              </button>
            </div>
          </form>
        </div>
        <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-100 sm:px-10">
          <p className="text-xs text-center text-gray-500">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </motion.div>
    </div>;
};
export default Auth;