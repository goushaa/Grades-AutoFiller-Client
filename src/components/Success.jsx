import React from 'react'
import { Link } from 'react-router-dom';
import '../CSS/Success.css';

function Success() {
    return (
        <div>
            <div id="title">Your Program Succesfully Finished ... Check the Folders for outputs</div>
            <div id="successDiv">
                <Link to="/home">
                    <button className="module-button">Return</button>
                </Link>
            </div>
        </div>
    )
}

export default Success