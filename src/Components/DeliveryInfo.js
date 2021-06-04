import React from 'react';
import DataTag from './DataTag';

/**
 * 
 * @param { destinationCity, destinationState, deliveryDate, deliveryTime } props 
 * @returns Description list tag for the following props values onto the LoadCard & ModalLoadCard.
 */

const DeliveryInfo = (props) => {

    return(
        <dl className="row border-bottom">
            <dt className="col-sm-4 text-md-end align-self-center pb-3 section-label">Delivery</dt>
            <dd className="col-sm-8 text-md-center">
                <span className="data-label">Destination</span>: <DataTag>{props.destinationCity}</DataTag>, <DataTag>{props.destinationState}</DataTag>
                <br/> 
                <span className="data-label">Date:</span> <DataTag>{props.deliveryDate}</DataTag>, <DataTag>{props.deliveryTime}</DataTag>
            </dd>
        </dl>
    )
};

export default DeliveryInfo;