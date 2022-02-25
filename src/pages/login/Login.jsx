import "./login.scss";

const Login = () => {
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
                    <input type="email" placeholder="Email or phone number" />
                    <input type="password" placeholder="Password" />
                    <button className="loginButton">Sign In</button>
                    <span>New to Leminflix? <b>Sign up now.</b></span>
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
