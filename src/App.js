import { Route, Routes, HashRouter } from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import Background from "../src/Components/Background";
import Home from "./Pages/Home";
import FunFacts from "../src/Pages/FunFacts";
import SpaceInfo from "./Pages/SpaceInfo";
import SpaceQuiz from "./Pages/SpaceQuiz";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/funfact" element={<FunFacts/>} />
          <Route path="spaceinfo" element={<SpaceInfo />} />
          <Route path="/spacequiz" element={<SpaceQuiz />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
