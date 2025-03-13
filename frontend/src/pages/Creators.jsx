import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BACKEND_URL } from '../../utils';

function Creators() {

  const [creators, setCreators] = useState([]);
  console.log(creators);
  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data } = await axios.get(
          `${BACKEND_URL}/api/users/admins`,
          {
            withCredentials: true,
          }
        );
        setCreators(data?.admins);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCreators();
  }, []);

 return (
   <div className="flex flex-wrap justify-center gap-5 items-center my-10 bg-gray-100">
     {creators.map((creator) => (
       <div
         key={creator?._id}
         className="bg-white shadow-lg rounded-lg overflow-hidden w-[20%]"
       >
         <div className="flex justify-center relative">
           <img
             src={creator?.photo?.url}
             alt="avatar"
             className="w-[40%] h-32 object-cover"
           />
           <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
             <img
               src={creator?.photo?.url}
               alt="avatar"
               className="w-16 h-16 rounded-full mx-auto border-2 border-gray-700"
             />
           </div>
         </div>
         <div className="px-4 py-5 mt-4">
           <h2 className="text-center text-lg font-semibold text-gray-800">
             {creator?.name}
           </h2>
           <p className="text-center text-gray-600 mt-1 text-sm">{creator?.email}</p>
           <p className="text-center text-gray-600 mt-1 text-sm">{creator?.phone}</p>
           <p className="text-center text-gray-600 mt-1 text-sm">{creator?.role}</p>
         </div>
       </div>
     ))}
   </div>
 );
}

export default Creators