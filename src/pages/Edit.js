import { useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const { id } = useParams();
  const data = useDiary(id);
  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    return <div>Edit 페이지입니다.</div>;
  }
};

export default Edit;
