import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ContainerLayout from "../../components/UI/Layouts/ContainerLayout/ContainerLayout";
import Title from "../../components/UI/Typography/Title/Title";
import NarkhnamaItems from "../../components/UI/Tables/NarkhnamaItems/NarkhnamaItems";
import "./SinglePriceList.css";
import axios from "axios";
import { BACKEND_URL } from "../../utils/constants";
import { toast } from "react-toastify";
import Loader from "../../components/UI/Loader/Loader";
import { createDateAndTimeFromISO } from "../../utils/helpers";
import Filters from "../../components/UI/Filters/Filters";
import { FaFilter } from "react-icons/fa";
import { Card } from "react-bootstrap";

function SinglePriceList() {
  const { listType, id } = useParams();
  const { pathname } = useLocation();
  const [narkhnamas, setNarkhnamas] = useState(null);
  const [district, setDistrict] = useState("charsadda");
  const [show, setShow] = useState(false);

  const filterHandler = () => {
    setShow(!show);
  };

  useEffect(() => {
    axios
      .get(
        `${BACKEND_URL}/districts/${district}/narkhnamas${
          !id ? `?type=${listType}` : `/${id}`
        }`
      )
      .then((res) => {
        setNarkhnamas(res.data);
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  }, [id, listType, pathname, district]);

  return (
    <ContainerLayout>
      {narkhnamas ? (
        <div className="main-content">
          <div className="text-center">
            <Title color="red">
              Daily <span className="list_type">{listType}</span> Price List
            </Title>
            <Title color="green" align="center">
              District: {district}
            </Title>
          </div>
          {id ? null : (
            <button className="filter_btn" onClick={filterHandler}>
              District
              <FaFilter />
            </button>
          )}
          {narkhnamas?.data?.length !== 0 || !narkhnamas ? (
            <section className="price_list_table">
              <NarkhnamaItems
                narkhnama={narkhnamas.data ? narkhnamas.data["0"] : narkhnamas}
                id={id}
              />
            </section>
          ) : (
            "Not Price List Exists"
          )}
          {id || narkhnamas.count < 2 ? null : (
            <section className="previous_narkhnamas">
              <Title align="center" color="green">
                Previous Price Lists of{" "}
                <span className="list_type">{listType}</span>
              </Title>
              <hr />
              <div className="other_priceLists">
                {narkhnamas.data.slice(1, 8).map((narkhnama) => (
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title className="text-capitalize">
                        {narkhnama.type}
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {createDateAndTimeFromISO(narkhnama.createdAt, true)}
                      </Card.Subtitle>

                      <Card.Link href={`${listType}/${narkhnama._id}`}>
                        View Narkhnama
                      </Card.Link>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </section>
          )}
          <Filters
            setDistrictFilter={setDistrict}
            districtFilter={district}
            filterShow={show}
            filterHandler={filterHandler}
          />
        </div>
      ) : (
        <Loader />
      )}
    </ContainerLayout>
  );
}

export default SinglePriceList;
