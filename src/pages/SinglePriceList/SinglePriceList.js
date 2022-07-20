import React from "react";
import { useParams } from "react-router-dom";
import ContainerLayout from "../../components/UI/Layouts/ContainerLayout/ContainerLayout";
import Title from "../../components/UI/Typography/Title/Title";
import Text from "../../components/UI/Typography/Text/Text";
import NarkhnamaItems from "../../components/UI/Tables/NarkhnamaItems/NarkhnamaItems";
import { Link } from "react-router-dom";
import "./SinglePriceList.css";

function SinglePriceList() {
  const { listType, date } = useParams();
  return (
    <ContainerLayout>
      <div className="main-content">
        <div className="text-center">
          <Title color="red">
            Daily <span className="list_type">{listType}</span> Price List
          </Title>
          <Text color="green">For Date: {date}</Text>
        </div>
        <section className="price_list_table">
          <NarkhnamaItems />
        </section>
        <section className="previous_narkhnamas">
          <Title align="center" color="green">
            Previous Price Lists of{" "}
            <span className="list_type">{listType}</span>
          </Title>
          <hr />
          <div className="d-flex justify-content-between">
            <Link to="/price-lists/fruits/12-12-12">12/12/12</Link>
            <Link to="/price-lists/fruits/13-12-12">13/12/12</Link>
            <Link to="/price-lists/fruits/14-12-12">14/12/12</Link>
            <Link to="/price-lists/fruits/15-12-12">15/12/12</Link>
            <Link to="/price-lists/fruits/16-12-12">16/12/12</Link>
          </div>
        </section>
      </div>
    </ContainerLayout>
  );
}

export default SinglePriceList;
