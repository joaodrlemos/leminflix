import "./watch.scss";
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

const Watch = () => {
  const navigation = useNavigate();

  return <div className="watch">
      <div className="back" onClick={()=>navigation('/home')}>
        <ArrowBack />
          Home
      </div>
    <video
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
      className="video"
      autoPlay={true}
      progress
      controls />
  </div>;
};

export default Watch;
