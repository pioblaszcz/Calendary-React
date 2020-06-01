import React from 'react';

import { Information, AddInformation } from './InformationElement.css';

function InformationElement() {
    return (
        <>
            <Information><h2>Brak wydarzeń</h2></Information>
            <AddInformation><i class="fas fa-plus"></i></AddInformation>
        </>
    )
}

export default InformationElement;