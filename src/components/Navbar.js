import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="bg-slate-100 h-16 px-16 iem-center flex">
      <h1 className="text-3xl font-bold underline">Employement-Services</h1>
      <div className = "space-x-4 ml-auto">
      <a className="hover:text-blue-400"  href="/">Home</a>
      <a className="hover:text-blue-400"  href="/">Profile</a>
      <a className="hover:text-blue-400" href="/">Logout</a>
      </div>
    </div>
    </div>
  )
}

export default Navbar
