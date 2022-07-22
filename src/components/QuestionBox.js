import { Box } from "@mui/system";
import React from "react";
import { useContext, useState } from "react";
import { QuestionContext } from "../contexts/QuestionContext";
import { Link } from "react-router-dom";
export default function QuestionBox(props) {
  const { questions, chooseQuestion, isLoading } = useContext(QuestionContext);
  const [questionNumber, setQuestionNumber] = useState(0);
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
          {questions.map((question) => (
            <button
              key={question.id}
              onClick={() => {
                setQuestionNumber(questionNumber + 1);
              }}
            >
              <Link to={`/${questionNumber}`}>
                {question.ans}
              </Link>
            </button>
          ))}
        </Box>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
