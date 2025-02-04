import React from "react";
import { useNavigate } from "react-router-dom";

const hobbiesList = ["ゲーム", "映画", "スポーツ","睡眠", "読書","食事", "音楽", "旅行","アニメ","漫画","性",];

const HobbySelectorPage = ({ selectedHobbies, onChange }) => {
  const navigate = useNavigate();

  const toggleHobby = (hobby) => {
    if (selectedHobbies.includes(hobby)) {
      // すでに選択されている場合は解除
      onChange(selectedHobbies.filter((h) => h !== hobby));
    } else {
      // 2つまでしか選択できないようにする
      if (selectedHobbies.length < 2) {
        onChange([...selectedHobbies, hobby]);
      }
    }
  };

  // const handleSubmit = () => {
  //   localStorage.setItem("hobbies", JSON.stringify(selectedHobbies));
  //   navigate("/sns");
  // };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>趣味を選択してください</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {hobbiesList.map((hobby) => (
          <div
            key={hobby}
            onClick={() => toggleHobby(hobby)}
            style={{
              width: "120px",
              height: "80px",
              margin: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              cursor: "pointer",
              backgroundColor: selectedHobbies.includes(hobby) ? "#007bff" : "#f0f0f0",
              color: selectedHobbies.includes(hobby) ? "white" : "black",
              fontSize: "18px",
              fontWeight: "bold",
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)"
            }}
          >
            {hobby}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default HobbySelectorPage;
