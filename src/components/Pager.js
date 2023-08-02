import React, { useState } from 'react'
import { fetchData } from './MyForm';

function Pager({totalPages, searchTerm, setImages, setTotalPages}) {
    const pages = [];   
    const [selectedButton, setSelectedButton] = useState(1);

    // let pageNumber = 0;
    // Handle Page link click
    const handlePageClick = (event) =>{
        // Check that the click was made on an <button> tag
        if(event.target.tagName === 'BUTTON'){
            //Get the page number from the button
            const pageNumber = parseInt(event.target.textContent);
            
            //Set the selected button
            setSelectedButton(pageNumber);
            
            // Consult the api
            fetchData(searchTerm, pageNumber, setImages, setTotalPages);
        }

    };

    for(let i = 0; i < totalPages ; i++){
        pages.push(<button key={i+1}  className={selectedButton === i+1? 'highlight' : ''}>{i+1}</button>)
    }
    
    return (
        <div id='pager' className='pager list-unstyled d-flex gap-3 justify-content-center my-5 flex-wrap' onClick={handlePageClick}>
            {pages}
        </div>
    )
}

export default Pager

