
import {useState} from "react";
import './App.css';
import {TicketMenu} from "./components/TicketMenu";
import {Cart} from "./components/Cart";
import {FILM_DATA} from "./data/data";
import {Homepage} from "./components/Homepage"

function App() {
    const [selectedFilms, setSelectedFilms] = useState([])

    const addFilm = (film) => {
        if (!selectedFilms.includes(film)) {
            setSelectedFilms([...selectedFilms, film])
        }
    }

    return (
        <>
            <Homepage addFilm={addFilm} />
            <Cart films={selectedFilms} />
        </>
    );
}

export default App;