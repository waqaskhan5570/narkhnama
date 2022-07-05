import React from "react";
import ContainerLayout from "../../components/UI/Layouts/ContainerLayout/ContainerLayout";
import PriceListTypes from "../../components/PriceLists/PriceListTypes/PriceListTypes";

function PriceLists() {
  return (
    <ContainerLayout>
      <div className="main-content">
        <PriceListTypes />
      </div>
    </ContainerLayout>
  );
}

export default PriceLists;
