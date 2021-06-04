import React from 'react';
import DataTag from './DataTag';

/**
 * 
 * @param {deadHead, length, reloads, quantity, temp_min, temp_max, targetPay} props 
 * @returns Description list tag for the following props values onto the ModalLoadCard.
 */

const AdditionalInfo = (props) => {

    return(
        <dl className="row border-bottom">
            <dt className="col-sm-4 text-md-end align-self-center pb-3 section-label">Additional Info</dt>
            <dd className="col-sm-8 text-md-center">
                <span className="data-label">Dead Head(mi):</span> <DataTag>{props.deadHead}</DataTag>
                <br/> 
                <span className="data-label">Length(mi):</span> <DataTag>{props.length}</DataTag>
                <br/> 
                <span className="data-label">Reloads:</span> <DataTag>{props.reloads}</DataTag>
                <br/> 
                <span className="data-label">Quantity:</span> <DataTag>{props.quantity}</DataTag>
                <br/> 
                <span className="data-label">Min Temp(F):</span> <DataTag>{props.temp_min}</DataTag>
                <br/> 
                <span className="data-label">Max Temp(F):</span> <DataTag>{props.temp_max}</DataTag>
                <br/> 
                <span className="data-label">Target Pay(USD):</span> <DataTag>{props.targetPay}</DataTag>
            </dd>
        </dl>
    )
};

export default AdditionalInfo;