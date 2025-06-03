/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2022-11-10 19:01:44
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-05-29 11:51:07
 * @FilePath: /my-app/src/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Tic from './component/tic/index';
import Profile from './view/login/login';
import Practice from "./view/practice";

// App.js
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/" className="App-link">Home</Link>
        <Link to="/tic" className="App-link">Tic</Link>
        <Link to="/practice?id=99" className="App-link">Practice</Link>
      </nav>
    </>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Profile></Profile> */}
        {/* <Tic /> */}
        <h1>Welcome to YUANJIANTONG!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="tic" element={<Tic />} />
        <Route path="practice" element={<Practice />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
