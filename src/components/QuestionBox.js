import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { QuestionContext } from "../contexts/QuestionContext";
import { Link, useNavigate } from "react-router-dom";
import Results from "./Results";
export default function QuestionBox(props) {
  const navigate = useNavigate();
  const { questions, isLoading, possibleAnswers, getRandomAnswer } =
    useContext(QuestionContext);
  const [questionNumber, setQuestionNumber] = useState(0) || 0;
  const [userAnswer, setUserAnswer] = useState([]);
  const handleClick = (e) => {
    setUserAnswer([...userAnswer, e.target.value]);
    // console.log(userAnswer)
  };
  if (questions[questionNumber]) {
    return (
      <div>
        {!isLoading ? (
          <Box
            variant="outlined"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            minHeight="50vh"
            minWidth="30vw"
            sx={{
              textAlign: "center",
              border: "1px solid #ccc",
              flexDirection: "column",
              position: "absolute",
              top: "20%",
              left: "35%",
              margin: "auto",
              bgcolor: "#bbb",
            }}
          >
            <h2 className="question">{questions[questionNumber].que}</h2>
            {possibleAnswers.map((answer) => (
              <button
                key={possibleAnswers.indexOf(answer)}
                onClick={(e) => {
                  setQuestionNumber(questionNumber + 1);
                  getRandomAnswer(questions);
                  handleClick(e);
                }}
                value={answer}
              >
                {answer}
              </button>
            ))}
          </Box>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    );
  }
  return <Results answers={userAnswer}  />;
  
}
