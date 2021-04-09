import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import './refs.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr/>

            { show && <MultipleCustomHooks />}

            <button onClick={ () => { setShow(!show) } }
                    className="btn btn-primary mt-3">
                { show ? 'Ocultar' : 'Mostrar' }
            </button>

        </div>
    )
}
