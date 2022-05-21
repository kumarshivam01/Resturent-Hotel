import React from 'react'
import  './Nav.css'

function Page({currentPage, lastPage, onPageChange}) {
    const arr = new Array(lastPage).fill(0)
  return (
    <div>
    
        {
            arr.map((item,page)=><button className='page' onClick={()=>onPageChange(page+1)} disabled={(page+1)==currentPage}>{(page+1)}</button>)
        }
    </div>
  )
}

export default Page