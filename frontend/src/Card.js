import React from 'react';

import { Card } from 'react-bootstrap';

function CardComponent({ data }) {

    return (
        <div className="row">
            {
                data.map((item,key) => (
                    <div className="col-md-3" style={{ marginTop: '1rem', marginLeft: '1rem', marginBottom: '1rem' }}>
                        <Card key={key} style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{item.user.name}</Card.Title>
                                <Card.Text>{item.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))
            }
        </div>
    );

}

export default CardComponent;