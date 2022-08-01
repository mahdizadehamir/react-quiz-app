import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { QuestionContext } from "../contexts/QuestionContext";
export default function Results(props) {
  const { questions, isLoading } = useContext(QuestionContext);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const userAnswer = props.answers;
  const checkAnswers = () => {
    let count = 0 ;
    for(let i = 0; i < userAnswer.length; i++){
      if(userAnswer[i] === questions[i].ans){
        count++;
      }
    }
    setCorrectAnswers(count);
  }
  return (
    <div>
      <h2>{correctAnswers}</h2>
      <button onClick={checkAnswers}>Click Me</button>
    </div>
  );
}
