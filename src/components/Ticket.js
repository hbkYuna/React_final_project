import {useState} from 'react';
import {FilmModal} from "./FilmModal";

export function Ticket(props) {
    const {film} = props
    const [open, setOpen] = useState(false)

    return (
        <div>
            <button onClick={() => setOpen(true)}>
                <h2>{film.name}</h2>
                <img style={{width: 200, height: 300}} src={film.image} alt="film"/>
            </button>
            <FilmModal film={film} open={open}/>
        </div>
    )
}