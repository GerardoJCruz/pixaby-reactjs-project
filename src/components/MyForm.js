import React, { useState, useEffect } from 'react'
import { ConsultApi } from '../utilities/api';
import Alert from './Alert';
import ImageGrid from './ImageGrid';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Pager from './Pager';

  // Consult Api through the class api and its method
export const fetchData = async (searchTerm, setPage, setImages, setTotalPages) => {
    const api = new ConsultApi(searchTerm, setPage);
    const data = await api.consult();

    setImages(data.hits);
    setTotalPages(Math.ceil((data.totalHits) / 20));
}

function MyForm() {
    const [searchTerm, setSearchTerm] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [images, setImages] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Evaluate the searchTerm condition 
        if(searchTerm.trim() === ''){
            // set and show alert if the input information is empty
            setShowAlert(true);
            return;
        }
        setShowAlert(false);

        fetchData(searchTerm, 1, setImages, setTotalPages);
    }

  

    useEffect(() => {
        let timer;
        if (showAlert !== false) {
            // Show the alert and set a timer to hide it after 5 seconds 

            timer = setTimeout(() => {
                setShowAlert(false);
            }, 5000);

            // clean up the timer to get it ready for re-render
            return () => clearTimeout(timer);
        }
    }, [showAlert]);

    return (
        <>
            <Form onSubmit={handleSubmit} className='form w-50 m-auto'>
                <Form.Label htmlFor="searching" className='form__title text-white text-uppercase fs-5 fw-bold mb-3'>Type what you want to search for.</Form.Label>
                <Form.Control
                    id='searching'
                    name='searching'
                    type='text'
                    className='form__input w-100 border rounded p-2 mb-3'
                    placeholder='What you want to search. Example: Coffe or Cars'
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button
                    type='submit'
                    className='form__button rounded w-100 p-1 fs-4 border-0 text-black fw-bold'
                >
                    Search Images 
                </Button>

                <Alert className="mt-5" typeAlert='0' showAlert={showAlert} />
            </Form>
            {images.length > 0 && <ImageGrid images={images}/>}
            {images.length > 0 && <Pager 
                                    totalPages={totalPages}
                                    searchTerm={searchTerm}
                                    setImages={setImages}
                                    setTotalPages={setTotalPages}
                                />}
        </>
    )
}

export default MyForm

