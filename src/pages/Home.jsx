import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useQuizzes } from '../hooks/useQuizzes';

import QuizList from '../components/QuizList';

import { Button } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";


function Home () {
  const quizzes = useQuizzes();

  return (
    <>
      <QuizList quizzes={quizzes} />
      <Link to='/add'>
        <Button variant='contained' color='primary' startIcon={<AddIcon />}>Add New Quiz</Button>
      </Link>
    </>
  )
}

export default Home;
