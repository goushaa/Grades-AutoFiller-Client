import React from 'react'
import { Link } from 'react-router-dom';
import '../CSS/Home.css';

function Home() {
    return (
        <div>
            <div id="title">Project</div>
            <div id="module1" className="module">
                <Link to="/grade">
                    <button className="module-button">Module 1</button>
                </Link>
            </div>
            <div id="module2" className="module">
                <Link to="/bubble">
                    <button className="module-button">Module 2</button>
                </Link>

            </div>

        </div>
    )
}

export default Home