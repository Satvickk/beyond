import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {

const navigate = useNavigate() ;

  return (
    <div className='border-2 border-white flex flex-col my-16 justify-center items-center rounded-md w-full'>
      <p className='p-3 text-4xl font-bold text-center'>Not Found ! Please return to the Homepage</p>
      <button className='px-4 py-2 mt-6 text-2xl rounded text-white font-semibold bg-slate-600' 
      onClick={() => navigate('/')}
      >
        Back to Home
      </button>
    </div>
  )
}

export default Error
