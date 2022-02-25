import "./listitem.scss";
import { PlayArrow, Add, ThumbUp, ThumbDown } from '@mui/icons-material';
import { useState } from "react";

const ListItem = ({ index, title, overview, release_date, vote_average, poster_path, name, backdrop_path,first_air_date }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const rateColor = (rate) => {
    if(rate>=8.5){
      return "excelent";
    }
    else if(8.5> rate && rate>=7){
      return "good";
    }
    else if(7>rate && rate>=4){
      return "medium";
    }
    else{
      return "bad";
    }
  }

  return (
    <>
      <div className="listItemShell">
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        {!isHovered &&
          <div
            className="notHoveredTitle"
            style={{ left: index * 225 + index * 5 }}
          >{title || name}</div>}
        <img src={backdrop_path !== null ? (`https://image.tmdb.org/t/p/original` + backdrop_path) : (poster_path !== null ? (`https://image.tmdb.org/t/p/original` + poster_path) : "")} alt="" />
        {isHovered && (
          <>
            <div className="itemInfo">
              <div className="title">
                {title || name}
              </div>
              <div className="aditional-info">
                <div className="icons">
                  <a href="/watch"><PlayArrow className="icon" /></a>
                  <Add className="icon" />
                  <ThumbUp className="icon" />
                  <ThumbDown className="icon" />
                </div>
                <div className="desc">
                  {overview !== "" ? overview : "NO DESCRIPTION FOUND"}
                </div>
                <div className="itemInfoData">
                  <span className="date">{release_date !== undefined ? 
                    release_date.split("-")[0] : 
                    first_air_date.split("-")[0]}</span>
                  <div className="rateNdate">
                  <span style={{display:(vote_average===0) && "none", padding:(Math.floor(vote_average) === vote_average && vote_average !== 10) && "4px 8px"}} 
                    className={`rating ${rateColor(vote_average)}`}>{vote_average}</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      </div>
    </>
  );
};

export default ListItem;
