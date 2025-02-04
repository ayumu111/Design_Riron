import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WarningLevelSlider from "../components/WarningLevelSlider";
import HobbySelector from "../components/HobbySelector";

const InitialSetupPage = () => {
  const navigate = useNavigate();
  const [warningLevel, setWarningLevel] = useState(1);
  const [hobbies, setHobbies] = useState([]);

//   useEffect(() => {
//     // もし既に設定済みならSNSページへリダイレクト
//     if (localStorage.getItem("setupComplete") === "true") {
//       navigate("/sns");
//     }
//   }, [navigate]);

  const handleSubmit = () => {
    // 設定を保存
    localStorage.setItem("warningLevel", warningLevel);
    localStorage.setItem("hobbies", JSON.stringify(hobbies));
    localStorage.setItem("setupComplete", "true");

    // SNSページへ移動
    navigate("/sns");
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>初期設定</h2>
      <p>誹謗中傷に対する警戒度を選んでください</p>
      <WarningLevelSlider value={warningLevel} onChange={setWarningLevel} />

      
      <HobbySelector selectedHobbies={hobbies} onChange={setHobbies} />

      <button onClick={handleSubmit} style={{
        padding: "10px 20px",
        fontSize: "18px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "20px"
      }}>
        SNSへ進む
      </button>
    </div>
  );
};

export default InitialSetupPage;
