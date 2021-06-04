import React from 'react';

/**
 * 
 * @param { children } param0 
 * @returns Wrapper component for every json data entry to add logic if the data is empty. 
 *          Displays 'Undefined' to the user if the data is invalid.
 */

const DataTag = ({children}) => {

    let dataEntry = children
    if(children === "" || children === null){
        dataEntry = <span className="text-muted">Undefined</span>
    }

    return(dataEntry);

}

export default DataTag;