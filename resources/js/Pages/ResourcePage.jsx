
import ResourceList from '@/Components/ResourcePage/ResourceList'
import Banner from '@/Layouts/Banner'
import Mainlayout from '@/Layouts/Mainlayout'
import React from 'react'

const ResourcePage = ({resources,user}) => {
  return (
    <Mainlayout user={user}>
        <Banner>
            <h1 className='flex flex-col items-center text-5xl text-button font-sourGummy justify-center'>Resources</h1>
        </Banner>
        
        <ResourceList resources={resources}/>
    </Mainlayout>
  )
}

export default ResourcePage
