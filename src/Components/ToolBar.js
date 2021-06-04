import React from 'react';
import SortTools from './SortTools';
import FilterTools from './FilterTools';

/**
 * 
 * @returns The toolbar above the LoadList that contains the SortTool and FilterTools buttons. 
 */

const ToolBar = () => {

    return(
        <div className="container mb-1">
            <div className="row">
                <SortTools/>
                <FilterTools/>
            </div>
        </div>
    )
}

export default ToolBar;