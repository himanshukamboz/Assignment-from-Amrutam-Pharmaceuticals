import React from 'react'
import { removeIcon } from './assets/svgs/icons'

const Tags = ({tags,settags}) => {
    const removeTagFromSelected = (id)=>{
        const updatedSelectedTagList = tags.filter((item)=>item.id!==id)
        settags(updatedSelectedTagList)
    }
  return (
    <>
    {tags.map(tag=>(<div className='flex items-center bg-[#EAF2EA] py-2 px-3 rounded-2xl ml-4' key={tag.id}>
        {<p className='font-inter text-sm'>{tag.value}</p>}
        <div className='ml-2 cursor-pointer' onClick={()=>removeTagFromSelected(tag.id)}>{removeIcon}</div>
    </div>))}
    </>
  )
}

export default Tags