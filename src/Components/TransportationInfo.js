import React from 'react';
import DataTag from './DataTag';

/**
 * 
 * @param {truckTypes, weight, stops} props 
 * @returns Description list tag for the following props values onto the LoadCard & ModalLoadCard.
 */

const TransportationInfo = (props) => {

    return(
        <dl className="row border-bottom">
            <dt className="col-sm-4 text-md-end align-self-center pb-3 section-label">Transportation</dt>
            <dd className="col-sm-8 text-md-center">
                <span className="data-label">Truck Type(s):</span> <DataTag>{props.truckTypes}</DataTag> 
                <br/>
                <span className="data-label">Weight(lbs):</span> <DataTag>{props.weight}</DataTag> 
                <br/> 
                <span className="data-label">Interim Stops:</span> <DataTag>{props.stops - 2}</DataTag>
            </dd>
        </dl>
    )
};

export default TransportationInfo;