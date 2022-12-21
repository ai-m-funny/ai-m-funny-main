

import React from "react"
export default function LikeButton(props){
    return (
        <>

        

            <div className="md:flex flex-row justify-center">

             <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                 <div className="flex justify-between mb-4">
                    <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">{props.username}</a>
                    <a href="#!" className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">{props.vote}</a>
                 </div>
                <img className="text-gray-700 mb-6" src={props.url} alt="image" width={250} height={250} />
                 <button type="button" className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">Vote</button>
                 <p>{props.votes}</p>
             </div>
        </div>
    </>
    )
    }