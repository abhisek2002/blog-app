import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BACKEND_URL } from '../../utils';

function Creator() {

  const [admin, setAdmin] = useState([]);
  // console.log(admin);
  useEffect(() => {
    const fetchAdmins = async () => {
      const { data } = await axios.get(
        `${BACKEND_URL}/api/users/admins`,
        {
          withCredentials: true,
        }
      );
      // console.log(data.admins);
      setAdmin(data?.admins);
    };
    fetchAdmins();
  }, []);

  return (
    <div className=" container mx-auto px-5 py-1">
      <h1 className="text-lg font-semibold">Popular Creators</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 my-3 place-items-center">
        {admin && admin.length > 0 ? (
          admin.slice(0, 4).map((element) => {
            return (
              <div key={element?._id}>
                <div className="">
                  <img
                    src={element?.photo?.url}
                    alt="blog"
                    className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-cover border border-black rounded-full items-center "
                  />
                  <div className="text-center">
                    <p>{element.name}</p>
                    <p className="text-gray-600 text-xs">{element?.role}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Creator