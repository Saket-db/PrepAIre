// import { UserButton } from '@clerk/nextjs'

'use client'
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'

const Dashboard = () => {
  return (
    <div className='p-10'>

    <h2 className='font-bold text-2xl'>Dashboard page</h2>
    <h2 className='text-gray-600'>Start Your AI Mockup Interview</h2>
    <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
      <AddNewInterview/>
    </div>
      {/* <UserButton/> */}
    </div>
  )
}

export default Dashboard
