import React, {useState} from 'react';
import './App.css';
import Counters from "./components/counter/Counters";
import Form from "./components/form/Form";


function App() {

    const [aardbeien, setCounter1] = useState(0);
    const [bananen, setCounter2] = useState(0);
    const [appels, setCounter3] = useState(0);
    const [kiwis, setCounter4] = useState(0);

    function reset(){setCounter1(0);setCounter2(0);setCounter3(0);setCounter4(0)}


    const [formFirstName, setFormFirstName] = useState('');
    const [formLastName, setFormLastName] = useState('');
    const [formAge, setFormAge] = useState(0);
    const [formPostalCode, setFormPostalCode] = useState('');
    const [checkedTerms, toggleTerms] = useState(false);
    const [formComments, setFormComments] = useState('');
    const [delivery, toggleDelivery] = useState('')
    const [radioButton, setRadioButton] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formComments, checkedTerms, formAge, formPostalCode, formFirstName, formLastName);
    }

    // function logClick() {
    //     console.log("Geklikt!");
    // }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <Counters
                counter={aardbeien}
                setCounter={setCounter1}
                fruitName="🍓 Aardbeien"
            >
            </Counters>
            <Counters
                counter={bananen}
                setCounter={setCounter2}
                fruitName="🍌 Bananen"
            >
            </Counters>
            <Counters
                counter={appels}
                setCounter={setCounter3}
                fruitName="🍎 Appels"
            >
            </Counters>
            <Counters
                counter={kiwis}
                setCounter={setCounter4}
                fruitName="🥝 Kiwi's"
            >
            </Counters>

            <button
            type="button"
            onClick={(e) => reset(0)}>
            Reset
            </button>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Bestelformulier</legend>

                    <label htmlFor="details-firstName">
                        Voornaam:
                        <input
                            type="text"
                            name="name"
                            id="details-firstname"
                            value={formFirstName}
                            onChange={(e) => setFormFirstName(e.target.value)}

                        />
                    </label>

                    <label htmlFor="details-lastName">
                        Achternaam:
                        <input
                            type="text"
                            name="name"
                            id="details-lastName"
                            value={formLastName}
                            onChange={(e) => setFormLastName(e.target.value)}

                        />
                    </label>

                    <label htmlFor="details-age">
                        Leeftijd:
                        <input
                            type="number"
                            name="age"
                            id="details-age"
                            value={formAge}
                            onChange={(e) => setFormAge(parseInt(e.target.value))}
                        />
                    </label>

                    <label htmlFor="postal-code">
                        Postcode:
                        <input
                            type="number,Text"
                            name="code"
                            id="postal-code"
                            value={formPostalCode}
                            onChange={(e) => setFormPostalCode(e.target.value)}
                        />
                    </label>
                    <p>Bezorgfrequentie</p>

                    <select
                        id="deliver-frequency"
                        value={delivery}
                        onChange={(e) => toggleDelivery(e.target.value)}
                    >
                        <option value="1">iedere week</option>
                        <option value="2">om de week</option>
                        <option value="3">iedere maand</option>
                    </select>

                    <form id="radiobuttons" name="radiobutton">
                        <input id="rad1" value={radioButton} type="radio" name="check"
                               onChange={(e) => setRadioButton(e.target.value)}
                        />Overdag
                        <input id="rad2" value={radioButton} type="radio" name="check"
                               onChange={(e) => setRadioButton(e.target.value)}
                        />'s Avonds
                    </form>

                </fieldset>

                <fieldset>
                    <legend>Jouw review</legend>

                    <label htmlFor="order-comments">
                        Opmerkingen:
                        <textarea
                            name="comments"
                            id="order-comments"
                            rows="4"
                            cols="40"
                            placeholder="Wat vond je van de bestelling?"
                            value={formComments}
                            onChange={(e) => setFormComments(e.target.value)}
                        >
                        </textarea>
                    </label>

                    <label htmlFor="Terms">
                        <input
                            type="checkbox"
                            name="terms-and-conditions"
                            id="terms-and-conditions"
                            checked={checkedTerms}
                            onChange={() => toggleTerms(!checkedTerms)}
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>

                    <button
                        disabled={!checkedTerms}
                        type="submit">
                        Versturen
                    </button>
                </fieldset>
            </form>
        </>
    );
}

export default App;
