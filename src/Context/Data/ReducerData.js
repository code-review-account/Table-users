const ReducerData = (state, action) => {
    switch (action.type) {
        case "FETCH_DATA":
        const newData = action.payload.map((el) => ({
            ...el,
            select: false,
            id: action.payload.indexOf(el)+1
        }))
        return {
            ...state,
            data: newData
        }
        case "RE_CHACK":
            return {
                ...state,
                data: action.payload  
            }
        case "DELETE_DATA":
        return {
            ...state,
            data: action.payload
        }
        default: 
        return state
    }
}

export default ReducerData