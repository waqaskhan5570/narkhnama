import React, { useState } from "react";
import "./ComplaintForm.css";
import { Button, Form } from "react-bootstrap";

function ComplaintForm(props) {
  const { handleSubmit, inputChangeHandler } = props;
  const [count, setCount] = useState("0");
  const [descCount, setDescCount] = useState("0");

  const onSubjectChange = (e) => {
    if (e.target.name === "subject") {
      setCount(e.target.value.length);
      inputChangeHandler(e);
    } else if (e.target.name === "description") {
      setDescCount(e.target.value.length);
      inputChangeHandler(e);
    }
  };

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
                onChange={(e) => onSubjectChange(e)}
                required
                name="subject"
                maxLength={40}
              />
              <Form.Text>{count}/40 Characters Left</Form.Text>
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
            onChange={(e) => onSubjectChange(e)}
            required
            name="description"
            maxLength={300}
          />
          <Form.Text>{descCount}/300 Characters Left</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Retailer Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Shop  #, Street #, Area , City"
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
