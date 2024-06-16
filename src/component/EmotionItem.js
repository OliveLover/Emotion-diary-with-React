import React from "react";
import "./EmotionItem.css";

const EmotionItem = ({ id, img, name, onClick, isSelected }) => {
  const handleOnClick = () => {
    onClick(id);
  };

  return (
    <div className="EmotionItem" onClick={handleOnClick}>
      <img alt={`emotion${id}`} src={img} />
      <span>{name}</span>
    </div>
  );
};

export default EmotionItem;
