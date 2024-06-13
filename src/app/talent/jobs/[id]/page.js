"use client"
import JobCard from '@/Component/JobCard'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
 const {id} =  useParams()
  console.log(id)

  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleApplyJob = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/applyjob/${id}`, {
        name:"saood",
      }
      );
      console.log(response.data);
    } catch (error) {
      console.error('Failed to apply job:', error);
    }
  };

  useEffect(() => {
      const fetchJobs = async () => {
          try {
              const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/getjob/${id}`);
              console.log(response.data);
              setJob(response.data);
              setLoading(false)
          } catch (error) {
              console.error('Failed to fetch jobs:', error);
          }
      };
      fetchJobs();
  }, [loading]);

  return (
    <div>
      jobs id
      <JobCard job={job} />

      <div>
        <button onClick={()=>handleApplyJob()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Apply
        </button>
      </div>
    </div>
  )
}

export default page
