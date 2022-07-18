import React from "react";

function Post(id, post, postPage) {
  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-700 ">
      {!postPage && (
        <img
          src={post?.userImg}
          alt=""
          className="h-11 w-11 rounded-full mr-4"
        />
      )}
      <h1> whats minting today</h1>
    </div>
  );
}

export default Post;
