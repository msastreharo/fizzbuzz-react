import {useEffect, useState} from "react";

function FizzBuzz() {
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState('')

    useEffect(function() {
        return () => {
            if (counter === 0) {
                setMessage("Clica el botón para empezar")
                return;
            }

            if (counter % 5 === 0 && counter % 3 === 0) {
                setMessage("Fizzbuzz!")
            } else if (counter % 5 === 0) {
                setMessage("Buzz!")
            } else if (counter % 3 === 0) {
                setMessage("Fizz!")
            } else {
                setMessage(counter)
            }
        };
    }, [counter]);


    function increaseCounter() {
        setCounter(counter + 1);
    }


    return (
        <div>
            <h1>Fizzbuzz</h1>
            <button onClick={increaseCounter}>Clica aquí</button>
            <h2>{message}</h2>
        </div>
    )

}

export default FizzBuzz