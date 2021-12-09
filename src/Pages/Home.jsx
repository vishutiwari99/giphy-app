import React from "react";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import { useSelector } from "react-redux";

const Home = () => {
  const post = useSelector((state) => state.post);
  return (
    <div className="h-screen mt-4 w-full flex flex-col px-3 lg:px-10">
      <div className="w-4/6 mx-auto">
        <CreatePost />
        {post &&
          post.posts.map((post, key) => (
            <Post id={post.id} key={key} url={post.url} desc={post.desc} />
          ))}
      </div>
    </div>
  );
};

export default Home;
