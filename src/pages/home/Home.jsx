import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { useState, useRef, useEffect } from "react";

const Home = () => {
    const [type, setType] = useState("");
    const [category, setCategory] = useState({id:"",name:"Genre"});
    const [search,setSearch] = useState({searched:false,term:""});

    const scrollDownRef = useRef();
    const scrollSearchRef = useRef();
    const scrollUpRef = useRef();

    const scrollDown = (type) => {
        if (type === "search") {
            setTimeout(() => {
                scrollSearchRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
            },120)
        }
        else{
            scrollDownRef.current.style.display = "block";
            setTimeout(() => {
                scrollDownRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
                scrollDownRef.current.style.display = "none";
            },120);
        }
    }

    const scrollUp = () => {
        scrollUpRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    useEffect(() => {
        (search.term !== "" && scrollDown("search"));
    }, [search]);

    return (
        <div ref={scrollUpRef} className="home">
            <Navbar setType={setType} category={category} setCategory={setCategory} 
                    scrollUp={scrollUp} scrollDown={scrollDown} setSearch={setSearch}/>
            
            <Featured type={type} setType={setType} category={category} 
                        setCategory={setCategory} scrollDown={scrollDown} setSearch={setSearch}/>
            
            {(search.searched && search.term !== "") && 
            <> 
                <List listTitle={`"${search.term}"`} type="movies-search" categoryId={0} searchTerm={search.term}/>
                <List listTitle={`"${search.term}"`} type="series-search" categoryId={0} searchTerm={search.term}/>
            </>
            }

            <div ref={scrollSearchRef} className="scrollSearchReference"></div>
            
            {(type !== "" && category.id !== "") &&
                <List listTitle={category.name} type={`${type}-genre`} categoryId={category.id}/>
            }

            {(type !== "series" && type !== "series-genre") && 
                <List listTitle="Popular" type="movies" categoryId={0} />
            }

            {(type !== "movies" && type !== "movies-genre") && 
                <List listTitle="Popular" type="series" categoryId={0}/>
            }
            
            <div ref={scrollDownRef} className="scrollReference"></div>
        </div>
    );
};

export default Home;
