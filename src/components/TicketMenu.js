import {Ticket} from "./Ticket"

export function TicketMenu(props) {
    const {films} = props
    if (!films) return null;

    return (
        <div>
            <h1>Movie library</h1>

            <div className="ticketMenuFlex">
                {films.map(film => <Ticket film={film} key={film.name}/>)}
            </div>

        </div>
    )
}