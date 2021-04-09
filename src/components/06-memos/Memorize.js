import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import './custom.css';

export const Memorize = () => {

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Counter: <Small value={ counter } /></h1>
            <hr/>

            <button onClick={ increment }
                    className="btn btn-primary">
                +1
            </button>

            <button onClick={ () => { setShow(!show) } }
                    className="btn btn-outline-primary ml-3">
                { show ? 'Ocultar' : 'Mostrar' }
            </button>
        </div>
    )
}
