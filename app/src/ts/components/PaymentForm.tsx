import React from "react";
import { Form } from "react-bootstrap";

const PaymentForm = () =>{
    return(
        <>
            <Form>
                <Form.Group controlId="form.hasToPay">
                    <Form.Label>Net à payer</Form.Label>
                    <Form.Control type="number" min={0} required />
                </Form.Group>
            </Form>
        </>
    )
}

export default PaymentForm;