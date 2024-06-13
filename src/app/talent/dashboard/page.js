import React from 'react';
import Link from 'next/link';
import JobList from '@/Component/JobList';

const page = () => {

  
  return (
    <div className="min-h-screen bg-gray-100">
      
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold mb-4">Welcome to the Job Portal Dashboard!</h2>
          
        <JobList/>
      </div>
    </div>
  );
};


export default page
