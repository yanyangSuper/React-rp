/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2022-11-10 19:01:44
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-06-19 10:36:18
 * @FilePath: /my-app/src/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Tic from "./component/tic/index";
// import Profile from './view/login/login';
import Practice from "./pages/practice/index";
import Special from "./pages/practice/specail";
import Login from "./pages/login/login";
import NotFound from "./pages/notFound/notFound";
import Index from "./pages/index";
import Home from "./pages/home/home";
import UnAuthorized from "./route/unAuthorized";
import AuthRoute from "./route/authRoute";

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/" className="App-link">
          Home
        </Link>
        <Link to="/tic" className="App-link">
          Tic
        </Link>
        <Link to="/practice?id=99" className="App-link">
          Practice
        </Link>
        <Link to="/special" className="App-link">
          Special
        </Link>
        <Link to="/home" className="App-link">
          Home
        </Link>
      </nav>
    </>
  );
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={
          <AuthRoute requiredPermissions={['admin']}>
            <About/>
          </AuthRoute>
        } />
        <Route path="tic" element={<Tic />} />
        <Route path="practice" element={<Practice />} />
        <Route path="special" element={<Special />} />
        <Route path="login" element={<Login />} />
        <Route path="unauthorized" element={<UnAuthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
