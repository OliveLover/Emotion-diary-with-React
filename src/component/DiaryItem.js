import "./DiaryItem.css";

const DiaryItem = ({ id, emotionId, content, date }) => {
  return <div className="DiaryItem">{content}</div>;
};

export default DiaryItem;
