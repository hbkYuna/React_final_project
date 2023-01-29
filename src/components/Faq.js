import React from 'react';

export function Faq() {
    return (
        <div className="faqContainer">
            <h1 className="faqHeader">Frequently Asked Questions</h1>
            <div className="questionContainer">
                <h2 className="question">How do I rent a movie?</h2>
                <p className="answer">To rent a movie, browse our library and click on the movie you want to rent. Then, click on the "Rent" button to add the movie to your cart. Once you have selected all the movies you want to rent, proceed to checkout to complete your transaction.</p>
            </div>
            <div className="questionContainer">
                <h2 className="question">How do I return a rented movie?</h2>
                <p className="answer">To return a rented movie, log in to your account and navigate to your rental history. Select the movie you want to return and click on the "Return" button. The movie will be removed from your rental history and the rental fee will be refunded to your account.</p>
            </div>
            <div className="questionContainer">
                <h2 className="question">What is the rental period?</h2>
                <p className="answer">The rental period is the amount of time you have to watch a rented movie before it needs to be returned. The rental period for our movies is typically 48 hours.</p>
            </div>
        </div>
    )
}