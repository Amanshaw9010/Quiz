const intialData = {
    list: []
}

const QuizReducer = (state = intialData, action) => {
    switch (action.type) {
        case "USER":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }

                ]
            }
        default: return state;
    }

}

export default QuizReducer

