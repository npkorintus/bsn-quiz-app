
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import AddQuiz from './pages/AddQuiz';
import EditQuiz from './pages/EditQuiz';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddQuiz />} />
        <Route path='/edit/:id' element={<EditQuiz />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
