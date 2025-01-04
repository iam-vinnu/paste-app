import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Paste = () => {
  const paste = useSelector((state)=> state.paste.pastes);
  const [searchText , setSearchText] = useState('');
  const dispatch = useDispatch();

  const filteredData = paste.filter((paste) => paste.title.toLowerCase().includes(searchText.toLowerCase()));
 
  
  return (
    <div>
         <div>
          <input type="search"
                 placeholder='search here'
                 value={searchText}
                 onChange={(e)=>{setSearchText(e.target.value)}}
                 className='p-2 rounded-2xl ' />
         </div>
    </div>
  )
}

export default Paste