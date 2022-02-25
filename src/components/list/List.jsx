import "./list.scss";
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import ListItem from "./ListItem";
import { useRef, useState, useEffect } from "react";

// TMDB API
const API_KEY = "1725d2d0e0d66e798bd8a29f9d97dad9";

const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=` + API_KEY + `&language=en-US&page=` + Math.ceil(Math.random() * 10);
const MOVIES_BY_GENRE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=` + API_KEY + `&with_genres=`;
const SEARCH_MOVIE_URL = `https://api.themoviedb.org/3/search/movie?&api_key=` + API_KEY + `&query=`;

const POPULAR_SERIES_URL = `https://api.themoviedb.org/3/discover/tv?api_key=` + API_KEY + `&language=en-US&sort_by=popularity.desc&page=` + Math.ceil(Math.random() * 10) + `&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;
const SERIES_BY_GENRE_URL = `https://api.themoviedb.org/3/discover/tv?api_key=` + API_KEY + `&with_genres=`;
const SEARCH_SERIES_URL = `https://api.themoviedb.org/3/search/tv?api_key=` + API_KEY + `&query=`;


const List = ({ listTitle, type, categoryId, searchTerm }) => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const [hasEnded, setHasEnded] = useState(false);
    const [content, setContent] = useState("");
    const [sliderLimit, setSliderLimit] = useState(15);

    const listRef = useRef();

    async function getContent(url) {
        const resp = await fetch(url);
        const respData = await resp.json();

        if (!respData.results || respData.results.length === 0){ 
            alert(`No ${type.split("-")[0]} found, please try again`);
        }
        else {
            setSliderLimit(respData.results.length);
        }
        setContent(respData.results);
    }

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;

        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${distance + 230}px)`;
        }
        else if (direction === 'right' && slideNumber < sliderLimit) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${distance - 230}px)`;
        }
    }

    useEffect(() => {
        if (categoryId === 0) {
            (type === 'movies' && getContent(POPULAR_MOVIES_URL));
            (type === 'series' && getContent(POPULAR_SERIES_URL));
            (type === 'movies-search' && getContent(SEARCH_MOVIE_URL + searchTerm));
            (type === 'series-search' && getContent(SEARCH_SERIES_URL + searchTerm));
        }
        else {
            (type === "movies-genre" && getContent(MOVIES_BY_GENRE_URL + categoryId));
            (type === "series-genre" && getContent(SERIES_BY_GENRE_URL + categoryId));
        }
    }, [categoryId,searchTerm,type]);

    useEffect(() => {
        slideNumber === 0 ? setIsMoved(false) : setIsMoved(true);
        ( sliderLimit < 6 || slideNumber === sliderLimit - 5) ? setHasEnded(true) : setHasEnded(false);
    }, [slideNumber, sliderLimit]);

    return <div className="container">
        {content && content.length !== 0 &&
            <div className="list">
                <span className="listTitle">
                    {listTitle + " " + type.split("-")[0]}
                </span>
                <div className="wrapper">
                    <ArrowBackIosNewOutlined style={{ display: !isMoved && "none" }} 
                        className="sliderArrow left" onClick={() => handleClick("left")} />
                    <div className="container" ref={listRef}>
                        {content !== "" && content.map((data, id) => {
                            const { title, overview, name, release_date, vote_average, 
                                    poster_path, backdrop_path, first_air_date } = data;
                            return <ListItem
                                index={id}
                                key={id}
                                title={title}
                                name={name}
                                overview={overview}
                                release_date={release_date}
                                vote_average={vote_average}
                                poster_path={poster_path}
                                backdrop_path={backdrop_path}
                                first_air_date={first_air_date}
                            />
                        })}
                    </div>
                    <ArrowForwardIosOutlined style={{ display: hasEnded && "none" }} 
                        className="sliderArrow right" onClick={() => handleClick("right")} />
                </div>
            </div>
        }
    </div>;
};

export default List;
