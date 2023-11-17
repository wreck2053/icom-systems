import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function CreateCards(data) {
    let cards_per_row = 4;
    let cols = [];
    let cards = [];
    
    for(let prod_type in data){

        // push heading of prod_type
        cards.push( 
            <Row>
                <Col xs={12}>
                    <h3> {prod_type} </h3>
                </Col>
            </Row>
        );
        cards.push( <br />);

        for(let idx in data[prod_type]['Product Name']){
            let prod_name = data[prod_type]['Product Name'][idx];

            // Push row of cards
            if(idx % cards_per_row === 0){
                cards.push(
                    <Row>
                        {cols}
                    </Row>
                );
                cards.push( <br /> );
                cols = [];
            }
            
            // Push card into column
            cols.push(
                <Col xs={12/cards_per_row} className='d-flex'>
                    <Card style={{width: '18rem'}} className='flex-fill'>
                        <Card.Body>
                            <Card.Title> {prod_name} </Card.Title>
                            <Link to={'/product/' + prod_type + '/id/' + idx}>
                                <Button variant='primary'> View Product </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            );
        }

        // Push last row of cards of prod_type
        cards.push(
            <Row>
                {cols}
            </Row>
        );
        cards.push( <br /> );
        cols = [];

        cards.push( <> <br /> <br /> </> );
    }

    return cards;
}

export default CreateCards;