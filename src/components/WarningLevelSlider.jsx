import React from "react";

const WarningLevelSlider = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="range"
        min="1"
        max="3"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        style={{ width: "20%" }}
      />
      <p>
        警戒度: {value === 1 ? "低" : value === 2 ? "中" : "高"}
      </p>
    </div>
  );
};

export default WarningLevelSlider;
