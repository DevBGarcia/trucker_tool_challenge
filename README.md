--------------------------------------------------------------------------------------------------
High up overview of React Component Tree

    <Provider> 
        <App>
            <Header/>
            <ToolBar>
                <SortTools/>
                <FilterTools/>
            </ToolBar>
            <LoadList>
                ...
                <LoadCard(s)>
                    <PickupInfo/>
                    <DeliveryInfo/>
                    <TransportationInfo/>  
                </LoadCard(s)>
                ... 
                {OR}
                <NoCardData/>
            </LoadList>
            <ModalLoadCard>
                <Modal>
                    <PickupInfo/>
                    <DeliveryInfo/>
                    <TransportationInfo/>
                    <AdditionalInfo/>
                    <ContactInfo/>
                    <CommentInfo/>
                </Modal>
            </ModalLoadCard>
        </App>
    </Provider>

--------------------------------------------------------------------------------------------------
Environment

    I used the Context API along with Hooks to manage state globally from a single file. 
    In most cases, functions and state variables are defined and referenced from the 
    Context API file (.\src\Components\Context\index.js) Via hooks. It wraps the entire application
    with the <Provider> tags.  

    I relied heavily on vanilla bootstrap 5 for styling and dynamic structuring. The modal pop-up 
    card is the only location I used React-bootstrap :( I should've started using react-bootstrap, material-ui,
    or another react-based styling library from  the beginning to make the JSX a bit more traceable. 
    The React Component Tree above is a high-up view of the components but there are column/row container 
    structures nested between. The primary reason behind using bootstrap was to ensure the layout would 
    display well across multiple media sizes and platforms.

    Visual Studio code was the text editor of choice, and I used create-react-app to start off.
--------------------------------------------------------------------------------------------------   

Trucker Tools Coding Challenge

The Problem:
Our users are drivers that are trying to sift through a long list of loads to find a great
match. We want to make that process as smooth and easy as possible. Given a list of
loads in JSON format, develop a simple application that displays an easily digestible
list of loads. The application should provide tools to make the information more
consumable; such as sorts and filters.

Requirements:
The requirements below are not intended to suggest any particular user interface.

    1. Upon loading the application, a list of load items should be displayed to the user.
        
            In the src\Components\Context\index.js file, I used the useEffect() hook to set TWO sets of loadList 
        arrays (originalLoadListData, currentLoadListData) using the json file provided. The json file is hosted
        in a local directory at src\Components\Data\tt_coding_challenge_data.json. The currentLoadListData 
        is what gets gets updated and loaded on the webpage when sorts or filters are activated. Whenever a 
        filter is applied, the originalLoadListData is referenced in order to re-render the page to avoid 
        over-writing the origianl list. 

    2. The initial display for each load item should only include the most important
    information listed below.
        a. Origin city
        b. Origin state
        c. Pickup date and time
        d. Destination city
        e. Destination state
        f. Delivery date and time
        g. Truck type
        h. Weight - unit is “lbs”
        i. Number of interim stops (numberOfStops - 2, excluding pickup and
        destination)

            The initial data is deployed on the <LoadCard> component. The parent component <LoadList> takes in the 
        <currentLoadListData> from Context, and creates every loadcard component via the array map function. 
        Each <LoadCard> component has the load information past down to it via props.  I decided to break down the 
        data into sections based on the json data: <PickupInfo>, <DeliveryInfo>, <TransportationInfo>, <AdditionalInfo>,
        <ContactInfo>, & <CommentInfo>. The <LoadCard> component only consists of the first three: Pickup, Delivery,
        and Transportation; which encapsulates the a. to i. data above. I figured I would be able to re-use these components
        in the popup card for step 3.  

    3. Each load item in the list should be clickable - once clicked, the user should be
    able to view additional details about the load and be presented with a back
    button to return to the original list. All additional information found on each
    load object in the JSON should be displayed after clicking an individual load
    item. You do not need to display value for key “id”.

            I used the react-bootstrap component <Modal>, to create the <ModalLoadCard> that pops up on the onClick event of 
        a <LoadList> component. I passed the Key ID back up to the context API which handles the state and data that 
        the ModalLoadCard will display. The ModalLoadCard is essentially an extension of the <LoadCard> component, just with 
        some extra data and buttons to display the rest of the load information.  

    4. Please provide some sort options for the list of loads. We would like the user
    to be able to sort the loads by pickup date and time (sort by the combined date
    and time - not separate sorts), or by weight.

            To sort the data by either Pickup Date or Weight, I utilized a radio style toggle button that both sets a boolean value
        to it's respective sort type and executes a sort function using the Array.Sort function. I kept track of the state of which
        sort was last applied, so we can re-sort whenever a filter is applied to the list. 

    5. Please provide a filter option for the list of loads. The user should be able to
    filter the list of loads by truck type. You may have an “Undefined” category if
    truck type does not have a valid value on the load object. Note that if the entire
    list of loads is filtered out, you may want to display some message on the
    screen to the user.

            For the truck filter options, I used a drop-down list and submit button to alter the active list of data, based on 
        the original loadList that the application was given. The Array.filter function was valuable in filtering out the list
        of load data, but I wanted to make sure to use the original data set for each filter to avoid erasing the currentLoadListData.
        Upon a filter activation, I checked for the last sort functions that were applied and re-sort the data to match the state.
                There is a dropdown selection of 'Undefined', this filters loads with no truck type defined. Since there are no loads with undefined truck types, this filters out all loads and displays a special component showing 
        NO load data is rendered.

    6. The sort and filter options should be accessible from the load list view

            These components are placed at the top of the <LoadList> component, within ToolBar <ToolBar> 

-------------------------------------------------------------------------------------------------- 
