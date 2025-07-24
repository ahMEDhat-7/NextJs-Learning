import { CircleCheckBig } from 'lucide-react'
import React from 'react'

const PricePlan = () => {
  return (
    <div className="flex flex-col items-center justify-center w-3/4 p-4 border rounded bg-gray-200 mb-7 md:w-2/4 lg:w-1/4">
        <h3 className='text-3xl font-bold text-pink-900'>Premium</h3>
        <strong className='text-3xl font-bold text-gray-900 my-5'>
            $29/month
        </strong>
        <span className='bg-red-200 text-red-900 rounded-full px-2 py-1 font-semibold'>10% OFF</span>
        <div className='mt-5'>
            <h5 className='text-2xl mb-1 font-semibold text-purple-700'>Top Features</h5>
            <div className='flex items-center text-green-700 mb-1 ps-2'>
                <CircleCheckBig /> <span className='ml-1'>100 Projects</span>
            </div>
            <div className='flex items-center text-green-700 mb-1 ps-2'>
                <CircleCheckBig /> <span className='ml-1'>5 GB Storage</span> 
            </div>
            <div className='flex items-center text-green-700 mb-1 ps-2'>
                <CircleCheckBig /> <span className='ml-1'>Weekly Support</span>
            </div>
            <div className='flex items-center text-green-700 mb-1 ps-2'>
                <CircleCheckBig /> <span className='ml-1'>Priority Access</span>
            </div>
            <div className='flex items-center text-green-700 mb-1 ps-2'>
                <CircleCheckBig /> <span className='ml-1'>Unlimited Updates</span>
            </div>
        </div>
        <button className='border font-semibold px-4 py-2 rounded-full mt-4 hover:cursor-pointer hover:bg-purple-800 hover:text-amber-50 transition-colors w-full'>
            Get Started
        </button>
    </div>
  )
}

export default PricePlan