import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const heading = React.createElement('h1', {className:"heading"}, 'Hello World From React');


const AppComponent = () => {
    return(
        <>
            <Header/>
            <Body/>
        </>     
    )
}    


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppComponent/>);
