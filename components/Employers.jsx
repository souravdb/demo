import React, { useState, useEffect } from 'react'
import Link from 'next/link'

// (1) The "getEmployers" (async) function will fetch "employers" data from Graph CMS...
import { getEmployers } from '../services'

const Employers = () => {
    // (3) This "employers" state...
    const [employers, setEmployers] = useState([])

    // (2) The "setEmployers" function will set the "employers" state...
    useEffect(() => {
        // getEmployers().then((result) => {
        //     setEmployers(result)
        // })

        const data = [
            { name: 'Cognizant Technologies', location: 'Australia, India, USA', timePeriod: '2015 - 2022', slug: 'cognz', jobs: [{ slug: "1" }] }
        ]
        setEmployers(data)
    }, [])

    // (4) HTML page will be rendered based the "employers" state...
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-4">
            <h3 className="text-3xl mb-8 font-semibold border-b text-blue-900 pb-4">Work History</h3>
            {employers.map((employer, index) => (
                <div key={index}>
                    <Link key={index} href={`/job/${employer.jobs[0].slug}`} passHref>
                        <span className={`cursor-pointer block ${(index === employers.length) ? 'border-b-0' : 'border-b'} font-semibold hover:text-blue-600 pb-1 mt-4`}>{employer.name}</span>
                    </Link>
                    <p className='text-xs'>{employer.timePeriod}</p>
                    <p className='text-md'>{employer.location}</p>
                </div>
            ))}
        </div>
    )
}

export default Employers