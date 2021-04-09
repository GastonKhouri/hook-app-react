import React, { useEffect, useState } from 'react';
import { Message } from './Message';

import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        // console.log('Hola');
    }, []);

    useEffect(() => {
        // console.log('formState cambió');
    }, [formState]);

    useEffect(() => {
        // console.log('email cambió');
    }, [email]);

    const handleInputChange = ({ target }) => {
        setFormState({ ...formState, [target.name]: target.value })
    };

    return (
        <>
            <h1>useEffect</h1>   
            <hr/>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control mb-3"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control mb-3"
                    placeholder="Tu email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { (name === '123') && <Message /> }
        </>
    )
}
