import Button from "../button/Button";

const Counters = ({counter, setCounter, fruitName}) => {
    function addOne() {
        setCounter(counter + 1)
    }

    function minusOne() {
        setCounter(counter - 1)
    }


    return (
        <fieldset>
            <div>
                {fruitName}
                <Button
                    type="button"
                    buttonDisabled={counter === 0}
                    clickHandler={minusOne}
                > -
                </Button>
                {counter}
                <Button
                    type="button"
                    buttonDisabled={false}
                    clickHandler={addOne}
                > +
                </Button>
            </div>
        </fieldset>
    );
};

export default Counters;