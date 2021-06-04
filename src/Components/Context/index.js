import React, {useEffect, useState} from 'react';
import jsonData from '../Data/tt_coding_challenge_data.json';
export const TruckerToolsContext = React.createContext();

/**
 *  Globalized functions and state variables that hosts the logic for the application. 
 */

export const Provider = (props) => {

    /* Card Data Format - Template for modal card*/
    let cardDataTemplate = 
    {
        "id": 12533798,
        "loadId": 12533798,
        "origin": {
            "city": "FREEDOM",
            "state": "OK"
        },
        "pickup": {
            "date": "05/24/2021",
            "time": "11:00 AM",
            "dateTime": "05/24/2021 11:00 AM"
        },
        "delivery": {
            "date": "05/25/2021",
            "time": "10:00 AM",
            "dateTime": "05/25/2021 10:00 AM"
        },
        "numberOfStops": 2,
        "destination": {
            "city": "WILMER",
            "state": "TX"
        },
        "length": "60",
        "quantity": "",
        "weight": "44500",
        "truckTypes": "Van or Flatbed",
        "contact": {
            "name": null,
            "phone": "8667717013",
            "email": "jpollak@englandlogistics.com"
        },
        "companyName": "England Logistics, Inc.",
        "deadHead": 189,
        "targetPay": "900",
        "reloads": 4,
        "comment": "",
        "temp_min": "",
        "temp_max": ""
    }
    /* React Application State Data*/
    const [originalLoadListData, setOriginalLoadListData] = useState([]);
    const [currentLoadListData, setCurrentLoadListData] = useState([]);

    const [modalCardData, setModalCardData] = useState(cardDataTemplate);
    const [isModalLoadCardActive, setIsModalLoadCardActive] = useState(false);

    const [isDateSortActive, setIsDateSortActive] = useState(false);
    const [isWeightSortActive, setIsWeightSortActive] = useState(false);
    const [filterTruckOption, setFilterTruckOption] = useState("Unfiltered");

    /* React Life Cycle Use Effects - On load we set the state data */
    // CurrentLoadListData is what gets displayed. OriginalLoadListData is saved off for filter options to avoid over-writing data.
    useEffect( () => {
        setOriginalLoadListData(jsonData.loadList);
        setCurrentLoadListData(jsonData.loadList); 
    }, []);

    /* React Application Functions */
    const handleCloseModalLoadCard = () => setIsModalLoadCardActive(false);

    const handleShowModalLoadCard = (id) => {
        setModalCardData(currentLoadListData.find( loadCard => loadCard.id === id ));
        setIsModalLoadCardActive(true);
    }

    const dateSortFunction = (dataArray) => {
        return dataArray.sort( (a,b) => {
            return new Date(a.pickup.dateTime) - new Date(b.pickup.dateTime);
        })
    }

    const weightSortFunction = (dataArray) => {
        return dataArray.sort( (a,b) => {
            return (a.weight) - (b.weight);
        })
    }

    const handleUpdateFilterTruckOption = (value) =>{  
        setFilterTruckOption(value);  
    }    

    const truckFilterFunction = (dataArray) => {
        return dataArray.filter( (a) => {
            if(a.truckTypes.includes(filterTruckOption)){
                return a;
            }
        })
    }

    const handleDateSort = () => {
        const dataCopy = [...currentLoadListData];
        let newData = dateSortFunction(dataCopy);
        setCurrentLoadListData( newData );
        setIsDateSortActive(true);
        setIsWeightSortActive(false);     
    }

    const handleWeightSort = () => {
        const dataCopy = [...currentLoadListData];
        let newData = weightSortFunction(dataCopy);
        setCurrentLoadListData( newData );
        setIsWeightSortActive(true);
        setIsDateSortActive(false);
    }

    const handleFilterSubmit = () => {
        const dataCopy = [...originalLoadListData];
        let newData = dataCopy;
        if(filterTruckOption !== 'Unfiltered'){
            newData = truckFilterFunction(dataCopy);
        }
        if(isDateSortActive === true){
            newData = dateSortFunction(newData);
        }else if(isWeightSortActive === true){
            newData = weightSortFunction(newData);
        }
        setCurrentLoadListData( newData );
    }

    /* --------------------------------------------------*/
    return (
        <TruckerToolsContext.Provider value={{
            currentLoadListData,
            isModalLoadCardActive,
            modalCardData,
            functions: {
                closeModalLoadCard: handleCloseModalLoadCard,
                showModalLoadCard: handleShowModalLoadCard,
                dateSort: handleDateSort,
                weightSort: handleWeightSort,
                updateFilterTruckOption: handleUpdateFilterTruckOption,
                filterSubmit: handleFilterSubmit
            }
        }}>
            {props.children}
        </TruckerToolsContext.Provider>
    );
}