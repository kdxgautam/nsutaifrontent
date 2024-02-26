import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const host = "http://localhost:4000/"
const AdminOperations = () => {
    const params = useParams()
    const [items, setitems] = useState([])
    const fetchthings = async (data) => {
        const res = await fetch(host + data + "/all")
        const resdata = await res.json()
        setitems(resdata)
    }
    useEffect(() => {
        fetchthings(params.operation)
    }, [params])
    return (
        <div className='h-[100vh] w-full flex flex-col px-5'>
            <h1 className='w-full text-center text-2xl my-3'>{params.operation}</h1>
            
            <h1 className='w-full  text-2xl my-3 text-white '>Create {params.operation}</h1>
            <button className='w-[6rem] border p-2 rounded-xl ' >Add </button>
            <h1 className='w-full  text-2xl my-3'>present: {params.operation}</h1>
            <div
                class="relative flex flex-col  text-white  shadow-md rounded-xl bg-clip-border">


                <table class="w-full text-left table-auto min-w-max">

                    <thead>
                        <tr>
                            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                    {params.operation}
                                </p>
                            </th>
                            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                    title
                                </p>
                            </th>
                            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                    Created on
                                </p>
                            </th>
                            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {items.length === 0 && <div>no {params.operation} found</div>}
                        {items.length !== 0  && items.map((e) => (
                            <tr className='w-full'>
                                <td class="p-4 border-b border-blue-gray-50">
                                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                        {e.title}
                                    </p>
                                </td>
                                <td class="p-4 border-b border-blue-gray-50">
                                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                        {e.description.slice(0,20)}...
                                    </p>
                                </td>
                                <td class="p-4 border-b border-blue-gray-50">
                                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                        {e.createdAt}
                                    </p>
                                </td>
                                <td class="p-4 border-b border-blue-gray-50">
                                    <button className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default AdminOperations