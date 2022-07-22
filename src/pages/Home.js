import { useContext } from "react";
import { QuestionContext } from "../contexts/QuestionContext";
import QuestionBox from "../components/QuestionBox";
import { Link } from "react-router-dom";
function Home() {
  const {isLoading } = useContext(QuestionContext);
  return (
    <div>
      {!isLoading ? (
        <QuestionBox />
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default Home;
