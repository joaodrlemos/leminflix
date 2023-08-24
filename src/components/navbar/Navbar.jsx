import "./navbar.scss";
import { Search, Notifications, ArrowDropDown } from '@mui/icons-material';
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setType, setCategory, scrollUp, setSearch }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const searchInputRef = useRef();
    const navigate = useNavigate();

    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    const changeTypeTab = (type) => {
        setType(type);
        setCategory({ id: "", name: "" });
    }

    const openSearchBar = () => {
        setOpenSearch((p) => !p);
        setTimeout(() => searchInputRef.current.focus(), 400);
    }

    const searchData = (e) => {
        e.preventDefault();
        setSearch({ searched: false, term: "" });
        setSearch({ searched: true, term: searchInputRef.current.value });
        setOpenSearch(false);
        searchInputRef.current.value = "";
    }

    return <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://i.postimg.cc/vTTK3YjK/Leminflix.png" alt="" />
                <div className="navOptions">
                    <span onClick={() => { setType(""); setSearch({ searched: false, term: "" }); scrollUp() }}>Homepage</span>
                    <span onClick={() => { changeTypeTab("movies"); scrollUp() }}>Movies</span>
                    <span onClick={() => { changeTypeTab("series"); scrollUp() }}>Series</span>
                    <span className="loginScreenBtn" onClick={()=>navigate('/login')}>LOGIN</span>
                </div>
                <div className="navMenuArrow">
                    <div className="menu">Menu</div>
                    <ArrowDropDown className="arrow icon" />
                    <div className="options">
                        <span onClick={() => { changeTypeTab("movies"); scrollUp() }}>Movies</span>
                        <span onClick={() => { changeTypeTab("series"); scrollUp() }}>Series</span>
                    </div>
                </div>
            </div>
            <div className="right">
                <form className={!openSearch ? "searchBox" : "searchBox clicked"} onSubmit={searchData}>
                    <input type="text" className="searchInput" ref={searchInputRef} />
                    <Search className="searchIcon" onClick={openSearchBar} />
                </form>
                <Notifications className="notification icon" />
                <img src="https://i.postimg.cc/qqSdKbwW/avatar2.png" alt="" />
                <div className="others">
                    <ArrowDropDown className="arrow icon" />
                    <div className="options">
                        <span className="profile">Profile</span>
                        <span className="settings">Settings</span>
                        <span className="logout" onClick={()=>navigate('/')}>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Navbar;

