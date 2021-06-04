import React,{useContext} from 'react';
import {TruckerToolsContext} from './Context';

/**
 * 
 * @param { functions.updateFilterTruckOption(value), functions.filterSubmit() } context
 * @returns Tool bar component to handle filters via dropdown sleect menue
 */

const FilterTools = () => {

    const context = useContext(TruckerToolsContext);

    const onChange = (value) => {
        context.functions.updateFilterTruckOption(value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        context.functions.filterSubmit();
    } 

    return(
        <div className="col-lg-6 ">
            <form onSubmit={ (event) => handleSubmit(event) }>
                <label><h6>Truck Filter Options</h6></label>
                <div className="input-group ms-1">
                    <select className="form-select" id="truckfilterOptions" onChange={event=>onChange(event.target.value)}>
                        <option value="Unfiltered">No Filters</option>
                        <option value="Van">Van</option>
                        <option value="Flatbed">Flatbed</option>
                        <option value="Flats w/Tarps">Flats w/Tarps</option>
                        <option value="Flatbed w/Tarps">Flatbed w/Tarps</option>
                        <option value="Step Deck">Step Deck</option>
                        <option value="Reefer">Reefer</option>
                        <option value="Undefined">Undefined</option>
                    </select>
                    <button type="submit" className="btn btn-primary px-5">Submit</button>
                </div>
            </form>                  
        </div>
    )
}


export default FilterTools;