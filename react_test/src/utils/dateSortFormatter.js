export function filterAndSortByMonth(todos, date) {
  const year = date.getFullYear();
  const month = date.getMonth(); // 0~11

  return todos
    .filter((todo) => {
      const start = new Date(todo.startDate);
      return start.getFullYear() === year && start.getMonth() === month;
    })
    .sort((a, b) => {
      const startA = new Date(a.startDate);
      const startB = new Date(b.startDate);

      // 1순위: 시작일 빠른 순
      if (startA.getTime() !== startB.getTime()) {
        return startA - startB;
      }

      // 2순위: 시작일 같으면 종료일이 늦은 것이 뒤쪽
      const dueA = new Date(a.dueDate);
      const dueB = new Date(b.dueDate);
      return dueA - dueB;
      
    });
}
