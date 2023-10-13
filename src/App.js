import logo from './logo.svg';
import './App.css';
import Headder from "./Headder";
import Menubar from "./Menubar";
// import Contentarea from "./Contentarea";
// import Footer from "./Footer";
import "./App.css";
import Home from './Components/Home';
import Personal from './Components/Personal';
import Educational from './Components/Educational';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Certificates from './Components/Certificates';
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Headder></Headder>
      <Menubar></Menubar>
      {/* <Contentarea></Contentarea>
      <Footer></Footer> */}
      {/* <Personal></Personal>
      <Educational></Educational>
      <Projects></Projects>
      <Skills></Skills>
      <Certificates></Certificates> */}
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App></App>}></Route> */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Personal" element={<Personal></Personal>}></Route>
        <Route path="/Educational" element={<Educational></Educational>}></Route>
        <Route path="/Projects" element={<Projects></Projects>}></Route>
        <Route path="/Skills" element={<Skills></Skills>}></Route>
        <Route path="/Certificates" element={<Certificates></Certificates>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
