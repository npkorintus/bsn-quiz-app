import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import QuizEditor from '../components/QuizEditor';

function EditQuiz () {
  const { id } = useParams();
  const [quiz, setQuiz] = useState();

  useEffect(() => {
    setQuiz()
  }, [id])

  return (
    <>
      <h1>Edit Quiz</h1>
      <QuizEditor id={id} quiz={quiz} />
    </>
  )
}

export default EditQuiz;
