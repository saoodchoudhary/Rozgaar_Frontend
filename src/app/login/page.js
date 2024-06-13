"use client"
// components/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [selectedOption, setSelectedOption] = useState('talent');

  const router = useRouter();

  // const handleChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password)
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        email,
        password,
      });
      console.log(response.data);

      if(response.status === 200) {
        alert('Login successful');
        if(response.data.selectedType === 'talent') {
          router.push('/talent/dashboard');
        } else {
        router.push('/client/dashboard');
        }
      }
      // Handle successful login, e.g., redirect to dashboard
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error, e.g., display error message
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
        {/* <div className="flex items-center justify-center">
      <label className="mr-4">
        <input
          type="radio"
          value="talent"
          checked={selectedOption === 'talent'}
          onChange={handleChange}
          className="mr-1"
        />
        Talent
      </label>
      <label>
        <input
          type="radio"
          value="company"
          checked={selectedOption === 'company'}
          onChange={handleChange}
          className="mr-1"
        />
        Company
      </label>
    </div> */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
          </div>
        </form>
        <div>Do not have an account ? <Link href={"/register"}>Create Account</Link> </div>
      </div>
    </div>
  );
};

export default Page;
