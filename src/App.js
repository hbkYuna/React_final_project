import './App.css';
import {TicketMenu} from "./components/TicketMenu";
import {FILM_DATA} from "./data/data";

function App() {
  return (
      <TicketMenu films={FILM_DATA}/>
  );
}

export default App;
