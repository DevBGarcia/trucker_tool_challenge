import React, {useContext} from 'react';
import { Modal } from 'react-bootstrap';
import {TruckerToolsContext} from './Context';
import PickupInfo from './PickupInfo';
import DeliveryInfo from './DeliveryInfo';
import TransportationInfo from './TransportationInfo';
import AdditionalInfo from './AdditionalInfo';
import ContactInfo from './ContactInfo';
import CommentInfo from './CommentInfo';

/**
 * @param {modalCardData, isModalLoadCardActive, functions.closeModalLoadCard()} context
 * @returns The popup, Modal Load Card when a LoadCard component onClick event is activated
 *          The modalCardData contains everything of the json load entry 
 *          based off of a given load Key ID which is passed to the context 
 *          via onClick event. 
 */

const ModalLoadCard = () => {

    const context = useContext(TruckerToolsContext);

    return(
        <Modal show={context.isModalLoadCardActive} onHide={context.functions.closeModalLoadCard} size="lg" centered>
            <div className="container border-2">
                <button type="button" className="btn btn-primary btn-lg mt-2 px-5" onClick={context.functions.closeModalLoadCard}>Return</button>
                <h3 className="text-center mt-1 pb-2">Load ID: {context.modalCardData.loadId}</h3>
                <PickupInfo 
                    originCity = {context.modalCardData.origin.city}
                    originState = {context.modalCardData.origin.state}
                    pickupDate = {context.modalCardData.pickup.date}
                    pickupTime = {context.modalCardData.pickup.time}
                />
                <DeliveryInfo
                    destinationCity = {context.modalCardData.destination.city}
                    destinationState = {context.modalCardData.destination.state}
                    deliveryDate = {context.modalCardData.delivery.date}
                    deliveryTime = {context.modalCardData.delivery.time}
                />
                <TransportationInfo
                    truckTypes = {context.modalCardData.truckTypes}
                    weight = {context.modalCardData.weight}
                    stops = {context.modalCardData.numberOfStops}
                />
                <AdditionalInfo
                    deadHead = {context.modalCardData.deadHead}
                    length = {context.modalCardData.length}
                    reloads = {context.modalCardData.reloads}
                    quantity = {context.modalCardData.quantity}
                    temp_min = {context.modalCardData.temp_min}
                    temp_max = {context.modalCardData.temp_max}
                    targetPay = {context.modalCardData.targetPay}
                />
                <ContactInfo
                    companyName = {context.modalCardData.companyName}
                    email = {context.modalCardData.contact.email}
                    phone = {context.modalCardData.contact.phone}
                    name = {context.modalCardData.contact.name}
                />
                <CommentInfo
                    comment = {context.modalCardData.comment}
                />
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary btn-lg mb-2 px-5" type="button">Book Now</button>
                </div>
            </div>
        </Modal>
    );   
}

export default ModalLoadCard;