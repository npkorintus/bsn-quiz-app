import { useEffect, useState } from 'react';
import mockData from '../db.json'

export function useQuiz (id) {
  const [quiz, setQuiz] = useState();
  let data = [mockData];

  useEffect(() => {
    let qz = data.find(quiz => quiz.id === Number(id));
    setQuiz(qz);
  }, [id])

  return quiz;
}
