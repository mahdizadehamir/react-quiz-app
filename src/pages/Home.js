import { useContext } from "react";
import { QuestionContext } from "../contexts/QuestionContext";
import QuestionBox from "../components/QuestionBox";
import { Link } from "react-router-dom";
function Home() {
  const { questions, isLoading } = useContext(QuestionContext);
  return (
    <div>
      {!isLoading ? (
        <QuestionBox>
          <h2 className="question">{questions[0].que}</h2>
          {questions.map(question => <Link to={`/${questions.indexOf(question)}`} key={question.id} href="#">{question.ans}</Link>)}
        </QuestionBox>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default Home;
