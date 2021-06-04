import React, {useContext} from 'react';
import {TruckerToolsContext} from './Context';
import LoadCard from './LoadCard';
import NoCardData from './NoCardData';

/**
 * @param { currentLoadListData } context
 * @returns A list of LoadCard Components to display, OR the NoCardData component when there is no load data to display
 */

const LoadList = () => {
    
    const context = useContext(TruckerToolsContext);
    
    let loadListCards;
    if(context.currentLoadListData.length !== 0){
        loadListCards = context.currentLoadListData.map( (loadCardData, index) => 
            <LoadCard 
                index={index + 1} 
                key={loadCardData.id} 
                loadInfo={loadCardData}
            />);
    } else {
        loadListCards = <NoCardData/>
    }
    

    return(
        
        <div className="container">
            <div className="row">
                {loadListCards}
            </div>
        </div>
        
        );
}

export default LoadList;