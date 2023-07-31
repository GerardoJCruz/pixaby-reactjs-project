import React from 'react'

function PagerContainer({totalPages, currentPage, setCurrentPage, fetchData}) {
    const pages = [];
    // let pageNumber = 0;
    // Handle Page link click
    const handlePageClick = (pageNumber) =>{
        // Update the currentPage state
        setCurrentPage(pageNumber); 
        // Consult the api
        fetchData();
    };


    for(let i = 0; i < totalPages ; i++){
        pages.push(<button key={i+1} onClick={()=>{handlePageClick(i+1)}} className='text-decoration-none'>{i+1}</button>)
    }
    
    return (
        <div className='pager list-unstyled d-flex gap-3 justify-content-center my-5 flex-wrap'>
            {pages}
        </div>
    )
}

export default PagerContainer

