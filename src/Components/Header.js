import React from 'react';
import { SiGithub } from "react-icons/si";

/**
 * 
 * @returns Simple header tag for title and github link to the project
 */

const Header = () => {

    return(
        <div className="container bg-light">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
                <div className="d-flex  mb-3 mb-md-0 me-md-auto text-dark">
                    <span className="display-6">Trucker Tools Coding Challenge</span>
                </div>
                <ul className="nav">
                    <li className="nav-item"><a href="https://github.com/DevBGarcia" target="_none" className="nav-link"><SiGithub size={30}/></a></li>
                </ul>
            </header>
        </div>
    )
}

export default Header;
