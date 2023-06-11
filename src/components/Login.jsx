import React from "react";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

const Login = () => {
        
            const [username, setUsername] = useState('');
            const [password, setPassword] = useState('');
            const [errors, setErrors] = useState({});
            const navigate = useNavigate();
            const handleUsernameChange = (e) => {
              const inputValue = e.target.value;
              // Perform validation for valid characters
              // You can use regular expressions or any other validation logic
              const isValidInput = /^[a-zA-Z0-9]+$/.test(inputValue);
          
              setUsername(inputValue);
          
              if (!isValidInput) {
                setErrors({ ...errors, username: 'Invalid characters entered' });
              } else {
                setErrors({ ...errors, username: '' });
              }
            };
          
            const handlePasswordChange = (e) => {
              const inputValue = e.target.value;
              setPassword(inputValue);
            };
          
            const handleSubmit = (e) => {
              e.preventDefault();
              // Handle form submission logic here
              const formData = {
                username: username,
                password: password
              };
              sendData(formData);
            };

            function sendData(data)
            {
              const csrfToken = Cookies.get('csrftoken');
              axios.defaults.headers.common['X-CSRFToken'] = csrfToken;
              axios.post('/SourceSeperator/api/login',data)
                  .then(result => {
                    // Handle the response from the backend
                    console.log(result);
                    //Go to the Dashboard
                    navigate("/Dashboard"); // Replace '/new-page' with the actual path of the page you want to navigate to
                  })
                  .catch(error => {
                    // Handle any errors
                    console.error(error);
                  });
            }
          
            return (
            <div className="flex justify-center items-center h-screen">
              <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 bg-gray-100 rounded-lg shadow-md mt-1">
                <div className="mb-4">
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                <div className="mb-4">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md">
                Login
                </button>
                <p className="text-center mt-4 text-sm text-gray-600">
                    Don't have an account? <a href="/Register" className="text-blue-500">Sign Up</a>
                </p>
              </form>
                
              </div>
            );
};
          


export default Login;