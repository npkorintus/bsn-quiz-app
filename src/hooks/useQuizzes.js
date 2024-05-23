import { useEffect, useState } from 'react';
import mockData from '../db.json'

export function useQuizzes () {
  const [quizzes, setQuizzes] = useState();
  let data = [mockData];

  useEffect(() => {
    setQuizzes(data);
  }, [])

  return quizzes;
}
