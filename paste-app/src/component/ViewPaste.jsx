import React from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ViewPaste = () => {

  const {id} = useParams();
  const allPastes = useSelector((state)=> state.paste.pastes);

  const singlePaste = allPastes.filter((p)=> p._id === id)[0];
  return (
    <div>
    <div className='flex flex-row gap-7 justify-between'>
      <input type="text"
        placeholder='Enter Your Title'
        value={singlePaste.title}
        disabled
        onChange={(e) => { setTitle(e.target.value) }}
        className='rounded-xl p-2  outline-none mt-5 w-[80%]' />
        
        <button className='mt-5' onClick={()=>{ navigator.clipboard.writeText(singlePaste.content)
                                             toast.success('Copied Successfully')}}>
          Copy
        </button>
    </div>
    <div>
      <textarea
         className='rounded-xl mt-5 p-3 min-w-[500px]'
         value={singlePaste.content}
         disabled
         placeholder='Enter Content Here'
         onChange={(e)=>{setValue(e.target.value)}}
         rows={20}
      />
    </div>

  </div>
  )
}

export default ViewPaste