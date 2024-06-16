import "./Editor.css";
import { useState } from "react";
import { getFormattedDate } from "../util";

const Editor = ({ initData, onsubmit }) => {
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: "",
  });

  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };

  return (
    <div className="Editor">
      <div className="editor_section">
        <h4>오늘의 날짜</h4>
        <div className="input_wrapper">
          <input type="date" value={state.date} onChange={handleChangeDate} />
        </div>
      </div>
      <div className="editor_section">
        {/* 감정 */}
        <h4>오늘의 감정</h4>
      </div>
      <div className="editor_section">
        {/* 일기 */}
        <h4>오늘의 일기</h4>
      </div>
      <div className="editor_section">{/* 작성 완료, 취소 */}</div>
    </div>
  );
};

export default Editor;
