import "./register.scss";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [start, setStart] = useState(false);
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();

    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return (email.length > 0 && re.test(email));
    }

    const validatePassword = (password) => {
        return (password.length >= 4);
    }

    const handleStart = () => {
        if (!validateEmail(email)) {
            alert("Please enter a valid email.");
            setEmail("");
        }
        else {
            setStart(true);
        }
    }

    const handleFinish = () => {
        if (!validatePassword(password)) {
            alert("Password must be at least 4 characters");
            setPassword("");
        }
        else {
            const newUser = {
                email: email,
                password: password
            }
            localStorage.setItem("user",JSON.stringify(newUser));
            navigate('/');
        }
    }

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="https://i.postimg.cc/vTTK3YjK/Leminflix.png" alt="" />
                    <button className="loginButton" onClick={()=>navigate('/')}>
                        Sign in
                    </button>
                </div>
            </div>
            <div className="container" >
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {!start ? (
                    <div className="input">
                        <input type="email" placeholder="email address" ref={emailRef} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button className="registerButton" onClick={handleStart}>Get started</button>
                    </div>
                ) : (
                    <form className="input" onSubmit={(e) => e.preventDefault()}>
                        <input type="password" placeholder="password" ref={passwordRef} value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className="registerButton" onClick={handleFinish}>Start</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Register;
