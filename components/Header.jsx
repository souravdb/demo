import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Header = () => {
    const [categories, setCategories] = useState([])
    const [isMenuVisible, setMenuVisibility] = useState(false);

    useEffect(() => {
        // getCategories().then((data) => {
        //     setCategories(data)
        // })

        const fetchData = async () => {
            const data = (await getCategories()) || []
            setCategories(data)
        }
        
        fetchData()
            .catch(console.error)

        // const data = [
        //     {name: 'Engineering', slug: '1', themeColor: 'amber'},
        //     {name: 'Consulting', slug: '2', themeColor: 'blue'},
        //     {name: 'Leadership', slug: '3', themeColor: 'green'}
        // ]
        // setCategories(data)
    }, [])

    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-blue-400 py-8">

                {/* invisible beyond small */}
                <div className="visible sm:invisible float-right justify-evenly">
                    <button
                        onClick={() => setMenuVisibility(!isMenuVisible)}
                        data-cy="nav-menu-btn"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            <title>Menu</title>
                        </svg>
                    </button>
                </div>
                <div className={`${isMenuVisible ? 'max-h-full' : 'h-0'} overflow-hidden`}>
                    {categories.map((category, index) => (
                        <Link key={index} href={`/category/${category.slug}`} passHref>
                            <span data-cy="nav-item" id={`menu-${index}`} className="block sm:invisible mt-2 align-middle text-sm text-blue-900 ml-4 font-semibold cursor-pointer">
                                {category.name}
                            </span>
                        </Link>
                    ))}

                    <Link href="/" passHref>
                        <span data-cy="nav-item" id="menu-about" className="block sm:invisible mt-2 align-middle text-sm text-blue-900 ml-4 font-semibold cursor-pointer">
                            About
                        </span>
                    </Link>
                </div>


                {/* visible beyond small */}
                <div className="invisible sm:visible float-right justify-evenly">
                    {categories.map((category, index) => (
                        <Link key={index} href={`/category/${category.slug}`} passHref>
                            <span data-cy="nav-item" id={`menu-${index}`} className="mt-2 align-middle text-md text-blue-900 ml-4 px-4 font-semibold cursor-pointer">
                                {category.name}
                            </span>
                        </Link>
                    ))}

                    <Link href="/" passHref>
                        <span data-cy="nav-item" id="menu-about" className="mt-2 align-middle text-md text-blue-900 ml-4 px-4 font-semibold cursor-pointer">
                            About
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header