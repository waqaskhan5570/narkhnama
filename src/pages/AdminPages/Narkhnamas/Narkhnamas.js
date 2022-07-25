import React, { useState, useEffect } from "react";
import AdminLayout from "../../../components/UI/Layouts/AdminLayout/AdminLayout";
import { BACKEND_URL, TYPES } from "../../../utils/constants";
import axios from "axios";
import { toast } from "react-toastify";
import Filters from "../../../components/UI/Filters/Filters";
import Title from "../../../components/UI/Typography/Title/Title";
import Loader from "../../../components/UI/Loader/Loader";
import NarkhnamasList from "../../../components/AdminDashboard/NarkhnamasList/NarkhnamasList";
import Text from "../../../components/UI/Typography/Text/Text";
import { FaFilter } from "react-icons/fa";

function Narkhnamas() {
  const [districtFilter, setDistrictFilter] = useState("peshawar");
  const [typeFilter, setTypeFilter] = useState("fruits");
  const [narkhnamas, setNarkhnamas] = useState(null);
  const [filterShow, setFilterShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const filterHandler = () => {
    setFilterShow(!filterShow);
  };

  const getNarkhnamas = () => {
    try {
      setLoading(true);
      axios
        .get(
          `${BACKEND_URL}/districts/${districtFilter}/narkhnamas?type=${typeFilter}&limit=50`
        )
        .then((res) => {
          setNarkhnamas(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          toast.error(err.response.data);
          setLoading(false);
        });
    } catch (error) {
      toast.error("Error Occured while fetching Narkhnamas");
      setLoading(false);
    }
  };

  console.log(narkhnamas);

  useEffect(() => {
    getNarkhnamas();
  }, [districtFilter, typeFilter]);

  const btnStyle = {
    border: "none",
    backgroundColor: "#000",
    padding: "10px",
    color: "#fff",
    borderRadius: "5px",
  };

  return (
    <AdminLayout>
      <main>
        <Title align="center" color="red">
          Narkhnamas for District :{districtFilter}{" "}
        </Title>
        <Title align="center" color="green">
          Type: {typeFilter}
        </Title>
        <section className="">
          <button onClick={filterHandler} style={btnStyle}>
            Filter <FaFilter />
          </button>
          <div className="mt-4">
            {loading ? (
              <Loader />
            ) : narkhnamas ? (
              narkhnamas.length !== 0 ? (
                <NarkhnamasList narkhnamas={narkhnamas} />
              ) : (
                <Text
                  color="red"
                  align="center"
                >{`No Narkhnamas Exist for District ${districtFilter} and Type ${typeFilter}`}</Text>
              )
            ) : (
              <Text
                color="red"
                align="center"
              >{`No Narkhnamas Exist for District ${districtFilter} and Type ${typeFilter}`}</Text>
            )}
          </div>
        </section>
      </main>

      <Filters
        types={TYPES}
        districtFilter={districtFilter}
        setDistrictFilter={setDistrictFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        filterShow={filterShow}
        filterHandler={filterHandler}
      />
    </AdminLayout>
  );
}

export default Narkhnamas;
