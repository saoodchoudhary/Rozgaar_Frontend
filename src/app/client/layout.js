import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="text-white font-bold text-xl">Rozgaar 24</div>
            
            {/* Search Bar */}
            <div className="flex-grow mx-4">
                <input
                type="text"
                placeholder="Search jobs..."
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-600"
                />
            </div>
            
            {/* Navigation Links */}
            <ul className="flex items-center space-x-4">
                <li>
                <a href="/client/createjob" className="text-white hover:text-gray-300">Create Jobs</a>
                </li>
                <li>
                <a href="#" className="text-white hover:text-gray-300">Hire</a>
                </li>
                <li>
                <a href="#" className="text-white hover:text-gray-300">Signup</a>
                </li>
                {/* Add more navigation links here */}
            </ul>
            </div>
        </nav>
        {children}
    </div>
  )
}

export default layout
