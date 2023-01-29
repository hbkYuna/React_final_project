import {useState} from 'react';
import Modal from "react-modal";

export function Ticket(props) {
    const film = props.film
    const addFilm = props.addFilm
    const [open, setOpen] = useState(false)

    function FilmModal(props) {
        return (
            <Modal isOpen={open} className="modal">
                <div className="modalWindow">
                    <img className="filmImage" src={props.film.image} alt="film"/>
                    <div className="filmName">{props.film.name}</div>
                    <button className="closeButton" onClick={() => setOpen(false)}>Close</button>
                    <button className="addButton" onClick={() => addFilm(props.film)}>Add</button>
                </div>
            </Modal>
        )
    }

    return (
        <div className="ticketContainer">
            <button className="filmButton" onClick={() => setOpen(true)}>
                <h2 className="filmTitle">{film.name}</h2>
            </button>
            <FilmModal film={film} open={open}/>
        </div>
    )
}