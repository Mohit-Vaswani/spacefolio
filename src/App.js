import {Route, Routes, HashRouter} from 'react-router-dom';
import Home from './Pages/Home';
import FunFacts from './Pages/FunFacts';
import SpaceInfo from './Pages/SpaceInfo';
import SpaceQuiz from './Pages/SpaceQuiz';

const App = () => {
  return(
  <div className='App'>
  <HashRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='funfacts' element={<FunFacts/>} />
      <Route path='spaceinfo' element={<SpaceInfo/>} />
      <Route path='spacequiz' element={<SpaceQuiz/>} />
    </Routes>
  </HashRouter>
  </div>
  )
}

export default App;
