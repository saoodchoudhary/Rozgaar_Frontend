import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold mb-4">Welcome to the Job Portal Dashboard!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Latest Jobs</h3>
            <ul>
              {/* Render latest jobs here */}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Saved Jobs</h3>
            <ul>
              {/* Render saved jobs here */}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Recommended Jobs</h3>
            <ul>
              {/* Render recommended jobs here */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


export default page
