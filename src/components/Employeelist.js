import React from 'react'
import {useNavigate} from 'react-router-dom'
const Employeelist = () => {
    const Navigate= useNavigate();
  return (
    <div>
      <div>
      <button 
      onClick={()=>Navigate("\AddEmployee")}
      className="bg-slate-600 hover:bg-blue-700 text-white mx-40 my-50 px-10 py-1 rounded"> ADD EMPLOYEE</button>
    </div>
    <div>
      <table className="shadow" mx-14 my-5>
        <thead className="bg-slate-600 text-white">
          <th className="px-6 py-3 uppercase tracking-wide"> Name </th>
          <th className="px-6 py-3 uppercase tracking-wide"> Phone </th>
          <th className="px-6 py-3 uppercase tracking-wide"> E-mail </th>
          <th className="px-6 py-3 uppercase tracking-wide"> Action </th>
        </thead>
        <tbody>
          <tr className="hover:bg-white text-black">
          <td className="text-left px-6 py-4 whitespace-nowrap"> Sanket Thorat</td>
          <td className="text-left px-6 py-4 whitespace-nowrap"> 9011558457</td>
          <td className="text-left px-6 py-4 whitespace-nowrap"> Sanketthorat352@gmail.com</td>
          <a> Edit</a>
          <a> Delete</a>
          </tr>
          <tr className="hover:bg-white text-black">
          <td className="text-left px-6 py-4 whitespace-nowrap"> Sanket Thorat</td>
          <td className="text-left px-6 py-4 whitespace-nowrap"> 9011558457</td>
          <td className="text-left px-6 py-4 whitespace-nowrap"> Sanketthorat352@gmail.com</td>
          <a> Edit</a>
          <a> Delete</a>
          </tr>
          <tr className="hover:bg-white text-black">
          <td className="text-left px-6 py-4 whitespace-nowrap"> Sanket Thorat</td>
          <td className="text-left px-6 py-4 whitespace-nowrap"> 9011558457</td>
          <td className="text-left px-6 py-4 whitespace-nowrap"> Sanketthorat352@gmail.com</td>
          <a> Edit</a>
          <a> Delete</a>
          </tr>
          <tr className="hover:bg-white text-black">
          <td className="text-left px-6 py-4 whitespace-nowrap"> sumedh borale</td>
          <td className="text-left px-6 py-4 whitespace-nowrap"> 5245359568</td>
          <td className="text-left px-6 py-4 whitespace-nowrap"> sumedhborale2@gmail.com</td>
          <a> Edit</a>
          <a> Delete</a>
          </tr>
          <tr className="hover:bg-white text-black">
          <td className="text-left px-6 py-4 whitespace-nowrap"> Rushi Aher</td>
          <td className="text-left px-6 py-4 whitespace-nowrap"> 7584576585</td>
          <td className="text-left px-6 py-4 whitespace-nowrap"> rushiahert352@gmail.com</td>
          <a> Edit</a>
          <a> Delete</a>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Employeelist
