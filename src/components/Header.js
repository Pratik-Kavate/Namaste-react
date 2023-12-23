import { useEffect, useState } from 'react';
import {LOGO_URL} from '../utils/constants';
import axios from 'axios';




export const Header = () => {

    const [authState, setAuthState] = useState('Login');


    return(
        <>
            <div className='header'>
                <div className='logo-container'>
                    <img src={LOGO_URL} className='logo'></img>
                </div>
                <div className='nav-container'> 
                    <ul>
                        <li>HOME
                           
                        </li>
                        <li>ABOUT US</li>
                        <li>CONTACT US</li>
                        <li>CART</li>
                        <li style={{'cursor': 'pointer'}} onClick={() => {
                            setAuthState(prevState => prevState === 'Login' ? 'Logout' : 'Login')
                        }}>{authState}</li>
                    </ul>
                </div>
            </div> 

        </>
    )
};

export default Header;

