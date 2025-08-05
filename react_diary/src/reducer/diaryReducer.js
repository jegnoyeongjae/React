export const diaryReducer = (state, action) => {
    switch(action.type){
        case 'INIT':
            return action.data;
        case 'CREATE':
            return [...state, action.data];
        case 'UPDATE':
            return state.map(item => item.id === action.data.id
                    ? {...action.data}
                    : item
            )
        case 'REMOVE':
            return state.filter(item => item.id !== action.targetId);
    }
}