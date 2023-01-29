import React, { useState } from 'react';
import Homepage from './Homepage';
import {TicketMenu} from './TicketMenu';
import {Faq} from './Faq';
import {ContactUs} from "./ContactUs";

export function Navigation() {
    const [currentComponent, setCurrentComponent] = useState('home');

    function renderComponent() {
        switch (currentComponent) {
            case 'home':
                return <Homepage />;
            case 'tickets':
                return <TicketMenu />;
            case 'faq':
                return <Faq />;
            case 'contactus':
                return <ContactUs />;
        }
    }

    return (
        <div className="navigationContainer">
            <nav className="navigationBar">
                <button className="navigationButton" onClick={() => setCurrentComponent('home')}>Home</button>
                <button className="navigationButton" onClick={() => setCurrentComponent('tickets')}>Tickets</button>
                <button className="navigationButton" onClick={() => setCurrentComponent('faq')}>FAQ</button>
                <button className="navigationButton" onClick={() => setCurrentComponent('contactus')}>Contact</button>

            </nav>
            {renderComponent()}
        </div>
    );
}