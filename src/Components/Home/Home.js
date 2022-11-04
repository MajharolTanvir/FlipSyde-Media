import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../Loading/Loading";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  const url = "https://dummyapi.io/data/v1/post";

  const { data: posts, isLoading } = useQuery(["posts"], () =>
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "app-id": "6362692aff84a0ebb2c70598",
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
      {posts?.data?.map((post) => (
        <div
          className="border-2 p-3 rounded-lg text-start h-full"
          key={post.id}
        >
          <img className="w-full h-80 rounded-lg" src={post?.image} alt="" />
          <p className="mt-3">Publish date: {post?.publishDate}</p>
          <h4 className="text-xl">
            <span className="font-bold">Title: </span>
            {post?.text}
          </h4>
          <div className="flex justify-between items-center gap-3 mt-5">
            <button className="bg-blue-600 text-white py-2 w-full rounded-md">
              <Link to={`/singlePost/${post?.id}`}>View full post</Link>
            </button>
            <p className="flex items-center gap-1 text-2xl">
              <AiFillLike />
              {post?.likes}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
