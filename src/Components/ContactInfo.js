import React from 'react';
import DataTag from './DataTag';

/**
 * 
 * @param { companyName, email, phone, name } props 
 * @returns Description list tag for the following props values onto the ModalLoadCard.
 */

const ContactInfo = (props) => {

    const formatPhoneNumber = (value) => {
        if (!value) return value;
        return `(${value.slice(0, 3)}) ${value.slice(3,6)}-${value.slice(6, 10)}`;
      }

    return(
        <dl className="row border-bottom">
            <dt className="col-sm-4 text-md-end align-self-center pb-3 section-label">Contact</dt>
            <dd className="col-sm-8 text-md-center">
                <span className="data-label">Company Name:</span> <DataTag>{props.companyName}</DataTag>
                <br/> 
                <span className="data-label">Email:</span> <DataTag>{props.email}</DataTag>
                <br/> 
                <span className="data-label">Phone:</span> <DataTag>{formatPhoneNumber(props.phone)}</DataTag>
                <br/> 
                <span className="data-label">Name:</span> <DataTag>{props.name}</DataTag>
            </dd>
        </dl>
    )    
}

export default ContactInfo;