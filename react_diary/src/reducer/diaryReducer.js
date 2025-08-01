export const diaryReducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return action.data;
    case 'CREATE':
      return [...state, action.data];
    case 'REMOVE':
      return state.filter((item) => item.id !== action.targetId);
  }
};
