import React from 'react'
import { useAuth } from '../context/AuthProvider'

function MyProfile() {

  const {profile} = useAuth();
  // console.log(profile);

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-[30%]">
          <div className="flex justify-center relative">
            <img
              src={profile?.user?.photo?.url}
              alt="avatar"
              className="w-[40%] h-48 object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
              <img
                src={profile?.user?.photo?.url}
                alt="avatar"
                className="w-24 h-24 rounded-full mx-auto border-2 border-gray-700"
              />
            </div>
          </div>
          <div className="px-6 py-8 mt-4">
            <h2 className="text-center text-xl font-semibold text-gray-800">
              {profile?.user?.name}
            </h2>
            <p className="text-center text-sm text-gray-600 mt-1">
              {profile?.user?.email}
            </p>
            <p className="text-center text-sm text-gray-600 mt-1">
              {profile?.user?.phone}
            </p>
            <p className="text-center text-sm text-gray-600 mt-1">
              {profile?.user?.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile