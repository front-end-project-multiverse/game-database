import logo from './logo.svg';
import './App.css';
import { GameCard } from './components/gameCard';
import { GameDetails } from './routes/gameDetails';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div>
      Hello
      <Button variant="primary">Primary</Button>
      <GameDetails />
    </div>
  );
}

export default App;
