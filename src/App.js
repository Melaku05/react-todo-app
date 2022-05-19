import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './function-based/components/NavBar';
import About from './function-based/components/About';
import NoPage from './function-based/components/NoPage';
import TodoContainer from './function-based/components/TodoContainer';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<TodoContainer />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
