import React from 'react'
import { useRouter } from 'next/router'

import { JobDetail, Employers, JobWidget, Loader } from '../../components'
import { getCategories, getSimilarJobsByCategory } from '../../services'

const JobDetailsByCategory = ({ job, category }) => {
    const router = useRouter()

    if (router.isFallback) {
        return <Loader />
    }

    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    <JobDetail job={job} />
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                        <JobWidget slug={job.slug} category={category} employers={job.employers.map((employer) => employer.slug)} />
                        <Employers />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default JobDetailsByCategory

export async function getStaticProps({ params }) {
    // const jobs = await getSimilarJobsByCategory(params.slug)
    // console.log(jobs)
    const jobs = [
        {
            cursor: 'ckz7gcs203vuw0b81vpobremw',
            node: {
                slug: '7',
                title: 'Alaska Airlines',
                content: '> I am **Director of Engineering Projects** crew members, etc.',
                location: 'Seatac (USA)',
                fromDate: '2018-08-01',
                toDate: '',
                featuredImage: { url: '' },
                employers: [{ slug: '1' }],
                categories: [{ slug: '1' }]
            }
        }
    ]

    return {
        props: {
            job: jobs[0].node, category: params.slug
        },
    }
}

export async function getStaticPaths() {
    // const categories = await getCategories()
    // console.log(categories)

    const categories = [
        { name: 'Engineering', slug: '1', themeColor: 'amber' },
        { name: 'Consulting', slug: '2', themeColor: 'blue' },
        { name: 'Leadership', slug: '3', themeColor: 'green' }
    ]

    // Get the paths we want to pre-render based on categories
    const paths = categories.map(
        ({ slug }) => ({ params: { slug } })
    )

    return { paths, fallback: false }
}