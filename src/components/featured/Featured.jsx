import "./featured.scss";
import { PlayArrow, InfoOutlined } from '@mui/icons-material';
import { featuredMovies, featuredSeries } from "../../data/data-featured";

const Featured = ({type, setType, category, setCategory, scrollDown, setSearch}) => {
    const randomFeatured = Math.floor(Math.random() * 3);

    const handleGenre = (e) =>{
        const option = (e.target.childNodes[e.target.selectedIndex]).getAttribute('name');
        const value = e.target.value;

        if (option !== "Genre") {
            setSearch({searched:false,term:""});
            setCategory({id:value,name:`${option}`});
            scrollDown();
        }
        else{
            setCategory({id:"",name:""});
            setType("");
        }
    }

    return <div className="featured">
        {type && (
            <div className="category">
                <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
                <select value={category.name} name="genre" id="genre" onChange={handleGenre}>
                    <option value="Genre" name="Genre">Genre</option>
                    <option value="35" name="Comedy">Comedy</option>
                    <option value="80" name="Crime">Crime</option>
                    <option value="14" name="Fantasy">Fantasy</option>
                    <option value="36" name="History">History</option>
                    <option value="27" name="Horror">Horror</option>
                    <option value="10749" name="Romance">Romance</option>
                    <option value="878" name="Sci-fi">Sci-fi</option>
                    <option value="12" name="Adventure">Adventure</option>
                    <option value="37" name="Western">Western</option>
                    <option value="16" name="Animation">Animation</option>
                    <option value="18" name="Drama">Drama</option>
                    <option value="99" name="Documentary">Documentary</option>
                </select>
            </div>
        )}
        <div className="imgContainer">
            <img src={type==='series' ? featuredSeries[randomFeatured].img : featuredMovies[randomFeatured].img} alt=""/>
        </div>

        <div className="info">
            <img src={type==='series' ? featuredSeries[randomFeatured].logo : featuredMovies[randomFeatured].logo} alt="" />
            <span className="description">
                {type==='series' ? featuredSeries[randomFeatured].desc : featuredMovies[randomFeatured].desc}
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <a href="/watch"><span>Play</span></a>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>;
};

export default Featured;
