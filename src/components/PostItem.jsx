import React from "react";

const PostItem = ({ post, deletePost, likePost }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "5px"
    }}>
      <p>{post.content}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={() => likePost(post.id)} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}>
          👍 {post.likes}
        </button>
        <button onClick={() => deletePost(post.id)} style={{ backgroundColor: "red", color: "white", borderRadius: "5px", cursor: "pointer" }}>
            削除
        </button>
      </div>
    </div>
  );
};

export default PostItem;
