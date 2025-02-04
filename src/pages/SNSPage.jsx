import React, { useState } from "react";
import PostInput from "../components/PostInput";
import PostList from "../components/PostList";

const specialKeywords = {
  "うざい": { image: "/images/cat.jpg", text: "そろそろおなかがすいていませんか？" },
  "犬": { image: "/images/dog.jpg", text: "これは犬の画像です" },
  "花": { image: "/images/flower.jpg", text: "これは花の画像です" }
};

const SNSPage = () => {
  const [posts, setPosts] = useState([]);
  const [imageSrc, setImageSrc] = useState(null);
  const [popupText, setPopupText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const addPost = (content) => {
    const newPost = {
      id: Date.now(),
      content,
      likes: 0
    };
    setPosts([newPost, ...posts]);

    // 特定のキーワードが含まれていたらポップアップを開く
    for (const keyword in specialKeywords) {
      if (content.includes(keyword)) {
        setImageSrc(specialKeywords[keyword].image);
        setPopupText(specialKeywords[keyword].text);
        setIsOpen(true);
        return;
      }
    }
    setImageSrc(null);
    setPopupText("");
    setIsOpen(false);
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const likePost = (id) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>SNS Feed</h2>
      <PostInput addPost={addPost} />
      <PostList posts={posts} deletePost={deletePost} likePost={likePost} />
      
      {/* ポップアップの実装 */}
      {isOpen && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex",
          justifyContent: "center", alignItems: "center"
        }}>
          <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>{popupText}</p>
            <img src={imageSrc} alt="Detected" style={{ width: "300px" }} />
            <button onClick={() => setIsOpen(false)} style={{ display: "block", margin: "10px auto", padding: "5px 10px" }}>閉じる</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SNSPage;
