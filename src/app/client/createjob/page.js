"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Page = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [maxApplicants, setMaxApplicants] = useState('');
  const [deadline, setDeadline] = useState('');
  const [skillsets, setSkillsets] = useState('');
  const [img, setImg] = useState('');
  const [jobType, setJobType] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform form validation here
    // Proceed with job posting
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/createjob`, {
        jobTitle,
        maxApplicants,
        deadline,
        skillsets,
        jobType,
        location,
        salary,
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
    } catch (error) {
      console.error('Login failed:', error);
    }
    console.log('Job Title:', jobTitle);
    console.log('Max Applicants:', maxApplicants);
    console.log('Deadline:', deadline);
    console.log('Skillsets:', skillsets);
    console.log('Job Type:', jobType);
    console.log('Salary:', salary);
    console.log('location:', location);
    console.log('img:', img);
    // Make API call to post job
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="jobTitle" className="block text-gray-700 font-bold mb-2">Job Title</label>
            <input type="text" id="jobTitle" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="Enter job title" className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="img" className="block text-gray-700 font-bold mb-2">Image</label>
            <input type="file" id="img" onChange={(e) => setImg(e.target.files[0])} className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700 font-bold mb-2">location</label>
            <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter Location" className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="maxApplicants" className="block text-gray-700 font-bold mb-2">Max Applicants</label>
            <input type="number" id="maxApplicants" value={maxApplicants} onChange={(e) => setMaxApplicants(e.target.value)} placeholder="Enter max applicants" className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="deadline" className="block text-gray-700 font-bold mb-2">Deadline</label>
            <input type="datetime-local" id="deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)} className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="skillsets" className="block text-gray-700 font-bold mb-2">Skillsets</label>
            <input type="text" id="skillsets" value={skillsets} onChange={(e) => setSkillsets(e.target.value)} placeholder="Enter skillsets (comma-separated)" className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="jobType" className="block text-gray-700 font-bold mb-2">Job Type</label>
            <select id="jobType" value={jobType} onChange={(e) => setJobType(e.target.value)} className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" required>
              <option value="">Select job type</option>
              <option value="Daily">Daily</option>
              <option value="Hourly">Hourly</option>
              <option value="Fixed">Fixed</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="salary" className="block text-gray-700 font-bold mb-2">Salary</label>
            <input type="number" id="salary" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="Enter salary" className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Job</button>
          </div>
        </form>
      </div>
    </div>
  );
};



export default Page
