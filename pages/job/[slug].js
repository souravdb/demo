import React from 'react'
import { useRouter } from 'next/router'

import { JobDetail, Employers, JobWidget, Loader } from '../../components'
import { getJobs, getJobDetails } from '../../services'

const JobDetails = ({ job }) => {
    const router = useRouter()
    if (router.isFallback) {
        return <Loader />
    }

    return (
        <>
            <div className="container mx-auto px-10 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="col-span-1 lg:col-span-8">
                        <JobDetail job={job} />
                    </div>
                    <div className="col-span-1 lg:col-span-4">
                        <div className="relative lg:sticky top-8">
                            <JobWidget slug={job.slug} category='' employers={job.employers.map((employer) => employer.slug)} />
                            <Employers />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default JobDetails

export async function getStaticProps({ params }) {
    // const data = await getJobDetails(params.slug)
    // console.log(data)

    const data = {
        location: 'Seatac (USA)',
        fromDate: '2018-08-01',
        toDate: '2018-08-01',
        slug: '1',
        title: 'Alaska Airlines',
        content: '> I am **Director of Engineering Projects**...',
        // featuredImage: { url: '' },
        employers: [{ slug: '1' }]
    }

    return {
        props: {
            job: data,
        },
    }
}

export async function getStaticPaths() {
    // const jobs = await getJobs()
    // console.log(jobs)

    const jobs = [
        {
            cursor: 'ckzotxla8nid40a78p5h9jbbx',
            node: {
                location: 'New York (USA)',
                fromDate: '2007-10-01',
                toDate: '2009-04-01',
                slug: '1',
                title: 'Credit Suisse',
                content: '> Worked as **Chief Test Automation Advisor**...',
                featuredImage: { url: '' },
                employers: { slug: '2' }
            }
        },
        {
            cursor: 'ckzotywconc2r0d64jqg3qmy6',
            node: {
                location: 'Seattle (USA)',
                fromDate: '2007-10-01',
                toDate: '2009-04-01',
                slug: '1',
                title: 'Credit Suisse',
                content: '> I joined Keane Incorporate in 2006 as **Senior Consultant**...',
                featuredImage: { url: '' },
                employers: { slug: '1' }
            }
        }
    ]

    return {
        paths: jobs.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: true,
    }
}