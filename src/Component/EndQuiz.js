import React from 'react'
import QuizReducer from '../reducer/QuizReducer'

const EndQuiz = () => {



    const list = useSelector((state) =>
        state.QuizReducer.list
    )
    console.log(list);
    return (
        <>
            <h1>End Quiz </h1>
            {
                list.map((elem) => {
                    return (
                        <div className='shoeItems' key={elem.id}>
                            <h3>{elem.data}</h3>
                        </div>
                    )
                })
            }
        </>
    )
}

export default EndQuiz
