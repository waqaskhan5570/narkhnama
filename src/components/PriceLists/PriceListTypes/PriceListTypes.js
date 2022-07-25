import React from "react";
import "./PriceListTypes.css";
import TypeCard from "../TypeCard/TypeCard";
import Text from "../../UI/Typography/Text/Text";
import Title from "../../UI/Typography/Title/Title";

function PriceListTypes() {
  return (
    <div>
      {" "}
      <section className="intro-area ">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <Title color="red">Select Price List Category</Title>
              <div className="sub-heading">
                <Text>Click on the category that you want to visit /</Text>
                <br />
                <Text color="green" size="lg">
                  جس زمرے میں آپ جانا چاہتے ہیں اس پر کلک کریں۔
                </Text>
              </div>
            </div>
          </div>
          <div className="row">
            <TypeCard heading="Fruits/پھل" to="fruits" />
            <TypeCard heading="Vegetables/سبزیاں" to="vegetables" />
            <TypeCard heading="Poultry/مرغی" to="poultry" />
            <TypeCard heading="Meat/گوشت" to="meat" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default PriceListTypes;
