import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { BACKEND_URL } from '../../utils';

function Update() {

  const navigateTo = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [about, setAbout] = useState("");

  const [blogImage, setBlogImage] = useState("");
  const [blogImagePreview, setBlogImagePreview] = useState("");

  const changePhotoHandler = (e) => {
    // console.log(e);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setBlogImagePreview(reader.result);
      setBlogImage(file);
    };
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(
          `${BACKEND_URL}/api/blogs/single-blog/${id}`,

          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        // console.log(data);
        setTitle(data?.title);
        setCategory(data?.category);
        setAbout(data?.about);
        setBlogImage(data?.blogImage?.url);
      } catch (error) {
        console.log(error);
        toast.error("Please fill the required fields");
      }
    };
    fetchBlog();
  }, [id]);

   const handleUpdate = async (e) => {
     e.preventDefault();
     const formData = new FormData();
     formData.append("title", title);
     formData.append("category", category);
     formData.append("about", about);

     formData.append("blogImage", blogImage);
     try {
       const { data } = await axios.put(
         `${BACKEND_URL}/api/blogs/update/${id}`,
         formData,
         {
           withCredentials: true,
           headers: {
             "Content-Type": "multipart/form-data",
           },
         }
       );
      //  console.log(data);
       toast.success(data?.message || "Blog updated successfully");
       navigateTo("/dashboard");
     } catch (error) {
       console.log(error);
       toast.error(
         error?.data?.message || "Please fill the required fields"
       );
     }
   };

  return (
    <div>
      <div className="containe mx-auto p-10">
        <section className="max-w-xl bg-whites shadow-xl p-5 mx-auto">
          <h3 className="text-lg font-bold mb-4">UPDATE BLOG</h3>
          <form>
            <div className="mb-2">
              <label className="block mb-2 text-sm font-semibold">Category</label>
              <select 
                className="w-full p-2 text-sm border rounded-md"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Devotion">Devotion</option>
                <option value="Sports">Sports</option>
                <option value="Coding">Coding</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Business">Business</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="BLOG MAIN TITLE"
              className="w-full p-2 mb-2 text-sm border rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="mb-4">
              <label className="block mb-2 text-sm font-semibold">BLOG IMAGE</label>
              <img
                src={
                  blogImagePreview
                    ? blogImagePreview
                    : blogImage
                    ? blogImage
                    : "/imgPL.webp"
                }
                alt="Blog Main"
                className="w-48 h-48 object-cover mb-4 rounded-md"
              />
              <input
                type="file"
                className="w-full p-2 text-sm border rounded-md"
                onChange={changePhotoHandler}
              />
            </div>
            <textarea
              rows="6"
              className="w-full p-2 mb-4 border rounded-md"
              placeholder="Something about your blog atleast 200 characters!"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />

            <button
              className="w-full p-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={handleUpdate}
            >
              UPDATE
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Update
