import React, { useState, useEffect } from "react";
import { Offcanvas } from "react-bootstrap";
import axios from "axios";
import { BACKEND_URL } from "../../../utils/constants";
import { toast } from "react-toastify";
import "./Filters.css";

function Filters(props) {
  const {
    districtFilter,
    setDistrictFilter,
    typeFilter,
    setTypeFilter,
    filterShow,
    filterHandler,
    types,
  } = props;
  const [districts, setDistricts] = useState(null);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/districts`)
      .then((res) => {
        setDistricts(res.data);
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  }, []);

  const handleDistrict = (slug) => {
    setDistrictFilter(slug);
  };

  const handleType = (type) => {
    setTypeFilter(type);
  };

  return (
    <Offcanvas show={filterShow} onHide={filterHandler}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <span className="title">Select District</span>
        </Offcanvas.Title>
        {/* <button className="apply_Filter_btn" onClick={applyFilters}>
          Change District
        </button> */}
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="filter_Wrapper">
          {/* category filters */}
          <div className="filter_item">
            <p className="filter_heading">Districts</p>
            <ul>
              {districts
                ? districts.data.map((district, index) => (
                    <li key={district._id}>
                      <label>
                        <input
                          type="radio"
                          name="districts"
                          value={district.slug}
                          checked={
                            districtFilter === district.slug ? true : false
                          }
                          onChange={() => handleDistrict(district.slug)}
                        />
                        {district.slug}
                      </label>
                    </li>
                  ))
                : null}
            </ul>
          </div>
          {/* type filter */}
          {types && (
            <div className="filter_item">
              <p className="filter_heading">Types</p>
              <ul>
                {types
                  ? types.map((type, index) => (
                      <li key={index}>
                        <label>
                          <input
                            type="radio"
                            name="types"
                            value={type}
                            checked={typeFilter === type ? true : false}
                            onChange={() => handleType(type)}
                          />
                          {type}
                        </label>
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          )}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Filters;
