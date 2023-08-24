import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route exact path="/login" element={
              <Login />
            } />
            <Route exact path="/" element={
              <Home />
            } />
            <Route exact path="/register" element={
              <Register />
            } />
            <Route exact path="/watch" element={
              <Watch />
            } />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;