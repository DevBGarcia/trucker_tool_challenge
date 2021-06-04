import React,{useContext} from 'react';
import {TruckerToolsContext} from './Context';

/**
 * 
 * @param { functions.dateSort(value), functions.weightSort() } context
 * @returns Tool bar component to handle filters via dropdown sleect menue
 */

const SortTools = () => {

    const context = useContext(TruckerToolsContext);

    return(
        <div className="col-lg-6">
            <label><h6>Sorting Options</h6></label><br/>
            <div className="btn-group ms-1">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"/>
                <label className="btn btn-outline-primary " htmlFor="btnradio1" onClick={()=>context.functions.dateSort()}>Pickup Date (Chronological)</label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio2" onClick={()=>context.functions.weightSort()}>Load Weight (Low-to-High)</label>
            </div>
        </div>
    )
}
export default SortTools;