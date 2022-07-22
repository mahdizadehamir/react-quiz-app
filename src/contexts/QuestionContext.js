import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const QuestionContext = createContext();

const QuestionContextProvider = (props) => {
  // Questions with Correct Answers
  const [questionwithAnswer] = useState([
    { que: "what is the capital of india ?", ans: "delhi", id: uuidv4() },
    { que: "what is the capital of china ?", ans: "beijing", id: uuidv4() },
    { que: "what is the capital of japan ?", ans: "tokyo", id: uuidv4() },
    {
      que: "what is the capital of australia ?",
      ans: "canberra",
      id: uuidv4(),
    },
    { que: "what is the capital of france ?", ans: "paris", id: uuidv4() },
    { que: "what is the capital of germany ?", ans: "berlin", id: uuidv4() },
  ]);
  //Selected Questions From QuestionwithAnswer
  const [questions, setQuestions] = useState([]);
  //Loading State for Questions
  const [isLoading, setIsLoading] = useState(true);
  //Choosing 4 Question function
  const chooseQuestion = () => {
    while (questions.length < 4) {
      let randomQuestion = questions;
      let random = Math.floor(Math.random() * questionwithAnswer.length);
      if (randomQuestion.indexOf(questionwithAnswer[random]) === -1) {
        randomQuestion.push(questionwithAnswer[random]);
      }
      setQuestions(randomQuestion);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    chooseQuestion();
    console.log(questions);
  }, []);
  return (
    <QuestionContext.Provider value={{ questions, chooseQuestion, isLoading }}>
      {props.children}
    </QuestionContext.Provider>
  );
};

export default QuestionContextProvider;
