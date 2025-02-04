import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, deletePost, likePost }) => {
  return (
    <div>
      {posts.length === 0 ? <p>まだ、投稿はありません</p> : posts.map(post => (
        <PostItem key={post.id} post={post} deletePost={deletePost} likePost={likePost} />
      ))}
    </div>
  );
};

export default PostList;
