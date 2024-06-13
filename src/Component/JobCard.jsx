// components/JobCard.js

import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden ">
      {job.img && (
        <img className="w-full h-32 object-cover" src={job.img} alt={job.jobTitle} />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{job.jobTitle}</h2>
        <p className="text-gray-700 mb-2">{job.description}</p>
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-auto md:flex-1 md:mr-4 mb-2 md:mb-0">
            <p className="text-gray-700 mb-1">Salary: {job.salary}</p>
            <p className="text-gray-700 mb-1">Job Type: {job.jobType}</p>
          </div>
          <div className="w-full md:w-auto md:flex-1 md:ml-4 mb-2 md:mb-0">
            <p className="text-gray-700 mb-1">Company Ratings: {job.companyRatings}</p>
            <p className="text-gray-700 mb-1">Location: {job.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
