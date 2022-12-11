import React from 'react'

const Categories = () => {
  return (
    <div className='gradient mx-[2rem] pl-4 mt-8 flex items-center justify-between pr-2 py-[0.1rem]'>
      <ul className='flex items-center py-1.5 text-white text-[14px] gap-9'>
        <li>
          <p>Your Store</p>
        </li>
        <li>
          <p>New & Noteworthy</p>
        </li>
        <li>
          <p>Categories</p>
        </li>
        <li>
          <p>Points Shop</p>
        </li>
        <li>
          <p>News</p>
        </li>
        <li>
          <p>Labs</p>
        </li>
      </ul>

      <input type="search" placeholder='search' className='placeholder:text-black pl-4 rounded-[2px] bg-blue-400 placeholder:italic' />
    </div>
  )
}

export default Categories