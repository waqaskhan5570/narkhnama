import React from "react";
import { useParams } from "react-router-dom";
import ContainerLayout from "../../components/UI/Layouts/ContainerLayout/ContainerLayout";

function SinglePriceList() {
  const { listType } = useParams();
  return (
    <ContainerLayout>
      <div className="main-content">
        <h1>{listType}</h1>
      </div>
    </ContainerLayout>
  );
}

export default SinglePriceList;
