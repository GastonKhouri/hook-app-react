import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);

    const data = {
        id: 1234,
        nombre: 'Gaston',
        email: 'gaston@gmail.com'
    }

    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>
            <button className="btn btn-primary"
                    onClick={ () => { setUser(data) } }>
                Login
            </button>
        </div>
    )
}
