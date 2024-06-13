"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [selectedType, setSelectedType] = useState('talent');

  const handleTypeSelect = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform form validation here
    if (password !== retypePassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        name,
        email,
        password,
        selectedType // or 'applicant'
      });
      // console.log(response.data.token);
      // Handle successful login, e.g., redirect to dashboard
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error, e.g., display error message
    }
    // Proceed with registration
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Type:', selectedType);
    // Make API call to register user
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            
          <div className="mb-6">
            <p className="block text-gray-700 font-bold mb-2">Select Type</p>
            <label className="mr-4">
              <input
                type="radio"
                value="talent"
                checked={selectedType === 'talent'}
                onChange={handleTypeSelect}
                className="mr-1"
              />
              Talent
            </label>
            <label>
              <input
                type="radio"
                value="company"
                checked={selectedType === 'company'}
                onChange={handleTypeSelect}
                className="mr-1"
              />
              Company
            </label>
          </div>
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="retypePassword" className="block text-gray-700 font-bold mb-2">Retype Password</label>
            <input type="password" id="retypePassword" value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} placeholder="Retype your password" className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
          </div>
        </form>
        <div>
            Already have an account ? <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
