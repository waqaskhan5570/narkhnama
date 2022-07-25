import React from "react";
import Title from "../../UI/Typography/Title/Title";
import { Table } from "react-bootstrap";

function PriceListDetails({
  type,
  inputChangeHandler,
  list,
  addNarkhnamaItem,
}) {
  //   console.log(fruits.fruits);
  return (
    <div className="mt-3">
      <Title color="red">Narkhnama Items</Title>
      <p>{type}</p>
      <div className="mt-2">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Level 1</th>
              <th>Level 2</th>
              <th>Level 3</th>
            </tr>
          </thead>
          <tbody>
            {list
              ? list.map((fruit) => (
                  <tr key={fruit.id}>
                    <td>{fruit.id}</td>
                    <td>{fruit.name}</td>
                    <td>
                      <input
                        style={{ width: "50%" }}
                        type="number"
                        name="level1"
                        onChange={(e) => inputChangeHandler(e)}
                      />
                    </td>
                    <td>
                      <input
                        style={{ width: "50%" }}
                        type="number"
                        name="level2"
                        onChange={(e) => inputChangeHandler(e)}
                      />
                    </td>
                    <td>
                      <input
                        style={{ width: "50%" }}
                        type="number"
                        name="level3"
                        onChange={(e) => inputChangeHandler(e)}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-secondary"
                        onClick={() => addNarkhnamaItem(fruit.id, fruit.name)}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default PriceListDetails;
