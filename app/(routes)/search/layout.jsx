import React from 'react'
import CategorySideBar from './_components/CategorySideBar'

function layout({children}) {
  return (
    <div className='grid grid-cols-4 ml-5 mr-5'>
    <div><CategorySideBar/></div>
    <div className='col-span-3'>{children}</div>
    </div>
  )
}

export default layout