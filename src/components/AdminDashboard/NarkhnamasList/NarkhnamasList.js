import React from "react";
import { Card } from "react-bootstrap";
import { createDateAndTimeFromISO } from "../../../utils/helpers";

function NarkhnamasList({ narkhnamas }) {
  console.log(narkhnamas);
  return (
    <div className="row">
      {narkhnamas
        ? narkhnamas.map((narkhnama) => (
            <div className="col mb-3" key={narkhnama._id}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className="text-capitalize">
                    {narkhnama.type}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {createDateAndTimeFromISO(narkhnama.createdAt, true)}
                  </Card.Subtitle>

                  <Card.Link href={`narkhnamas/${narkhnama._id}`}>
                    View Narkhnama
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          ))
        : null}
    </div>
  );
}

export default NarkhnamasList;
