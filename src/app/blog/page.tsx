import BlogSection from '@/components/BlogSection'
import React from 'react'

function page() {
  return (
    <div>
        <h1 className='text-4xl tracking-wider font-bold text-center py-7 bg-black text-pink-500'>
          <p className='animate-bounce'>
            Latest Blog
          </p>
        </h1>
        <BlogSection/>
    </div>
  )
}

export default page
