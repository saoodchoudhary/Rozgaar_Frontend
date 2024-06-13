"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import JobCard from './JobCard';
import Link from 'next/link';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/getOpenJob`);
                console.log(response.data);
                setJobs(response.data);
                setLoading(false)
            } catch (error) {
                console.error('Failed to fetch jobs:', error);
            }
        };
        fetchJobs();
    }, [loading]);
    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {jobs.map((job) => (
                        <div key={job._id}>
                            <Link href={`/talent/jobs/${job._id}`} passHref>
                                <JobCard job={job} />
                            </Link>
                        </div>
                    ))}
                </>
            )}

        </div>
    )
}

export default JobList
