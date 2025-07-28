import { ThemeContext } from './R12Context';
import Button12 from './Button12';

const R12 = () => {
  const theme = 'dark';
  return (
    <ThemeContext.Provider value={theme}>
      <div className="R12">
        <h2>R12</h2>
        <Button12 />
      </div>
    </ThemeContext.Provider>
  );
};
export default R12;
