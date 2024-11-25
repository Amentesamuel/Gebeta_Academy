import BlogList from '@/Components/Blog/BlogList'
import Banner from '@/Layouts/Banner'
import Mainlayout from '@/Layouts/Mainlayout'
import React from 'react'

const Blog = ({blogs}) => {
  return (
   <Mainlayout>
    <Banner>
        <h1 className='flex flex-col items-center text-5xl text-button font-sourGummy justify-center'>Blog</h1>
    </Banner>
    <BlogList blogs={blogs}/>
   </Mainlayout>
  )
}

export default Blog
