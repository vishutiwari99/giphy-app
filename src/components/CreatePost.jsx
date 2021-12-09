import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// actions
import {
  setDesc,
  setGif,
  setId,
  setUrl,
  uploadPost,
} from "../store/post/postSlice";

const CreatePost = () => {
  const { id, url, gif, desc } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [post, setPost] = useState({});

  useEffect(() => {
    setPost({ id, url, desc });
  }, [id, url, desc]);
  return (
    <div className="editor mx-auto  flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg ">
      <textarea
        onChange={(e) => dispatch(setDesc(e.target.value))}
        className="description rounded-lg bg-gray-100 sec p-3 border border-gray-300 outline-none"
        spellCheck="false"
        placeholder="Describe everything about this post here"
        name="desc"
        value={desc}
      ></textarea>
      <div className="icons flex text-gray-500 m-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => dispatch(setGif(!gif))}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
            />
          </svg>
          {gif && <Gif />}
          {url && <img className="h-12 w-12" src={url} alt="gif" />}
        </div>
        <div className="count ml-auto text-gray-400 text-xs font-semibold">
          0/300
        </div>
      </div>
      <div className="buttons flex">
        <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">
          Cancel
        </div>
        <div
          onClick={() => {
            dispatch(uploadPost(post));
            dispatch(setId(""));
            dispatch(setDesc(""));
            dispatch(setUrl(""));
          }}
          className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
        >
          Post
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
