import './Filter.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Filter() {
    return (
        <div className='filter-container'>
            <h1 id='filter-title'> Filter your search </h1>
            <div className='filter-form' >
                <div className='row justify-content-md-center'>
                    <div className='col col-md-3'>
                        <Form.Control placeholder='Product Name' />
                    </div>
                    <div className='col col-md-3'>
                        <Form.Control placeholder='dummy' />
                    </div>
                    <div className='col col-md-auto'>
                        <Button variant='primary'> Filter </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
