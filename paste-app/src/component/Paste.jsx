import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Paste = () => {
  const paste = useSelector((state) => state.paste.pastes);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filteredData = paste.filter((paste) => paste.title.toLowerCase().includes(searchText.toLowerCase()));
  const handleDelete = (pasteId) => {

    dispatch(removeFromPastes(pasteId));

  }



  return (
    <div>
      <div>
        <input type="search"
          placeholder='search here'
          value={searchText}
          onChange={(e) => { setSearchText(e.target.value) }}
          className='p-3 rounded-2xl min-w-[600px] mt-5 ' />
      </div>
      <div className='flex flex-col gap-5 mt-5'>
        {
          filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div className='border rounded-xl p-3' key={paste?._id}>
                <div className=''>
                  {paste.title}
                </div>
                <div>
                  {paste.content}
                </div>
                <div className='flex gap-4 justify-evenly mt-2'>
                  <button onClick={()=>{navigate(`/?pasteid=${paste?._id}`)}}>
                    Edit
                  </button>
                  <button onClick={()=>{navigate(`/paste/${paste?._id}`)}}>
                    View
                  </button>
                  <button onClick={() => handleDelete(paste?._id)}>
                    Delete
                  </button>
                  <button onClick={() => {
                    navigator.clipboard.writeText(paste?.content);
                    toast.success('Copied Successfully');
                  }}>
                    Copy
                  </button>
                  <button>
                    Share
                  </button>
                </div>
                <div>
                  {paste.createdAt.split('T')[0]}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Paste