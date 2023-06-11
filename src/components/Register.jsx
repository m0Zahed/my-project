import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Register()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        const inputValue = e.target.value;
        // Perform validation for valid characters
        // You can use regular expressions or any other validation logic
        const isValidInput = /^[a-zA-Z0-9]{5,}_$/.test(inputValue);
    
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
    
    const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const FormData = {
        username : username,
        password : password,
        email : email,
    }

    sendData(FormData);
    };

    function sendData(data)
    {
        axios.post('/SourceSeperator/api/register',data)
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

    const handleEmailChange = (e) => {
    setEmail(e.target.value);
    }
    

    return (
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

            <div className="mb-4">
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-700">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email:</label>
            <input
                type="email"
                id="emailID"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md">
                Register
            </button>

        </form>
    );
}

export default Register;