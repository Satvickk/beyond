import React, { useState, useEffect } from 'react'
import {
  getAllBlogs,
  addBlogs,
  updateBlogs,
  deleteBlogs,
  getBlogDetail,
} from "../../api/blog-api"

import {
  setBlog,
  addBlog,
  updateBlog,
  deleteBlog,
  deleteAllBlog
} from "../../Redux/Features/blogSlice"

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Blog() {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [page, setPage] = useState(1);
  const [USERID, setUSERID] = useState(null)
  const [showblog, setShowblog] = useState(true);
  const [blogId, setBlogId] = useState(null);
  const [operation, setOperation] = useState("Add");
  const [len, setLen] = useState(null)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Blog = useSelector((state) => state.Blogs)

  async function get() {
    const resp = await getAllBlogs();
    dispatch(setBlog(resp));
    setLen(Blog.allBlogs.length)
  }

  useEffect(() => {
    get()
  }, [])

  async function add() {
    try {
      if (!title || !body) {
        return alert('please fill all the details')
      }

      const payload = {
        userId: USERID,
        id: len,
        title: title,
        body: body
      }

      const resp = await addBlogs(payload)
      dispatch(addBlog(resp));

      setTitle("");
      setBody("");

    } catch (error) {
      alert("something went wrong cannot add Blog !")
    }
  }

  async function update() {
    try {
      const payload = {
        userId: USERID,
        id: len,
        title: title,
        body: body
      }
      e.preventDefault();
      const resp = await update(payload)
      dispatch(updateBlog(resp))
    } catch (error) {
      alert('json placeholder do not provide put/patch request')
    }
  }

  async function Delete(id) {
    try {
      await deleteBlogs(id);
      navigate('/blog')
    } catch (error) {
      alert('json placeholder do not provide delete request')
    }

  }


  return (
    <div className=' w-full py-8 px-44 h-[80vh] text-center font-mono'>
      <div className='flex gap-8 w-full h-full'>
        <div className='bg-slate-300 rounded-xl py-4 px-10 w-2/3 mb-8 overflow-y-scroll hide-scrollbar' >

          {
            showblog ?
              (
                Blog.allBlogs.length > 0 ? (
                  <div className='w-full flex flex-col gap-6 px-4 py-6'>
                    {[...Blog.allBlogs].reverse().map((item, index) => (
                      <div
                        className='w-full cursor-default h-20 text-xl flex justify-center items-center bg-blue-400 transition-all duration-300 hover:bg-blue-600 shadow-lg hover:text-slate-100 rounded-md'
                        key={index}
                        onClick={() => {
                          setShowblog(!showblog);
                          setBlogId(item.id - 1);
                        }}
                      >
                        {item.title}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No blogs available.</p>
                )

              ) : (
                <div className='h-full w-full flex flex-col justify-around my-3 items-start'>
                  <div className='flex justify-between items-center w-full h-1/6'>
                    <button className='border-slate-400 border-2 px-3 rounded-md hover:text-slate-100 transition-all duration-300 hover:bg-slate-500 shadow-md'
                      onClick={() => {
                        setShowblog(!showblog);
                        setBlogId(null);
                        setUSERID(null);
                        setBody("")
                        setTitle("");
                        setOperation("Add");
                      }}
                    ><FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <div className='flex gap-3'>
                      <FontAwesomeIcon icon={faTrash}
                        className='text-red-500 p-1 hover:text-white hover:bg-red-500 transition-all duration-300 rounded-md'
                        onClick={async () => {
                          await Delete(blogId)
                        }}
                      />
                      <FontAwesomeIcon icon={faPenToSquare}
                        className='text-green-500 p-1 hover:text-white hover:bg-green-500 transition-all duration-300 rounded-md'
                        onClick={async (e) => {
                          try {
                            const resp = await getBlogDetail(blogId + 1)
                            setLen(resp.id);
                            setUSERID(resp.userId);
                            setTitle(resp.title);
                            setBody(resp.body);
                            setOperation("Update");

                          } catch (error) {
                            alert("something went wrong cannot edit Blog !")
                          }
                        }}
                      />
                     
                    </div>
                  </div>
                  <div className='h-5/6 w-full py-6 bg-white m-1 rounded-lg'>
                    <h2 className='text-blue-800 mb-6 text-2xl'>{Blog.allBlogs[blogId].title}</h2>
                    <p className='pb-6'>{Blog.allBlogs[blogId].body}</p>
                  </div>
                  {/* <div className='w-full flex flex-col justify-center items-end gap-4'>
                    <button className=''>Edit</button>
                    <button>Delete</button>
                  </div> */}
                </div>

              )
          }


        </div>
        <div className='bg-slate-300 rounded-xl py-4 px-6 h-full w-1/3 mb-8 flex flex-col gap-4'>
          <p>Task Window</p>
          <input
            type='text'
            className=' w-full h-1/5 rounded-lg px-3 py-2 text-xl outline-none'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title'
          />
          <textarea
            className=' w-full h-4/5 rounded-lg px-3 py-2 text-md outline-none'
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder='Body'
          />
          {
            operation === "Add" ? (
              <button
                className='text-md font-mono font-semibold px-3 py-1 bg-green-600 text-slate-200 rounded-md shadow-lg transition-all duration-300 hover:bg-green-500'
                onClick={async (e) => {

                  len % 10 === 0 ? setUSERID(Math.floor(len / 10)) : setUSERID(len + 1);
                  setUSERID((prev) => prev % 10 === 0 ? Math.floor(len / 10) : Math.floor(len / 10) + 1)
                  setLen(len + 1)
                  e.preventDefault();

                  await add()
                }}>
                Add
              </button>
            ) : (
              <button
                className='text-md font-mono font-semibold px-3 py-1 bg-green-600 text-slate-200 rounded-md shadow-lg transition-all duration-300 hover:bg-green-500'
                onClick={async (e) => {
                  await update();
                }
                }>
                Update
              </button>
            )
          }

          <button
            type='reset'
            className='text-md font-mono font-semibold px-3 py-1 border-red-600 border-2 text-red-600 hover:bg-red-600 transition-all duration-300 hover:text-white rounded-md shadow-lg'
          // onClick={console.log('reset')}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Blog
