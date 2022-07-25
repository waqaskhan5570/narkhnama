import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function AddDistrict({ addShow, setAddShow, addDistrict }) {
  return (
    <>
      {" "}
      <Modal
        show={addShow.show}
        onHide={() =>
          setAddShow({
            ...addShow,
            show: false,
          })
        }
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New District</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Add District Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add Title"
              name="title"
              value={addShow.title}
              onChange={(e) =>
                setAddShow({
                  ...addShow,
                  title: e.target.value,
                })
              }
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() =>
              setAddShow({
                ...addShow,
                show: false,
              })
            }
          >
            Close
          </Button>
          <Button variant="danger" onClick={() => addDistrict(addShow.title)}>
            Add District
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddDistrict;
