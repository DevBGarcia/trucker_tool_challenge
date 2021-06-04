import React,{useContext} from 'react';
import PickupInfo from './PickupInfo';
import DeliveryInfo from './DeliveryInfo';
import TransportationInfo from './TransportationInfo';
import { TruckerToolsContext } from './Context';

/**
 * 
 * @param {showModalLoadCard()} context
 * @param {index, loadInfo} param0 = props extracted
 * @returns Visual container components to capture important load information to main page. Load Card data fanned out to nested components for display
 */

const LoadCard = ({index, loadInfo}) => {

    const context = useContext(TruckerToolsContext);

    return(
        <div className="col-lg-6">
            <div className="container border border-4 m-1 card-shadow-hover load-card" onClick={()=>context.functions.showModalLoadCard(loadInfo.id)} >
                <span className="badge bg-primary">{index}</span>
                <PickupInfo 
                    originCity = {loadInfo.origin.city}
                    originState = {loadInfo.origin.state}
                    pickupDate = {loadInfo.pickup.date}
                    pickupTime = {loadInfo.pickup.time}
                />
                <DeliveryInfo
                    destinationCity = {loadInfo.destination.city}
                    destinationState = {loadInfo.destination.state}
                    deliveryDate = {loadInfo.delivery.date}
                    deliveryTime = {loadInfo.delivery.time}
                />
                <TransportationInfo
                    truckTypes = {loadInfo.truckTypes}
                    weight = {loadInfo.weight}
                    stops = {loadInfo.numberOfStops}
                />
            </div>
        </div>
    );
}

export default LoadCard;