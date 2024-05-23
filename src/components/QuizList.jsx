import React, { useState } from 'react';

import { Link, Outlet } from 'react-router-dom'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function QuizList ({ quizzes }) {
  return (
    <>
      <h1>All Quizzes</h1>
        {quizzes?.length > 0 ? quizzes.map(quiz => (
          <Card key={quiz.id} sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography>{quiz.title}</Typography>
              <Link to={`/edit/${quiz.id}`}>
                <Button variant='contained' color='primary'>Edit Quiz</Button>
              </Link>
            </CardContent>
          </Card>
        )) : <div>no quizzes to display</div>}
    </>
  )
}

export default QuizList;
