import React, {useState} from 'react';
import {TicketMenu} from "./TicketMenu";
import {Cart} from "./Cart";
import {FILM_DATA} from "../data/data";
import "../App.css"

export function Homepage(props) {
    const [isHome, setIsHome] = useState(true);
    const handleClick = () => {
        setIsHome(false);
    }

    return (
        <>
            {isHome && (
                <div className="homePageContainer">
                    <h1 className="homePageHeader">Welcome to my react library application</h1>
                    <button className="homePageButton" onClick={handleClick}>Start Browsing</button>
                </div>

            )}
            {!isHome && <TicketMenu films={FILM_DATA} addFilm={props.addFilm}/>}
        </>
    );

}

export default Homepage;
