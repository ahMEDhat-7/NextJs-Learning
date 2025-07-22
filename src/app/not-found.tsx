import Link from 'next/link';
import React from 'react'

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center">
        <h1 className='text-7xl text-gray-800 font-bold'>404 </h1>
        <p className='text-3xl text-gray-500 mt-2 mb-5'>Page Not Found</p>
        <Link href="/" className="text-xl text-blue-700 underline">
          Go to Homepage    
        </Link>
    </section>
  )
}

export default NotFound