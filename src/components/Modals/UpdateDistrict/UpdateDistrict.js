import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function UpdateDistrict({ editShow, setEditShow, updateDistrict }) {
  return (
    <>
      {" "}
      <Modal
        show={editShow.show}
        onHide={() =>
          setEditShow({
            ...editShow,
            show: false,
          })
        }
      >
        <Modal.Header closeButton>
          <Modal.Title>Updating District</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Updated Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Update Title"
              name="title"
              value={editShow.title}
              onChange={(e) =>
                setEditShow({
                  ...editShow,
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
              setEditShow({
                ...editShow,
                show: false,
              })
            }
          >
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => updateDistrict(editShow.slug, editShow.title)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateDistrict;
