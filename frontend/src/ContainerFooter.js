import React from 'react';

import { Form, Button } from 'react-bootstrap';

function FooterContainerComponent({ message, onChangeMessage, save }) {

    return (
        <div style={{ position: 'absolute', bottom: 0, width: '98%', backgroundColor: '#FAFAFA' }}>
            <hr style={{ width: '100%', marginLeft: 0 }} />
            <Form>
                <Form.Group>
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control type="text" placeholder="Digite aqui a mensagem" value={message ?? ''} onChange={evt => onChangeMessage(evt)} />
                </Form.Group>
                <Button variant="primary" type="button" style={{ marginBottom: '1rem' }} onClick={() => save()}>Enviar</Button>
            </Form>
        </div>
    );

}

export default FooterContainerComponent;