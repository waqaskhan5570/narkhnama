import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

function AuthForm(props) {
  const { data, handleSubmit, inputChangeHandler, btnText, loading } = props;
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        {data.fields.map((field) => (
          <Form.Group className="mb-3" controlId={field.name} key={field.id}>
            <Form.Label>{field.label}</Form.Label>
            <Form.Control
              type={field.input_type}
              placeholder={field.placeholder}
              onChange={(e) => inputChangeHandler(e)}
              required={field.required}
              name={field.name}
              maxLength={field.max}
            />
            {field.input_text ? (
              <Form.Text className="text-muted">{field.input_text}</Form.Text>
            ) : null}
          </Form.Group>
        ))}

        <Button variant="warning" type="submit" disabled={loading}>
          {btnText}
        </Button>
      </Form>
    </div>
  );
}

AuthForm.propTypes = {
  data: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  inputChangeHandler: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default AuthForm;
