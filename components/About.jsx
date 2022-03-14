import React, { useState, useEffect } from 'react'
import Markdown from 'react-markdown'
import Image from 'next/image'

// (1) The "getAbout" (async) function will fetch "about" data from Graph CMS...
import { getAbout } from '../services'

// export default function About({ about }) {    
const About = () => {
    const [name, setName] = useState([])
    const [about, setAbout] = useState([])

// will fetch data (from API) on page request at client side (CSR)
// in this case first the page (html) is rendered, then the function (state) is run
// **********************************************************************
    useEffect(() => {
        setName('Sourav, Deb Barma')
        const fetchData = async () => {
            const data = (await getAbout()) || []
            setAbout(data)
        }
        
        fetchData()
            .catch(console.error)
    }, [])

    return (
        <>
            <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
                <div className="relative overflow-hidden p-4">
                    <Image
                        data-cy="about-pic"
                        title={name}
                        width="200px"
                        height="200px"
                        src="/images/self.jpg"
                        className="align-middle rounded-full"
                    />
                </div>

                <div className="px-4 lg:px-0">
                    <h1 data-cy="about-me-label" className="transition duration-700 text-center mb-8 text-blue-900 text-3xl font-semibold">
                        About Me
                    </h1>
                    <div data-cy="about-intro" className='mb-6'>
                        <Markdown className='prose text-xl text-justify'>{about.introduction}</Markdown>
                    </div>

                    <h1 data-cy="about-contact-label" className="transition duration-700 mb-8 hover:text-blue-600 text-3xl font-semibold">
                        Contact
                    </h1>
                    <div data-cy="about-contact" className='mb-6'>
                        <Markdown className='prose text-sm'>{about.contactInfo}</Markdown>
                    </div>

                    <h1 data-cy="about-education-label" className="transition duration-700 mb-8 hover:text-blue-600 text-3xl font-semibold">
                        Education
                    </h1>
                    <div data-cy="about-education" className='mb-6'>
                        <Markdown className='prose text-sm'>{about.education}</Markdown>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About