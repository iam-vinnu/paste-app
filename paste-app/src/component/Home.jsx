import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { addToPastes, updatePaste } from '../redux/pasteSlice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteid");
  const dispatch = useDispatch();

  const createPaste =(e)=>{
        const paste = {
          title : title ,
          content : value ,
          _id : pasteId || Date.now().toString(36),
          createdAt : new Date().toISOString()
        }

        if(pasteId){
          // update
          dispatch(updatePaste(paste));
            
        }else{
          // create
          dispatch(addToPastes(paste));
        }

        setTitle('');
        setSearchParams({});
        setValue('');
  }
  return (
    <div>
      <div className='flex flex-row gap-7 justify-between'>
        <input type="text"
          placeholder='Enter Your Title'
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
          className='rounded-xl p-2  outline-none mt-5 w-2/3' />
        <button className='p-2 rounded-xl mt-5 '
                onClick={createPaste}>
          {
            pasteId ? "Update Paste" : "Create Paste"
          }
        </button>
      </div>
      <div>
        <textarea
           className='rounded-xl mt-5 p-3 min-w-[500px]'
           value={value}
           placeholder='Enter Content Here'
           onChange={(e)=>{setValue(e.target.value)}}
           rows={20}
        />
      </div>

    </div>
  )
}

export default Home