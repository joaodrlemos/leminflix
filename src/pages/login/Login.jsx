import "./login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

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
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="loginButton" onClick={() => navigate('/home')}>Sign In</button>
                    <span>New to Leminflix? <b className="signUp" onClick={()=>navigate('/register')}>Register now.</b></span>
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
