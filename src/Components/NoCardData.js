import React from 'react';
import { IoIosCloseCircle } from "react-icons/io";

/**
 * 
 * @returns A simple react ICON and display text when the LoadList component is provided NO data to display.
 */

const NoCardData = () => {
    return(
        <div className="col-lg-12 text-center p-5">
            <IoIosCloseCircle size={70}/>
            <h1 className="display-4">Sorry, no load data match the filter.</h1>
        </div>
    )
}

export default NoCardData;