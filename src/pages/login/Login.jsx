import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("user"));

        if(email === ""){
            alert("email field can't be empty");
        }
        else if(password === ""){
            alert("password field can't be empty");
        }
        else if(user.email !== email || user.password !== password){
            alert("credentials are wrong, please try again.");
            setEmail("");
            setPassword("");
        }
        else{
            navigate("/home");
        }
    }

    return (
        <div className="login">
            <div className="top">
                <a href="/">
                    <div className="wrapper">
                        <img className="logo" src="https://i.postimg.cc/vTTK3YjK/Leminflix.png" alt="" />
                    </div>
                </a>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                    <button className="loginButton" onClick={login}>Sign In</button>
                    <span>New to Leminflix? <b className="signUp" onClick={()=>navigate('/register')}>Register now</b></span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <b> Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    );
}

export default Login;
