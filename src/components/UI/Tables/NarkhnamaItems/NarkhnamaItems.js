import React from "react";
import { Table } from "react-bootstrap";
import { createDateAndTimeFromISO } from "../../../../utils/helpers";
import Loader from "../../Loader/Loader";
import Title from "../../Typography/Title/Title";

function NarkhnamaItems({ narkhnama }) {
  console.log(narkhnama);
  return (
    <div>
      {narkhnama ? (
        <div>
          <div className="d-flex justify-content-between">
            <Title color="green">
              For Date:{createDateAndTimeFromISO(narkhnama.createdAt, true)}
            </Title>
            <Title color="red">Type:{narkhnama.type}</Title>
          </div>
          <Table striped bordered hover responsive="md">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>level 1/kg</th>
                <th>level 2/kg</th>
                <th>level 3/kg</th>
              </tr>
            </thead>
            <tbody>
              {narkhnama.priceList.map((item) => (
                <tr key={item.id}>
                  <td>{item?.id}</td>
                  <td>{item?.name}</td>
                  <td>{item?.level1}</td>
                  <td>{item?.level2}</td>
                  <td>{item?.level3}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default NarkhnamaItems;
