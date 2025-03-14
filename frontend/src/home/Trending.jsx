import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useAuth } from '../context/AuthProvider';

function Trending() {

  const {blogs} = useAuth();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className=" container mx-auto px-5">
      <h1 className=" text-lg font-semibold mb-2">Trending</h1>
      <Carousel responsive={responsive}>
        {blogs && blogs.length > 0 ? (
          blogs.slice(0, 6).map((element) => {
            return (
              <div
                key={element?._id}
                className="p-2 bg-white border border-gray-400 rounded-lg shadow-md mx-2"
              >
                <Link to={`/blogs/${element?._id}`}>
                  <div className="relative">
                    <img
                      src={element?.blogImage?.url}
                      alt="blog"
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                      {element?.category}
                    </div>
                  </div>
                  <div className="p-2 bg-gray-50 rounded-b-lg h-24 flex flex-col justify-between">
                    <h1
                      className="text-md font-bold overflow-hidden text-ellipsis"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {element?.title}
                    </h1>
                    <div className="flex items-center">
                      <img
                        src={element?.adminPhoto}
                        alt="author_avatar"
                        className="w-10 h-10 rounded-full"
                      />
                      <p className="ml-3 text-gray-400 text-sm">
                        {element?.adminName}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <div className=" flex h-screen items-center justify-center">
            Loading....
          </div>
        )}
      </Carousel>
    </div>
  );
}

export default Trending