import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
const Table = () => {
const [posts, setPosts] = useState([])
const navigate = useNavigate()
    useEffect(() => {
        fetch("https://motionless-rose-knickers.cyclic.app/users/", {
          headers: {
            "Authorization": localStorage.getItem("token"),
          },
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            setPosts(res);
          })
          .catch((err) => console.log(err));
      }, []);
      console.log("posts",posts)
      function handleLogout(){
        localStorage.removeItem("token")
        navigate("/")
      }
  return (
    

<div class="relative overflow-x-auto">
    <button onClick={handleLogout} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Logout</button>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Date of Birth
                </th>
                <th scope="col" class="px-6 py-3">
                    email
                </th>
                <th scope="col" class="px-6 py-3">
                    photo
                </th>
            </tr>
        </thead>
        <tbody>
            {posts.map((el)=>(

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={el.id}>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {el.name}
                </th>
                <td class="px-6 py-4">
                   {el.date}
                </td>
                <td class="px-6 py-4">
                    {el.email}
                </td>
                <td class="px-6 py-4">
                    <img src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" width={50} alt="" />
                </td>
            </tr>
            ))}
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                2024-01-28
                </td>
                <td class="px-6 py-4">
                    Laptop PC@gmail.com
                </td>
                <td class="px-6 py-4">
                <img src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" width={50} alt="" />

                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                2024-01-28
                </td>
                <td class="px-6 py-4">
                    Accessories@gmail.com
                </td>
                <td class="px-6 py-4">
                <img src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" width={50} alt="" />

                </td>
            </tr>
        </tbody>
    </table>
</div>

  )
}

export default Table