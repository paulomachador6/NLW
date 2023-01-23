import './styles/global.css';
import { Habit } from "./components/Habit";

function App() {
  return (
    <div>
      <Habit completed={6}/>
      <Habit completed={6}/>
      <Habit completed={6}/>
      <Habit completed={6}/>
    </div>
  );
}

export default App;
