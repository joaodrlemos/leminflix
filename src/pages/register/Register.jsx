import "./register.scss";
import { useState, useRef } from "react";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    }

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="https://i.postimg.cc/vTTK3YjK/Leminflix.png" alt="" />
                    <a href="/login">
                        <button className="loginButton">
                            Sign in
                        </button>
                    </a>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {!email ? (
                    <div className="input">
                        <input type="email" placeholder="email address" ref={emailRef} />
                        <button className="registerButton" onClick={handleStart}>Get started</button>
                    </div>
                ) : (
                    <form className="input">
                        <input type="password" placeholder="password" ref={passwordRef} />
                        <button className="registerButton" onClick={handleStart}>Start</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Register;
