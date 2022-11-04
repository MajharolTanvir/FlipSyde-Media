import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";

const SinglePost = () => {
  const { id } = useParams();
  const url = `https://dummyapi.io/data/v1/post/${id}`;

  const { data: post, isLoading } = useQuery(["posts"], () =>
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

  console.log(post);

  return (
    <div className="h-screen md:flex items-center justify-center">
      <div className="md:flex items-center justify-center gap-5 border-2 border-gray-300 shadow-lg p-3">
        <div>
          <img className="w-96" src={post?.image} alt="" />
        </div>
        <div>
          <div className="text-start lg:w-96 mt-8">
            <p>
              <span className="font-bold">Publish: </span>
              {post?.publishDate}
            </p>
            <h6 className="text-xl">
              <span className="font-bold mt-5">Title: </span>
              {post?.text}
            </h6>

            <div className="flex items-center gap-3 mt-5">
              <img
                className="rounded-full w-14 border-2 border-gray-300"
                src={post?.owner?.picture}
                alt=""
              />
              <div>
                <p>Author by</p>
                <p>
                  {post?.owner?.title} {post?.owner?.firstName}{" "}
                  {post?.owner?.lastName}
                </p>
              </div>
            </div>

            <p className="flex items-center gap-1 text-2xl mt-8">
              <AiFillLike />
              {post?.likes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
