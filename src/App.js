import Container from './Container';
import { DarkModeProvider } from './context/DarkModeContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
      <Container />
      </DarkModeProvider>
    </div>
  );
}

export default App;
