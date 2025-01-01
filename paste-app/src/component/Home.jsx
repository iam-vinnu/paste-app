import React, { useState } from 'react'

const Home = () => {
  const [title , setTitle] = useState('');
  return (
    <div>
      <input type="text"
             placeholder='Enter Your Title'
             value={title}
             onChange={(e)=>{setTitle(e.target.value)}}
             className='rounded-xl p-2 text-center outline-none mt-5' />
    </div>
  )
}

export default Home