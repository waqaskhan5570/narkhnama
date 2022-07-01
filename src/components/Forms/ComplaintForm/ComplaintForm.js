import React from "react";
import "./ComplaintForm.css";
import { Button, Form } from "react-bootstrap";

function ComplaintForm(props) {
  const { handleSubmit, inputChangeHandler } = props;
  return (
    <div className="complaint-form">
      <Form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <Form.Group className="mb-3" controlId="subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="input"
                placeholder="Complaint Subject"
                onChange={inputChangeHandler}
                required
                name="subject"
              />
            </Form.Group>
          </div>
          <div className="col">
            <Form.Group className="mb-3" controlId="retailer">
              <Form.Label>Retailer Name</Form.Label>
              <Form.Control
                type="input"
                placeholder="Name of Retailer or Shop"
                onChange={inputChangeHandler}
                required
                name="retailer"
              />
            </Form.Group>
          </div>
        </div>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Complaint Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Complaint Description"
            onChange={inputChangeHandler}
            required
            name="description"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Retailer Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Complaint Description"
            onChange={inputChangeHandler}
            required
            name="location"
          />
        </Form.Group>
        <Button type="submit" variant="warning">
          File Complaint
        </Button>
      </Form>
    </div>
  );
}

export default ComplaintForm;
