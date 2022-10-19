import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import QuizReducer from '../reducer/QuizReducer'
import { saveData } from '../action/Index'


const EndQuiz = () => {

    const [submitData, setData] = useState(submitData);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(saveData(submitData));
    }, [])









 











    const list = useSelector((state) =>
        state.QuizReducer.list
    )
    console.log(list);
    return (
        <>
            <h1>End Quiz </h1>
            <div> {
                list.map((elem) => {
                    return (
                        <div className='shoeItems' key={elem.id}>
                            <h3>{elem.data}</h3>

                        </div>
                    )
                })
            }</div>


        </>
    )
}

export default EndQuiz
