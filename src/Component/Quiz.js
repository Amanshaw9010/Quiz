import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveData } from '../action/Index'
import '../CSS/quiz.css'
import QuizReducer from '../reducer/QuizReducer'



const Quiz = () => {

    const data = [{
        question: "1 who is the president of India",
        option1: "ram nath",
        option2: "amitabh bachan",
        option3: "sunita aggrawal",
        option4: "varun dhavan"
    },
    {
        question: "2 who is the president of India",
        option1: "ram nath",
        option2: "amitabh bachan",
        option3: "sunita aggrawal",
        option4: "varun dhavan"
    },
    {
        question: "3 who is the president of India",
        option1: "ram nath",
        option2: "amitabh bachan",
        option3: "sunita aggrawal",
        option4: "varun dhavan"
    },
    {
        question: "4 who is the president of India",
        option1: "ram nath",
        option2: "amitabh bachan",
        option3: "sunita aggrawal",
        option4: "varun dhavan"
    },
    {
        question: "5 who is the president of India",
        option1: "ram nath",
        option2: "amitabh bachan",
        option3: "sunita aggrawal",
        option4: "varun dhavan"
    },
    ]


    const [questionCount, setQuestion] = useState(0);
    const [display, setDisplay] = useState("none");
    const [nextDisplay, setDisplayNext] = useState("block");

    const [submitData, setData] = useState("vk");
    const dispatch = useDispatch();



    const nextQuestion = () => {
        setQuestion(questionCount + 1);
        if (questionCount > -1) {
            setDisplay("block")
        }
        if (questionCount === data.length - 2) {
            setDisplayNext("none");
        }
    }

    const prevQuestion = () => {
        setQuestion(questionCount - 1);
        if (questionCount === 1) {
            setDisplay("none");
        }

        if (questionCount < data.length) {
            setDisplayNext("block");
        }
    }




    return (
        <>
            <div className="main">
                <a href="/endquiz"><h3  >submit</h3></a>
                <div className="container">
                    <h2>{data[questionCount].question}</h2>
                    <div className="quiz">
                        <div className="question">
                            <input type="radio" name='sameRadio' />
                            <label for="test1">{data[questionCount].option1}</label>

                        </div>
                        <div className="question">
                            <input type="radio" name='sameRadio' />
                            <label for="test2">{data[questionCount].option2}</label>

                        </div>
                        <div className="question">
                            <input type="radio" name='sameRadio' />
                            <label for="test3">{data[questionCount].option3}</label>

                        </div>
                        <div className="question">
                            <input type="radio" name='sameRadio' />
                            <label for="test4">{data[questionCount].option4}</label>

                        </div>
                    </div>
                    <button style={{ display: display }} className='btn' onClick={prevQuestion} >PREVIOUS</button>
                    <button style={{ display: nextDisplay }} className='btn' onClick={nextQuestion}>NEXT</button>
                </div>
            </div>
        </>
    )
}

export default Quiz
