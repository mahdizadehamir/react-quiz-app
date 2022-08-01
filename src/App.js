import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import QuestionContextProvider from "./contexts/QuestionContext";
import { Container } from "@mui/system"; 
import QuestionBox from "./components/QuestionBox";
import Results from "./components/Results";
function App() {
  return (
    <div className="App">
      <QuestionContextProvider>
        <Container  maxWidth="md">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<QuestionBox />} path="/:id" />
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Results />} path="/results" />
        </Routes>
        </Container>
      </QuestionContextProvider>
    </div>
  );
}

export default App;
