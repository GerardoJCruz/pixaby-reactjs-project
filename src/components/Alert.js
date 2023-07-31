import React from 'react'


function Alert({typeAlert, showAlert}) {
    const alerts =[
        'Please, provide a search term.',
        'no results were found'
    ]
    const alertMessage = typeAlert === "0" ? alerts[0] : alerts[1];


    return (
        <>
            {showAlert && (
                <p className='bg-danger text-white px-4 py-3 rounded m-auto  mt-5 text-center'>
                    <strong className='fw-bold'>Error!: </strong>
                    <span >{alertMessage}</span>
                </p>
            )
            }
        </>
    )
}

export default Alert
