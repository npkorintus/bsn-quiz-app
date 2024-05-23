
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import AddQuiz from './pages/AddQuiz';
import EditQuiz from './pages/EditQuiz';
import NotFound from './pages/NotFound';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import './App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddQuiz />} />
          <Route path='/edit/:id' element={<EditQuiz />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
