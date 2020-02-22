import React from 'react';
import { Link } from 'react-router-dom';


const Starship = (props) => {
    if(props.name !== undefined){ 
    return(
        <div className="show-ship">
            <h3>NAME: {props.name}</h3>
            <h4>MODEL: {props.model}</h4>
            <Link className="return" to='/'>Return to Starship List</Link>
        </div>

)} else {
    return(
    <div>LOADING...</div>
    )}
}

export default Starship;
