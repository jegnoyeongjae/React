export const diaryReducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return action.data;
    case 'CREATE':
      return;
    case 'UPDATE':
      return;
    case 'REMOVE':
      return;
  }
};
