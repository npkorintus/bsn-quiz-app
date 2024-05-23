import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useQuiz } from '../hooks/useQuiz';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function QuizEditor ({ id }) {
  const quiz = useQuiz(id);

  const onSave = () => {

  }

  if (!quiz) return <div>No quiz found</div>;

  return (
    <>
      <Box component='form' sx={{ p: 2 }}>
        <Card sx={{ padding: 2, marginBottom: 2 }}>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Title"
              value={quiz.title}
              margin="normal"
              fullWidth
            />
          </div>
          <div>
            <TextField
              id="outlined"
              label="Description"
              value={quiz.description}
              margin="normal"
              fullWidth
            />
          </div>
          <div>
            <TextField
              id="outlined"
              label="URL"
              value={quiz.url}
              margin="normal"
              fullWidth
            />
          </div>
        </Card>
        {quiz.questions_answers.map(question => (
          <Card sx={{ padding: 2, marginBottom: 2 }}>
            <div>
              <TextField
                label="Question Text"
                value={question.text}
                margin="normal"
                fullWidth
              />
              </div>
              <FormControl fullWidth>
                <RadioGroup>
                  {question.answers.map(answer => (
                    <FormControlLabel
                      value={answer.id}
                      control={<Radio checked={answer.is_true} />}
                      label={answer.text}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
              <div>
                <Button variant="contained" color="primary">Add Answer</Button>
              </div>
              <div>
                <TextField
                  label="Correct Answer Feedback"
                  value={question.feedback_true}
                  margin="normal"
                  fullWidth
                />
              </div>
              <div>
                <TextField
                  label="Incorrect Answer Feedback"
                  value={question.feedback_false}
                  margin="normal"
                  fullWidth
                />
              </div>
          </Card>
        ))}

        <div>
          <Button variant='contained' color='primary'>Add Question</Button>
        </div>

        <ButtonGroup variant="contained" color="primary" sx={{ margin: 2 }}>
          <Link to="/">
            <Button
              variant="contained"
              color="error"
            >
              Cancel
            </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            onClick={onSave}
          >
            Save
          </Button>
        </ButtonGroup>
      </Box>
    </>
  )
}

export default QuizEditor;
