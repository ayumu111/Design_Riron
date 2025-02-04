import React, { useState } from "react";

const PostInput = ({ addPost }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addPost(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="何か気になってることを投稿しましょう!"
        rows="3"
        style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <button type="submit" style={{ padding: "10px", backgroundColor: "#007bff", color: "white", borderRadius: "5px", cursor: "pointer" }}>
        Post
      </button>
    </form>
  );
};

export default PostInput;
