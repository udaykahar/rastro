import React from 'react'

const feedback = () => {
  return (
    <>
        {/* customer feedback section */}
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-2 gap-8'>
            <div className='flex flex-col justify-center'>
                <h3 className='text-3xl w-full font-bold mb-4 text-[#00df9a]'>What Our Customers Say</h3>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <button className='bg-[#00df9a] text-white text-2xl font-bold py-4 px-8 rounded-md mt-8 w-[260px]'>Read More</button>
            </div>
            <div className='flex flex-col justify-center'>
                <div className='flex gap-4'>
                    <img src='/images/feedback1.jpg' alt='feedback1' className='w-20 h-20 rounded-full' />
                    <div className='flex flex-col justify-center'>
                        <h3 className='text-2xl font-bold'>John Doe</h3>
                        <p className='text-gray-300'>CEO, ABC Company</p>
                    </div>
                </div>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
            </div>
        </div>
    </>
  )
}

export default feedback