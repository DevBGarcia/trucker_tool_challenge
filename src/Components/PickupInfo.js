import React from 'react';
import DataTag from './DataTag';

/**
 * 
 * @param {originCity, originState, pickupDate, pickupTime} props 
 * @returns Description list tag for the following props values onto the LoadCard & ModalLoadCard.
 */

const PickupInfo = (props) => {

    return(
        <dl className="row mt-1 border-bottom">
            <dt className="col-sm-4 text-md-end align-self-center pb-3 section-label">Pickup</dt>
            <dd className="col-sm-8 text-md-center">
                <span className="data-label">Origin:</span> <DataTag>{props.originCity}</DataTag>, <DataTag>{props.originState}</DataTag>
                <br/> 
                <span className="data-label">Date:</span> <DataTag>{props.pickupDate}</DataTag>, <DataTag>{props.pickupTime}</DataTag>
            </dd>
        </dl>
    )
};

export default PickupInfo;