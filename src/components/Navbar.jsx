import React from 'react'

const Navbar = () => {
  return (
    <div className="text-white flex justify-between p-4 z-[100] absolute w-full">
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      <div>
        <button className='px-2'> Sing In</button>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer'> Sing Up</button>
      </div>
    </div>
  );
}

export default Navbar