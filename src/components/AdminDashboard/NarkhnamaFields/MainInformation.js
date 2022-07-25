import React from "react";
import { Form } from "react-bootstrap";
import { TYPES } from "../../../utils/constants";

function MainInformation({ districts, inputs, inputChangeHandler }) {
  return (
    <div>
      {/* types/category */}
      <Form.Group className="mb-3" controlId="type">
        <Form.Label>Select Narkhnama Category</Form.Label>
        <Form.Select onChange={(e) => inputChangeHandler(e)} name="type">
          <option disabled={inputs.type ? true : false}>
            Select Category of Narkhnama
          </option>
          {TYPES.map((type, index) => (
            <option name="type" value={type} key={index}>
              {type}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      {/*  */}
      {/* district */}
      <Form.Group className="mb-3" controlId="district">
        <Form.Label>Select District</Form.Label>
        <Form.Select onChange={(e) => inputChangeHandler(e)} name="district">
          <option disabled={inputs.district ? true : false}>
            Select District of Narkhnama
          </option>
          {districts
            ? districts.map((district) => (
                <option name="district" value={district._id} key={district._id}>
                  {district.title}
                </option>
              ))
            : null}
        </Form.Select>
      </Form.Group>
    </div>
  );
}

export default MainInformation;
