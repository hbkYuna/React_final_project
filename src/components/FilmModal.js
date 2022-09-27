import Modal from 'react-modal';

export function FilmModal(props) {

    let open = props.open

    const handleClose = () => {
        open = false
    }

    return (
        <Modal isOpen={open} onRequestClose={handleClose}>
            <div className="modal">
                {/*<img src={require(props.film.image)} alt="film"/>*/}
                <div>{props.film.name}</div>
                <button onClick={handleClose}>Close</button>
            </div>
        </Modal>
    )
}