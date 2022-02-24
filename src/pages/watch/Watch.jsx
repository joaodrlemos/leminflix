import "./watch.scss";
import { ArrowBack } from '@mui/icons-material';

const Watch = () => {
  return <div className="watch">
    <a href="/">
      <div className="back">
        <ArrowBack />
        Home
      </div>
    </a>
    <video
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
      className="video"
      autoPlay={true}
      progress
      controls />
  </div>;
};

export default Watch;
