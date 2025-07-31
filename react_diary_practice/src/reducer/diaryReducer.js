export const diaryReducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return action.data;
  }
};
