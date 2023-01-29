import {Ticket} from "./Ticket"

export function TicketMenu(props) {
    const films = props.films
    const addFilm = props.addFilm
    if (!films) return null;

    return (
        <div>
            <h1>Movie library</h1>

            <div className="ticketMenuFlex parentContainer">
                {films.map(film => <Ticket film={film} addFilm={addFilm} key={film.name}/>)}
            </div>

        </div>
    )
}