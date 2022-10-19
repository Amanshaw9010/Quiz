import logo from './logo.svg';
import './App.css';
import Quiz from './Component/Quiz';
import EndQuiz from './Component/EndQuiz';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Second from './Component/Second';
 
function App() {
  return (
    <>
      <Second />
      

    </>



    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Ecommerce />} />
    //     <Route path="/quiz" element={<Quiz />} />
    //     <Route path="/endquiz" element={<EndQuiz />} />
    //   </Routes>
    // </BrowserRouter>


  );
}

export default App;
