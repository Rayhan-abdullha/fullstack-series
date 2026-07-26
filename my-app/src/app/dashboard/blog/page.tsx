import LikeButton from "@/app/ui/LikeButton";
import React from "react";

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div>
      {posts.slice(0, 10).map((post: any) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <LikeButton />
        </div>
      ))}
    </div>
  );
};

export default page;
