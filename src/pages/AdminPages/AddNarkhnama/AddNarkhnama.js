import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../../utils/constants";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import AdminLayout from "../../../components/UI/Layouts/AdminLayout/AdminLayout";
import Title from "../../../components/UI/Typography/Title/Title";
import { useSelector } from "react-redux";
import MainInformation from "../../../components/AdminDashboard/NarkhnamaFields/MainInformation";

function AddNarkhnama() {
  const [districts, setDistricts] = useState(null);
  const [narkhnamaData, setnarkhnamaData] = useState({
    information: {},
    priceLists: {},
  });

  const inputChangeHandler = (stepInputs, event) => {
    setnarkhnamaData({
      ...narkhnamaData,
      [stepInputs]: {
        ...narkhnamaData[stepInputs],
        [event.target.name]: event.target.value,
      },
    });

    console.log(narkhnamaData);
  };

  const { user } = useSelector((state) => state.auth);

  let config = {
    headers: {
      Authorization: "Bearer " + user.token,
    },
  };

  const getDistricts = () => {
    axios
      .get(`${BACKEND_URL}/districts?limit=200`)
      .then((res) => {
        setDistricts(res.data);
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };

  const addNarkhnama = () => {};

  useEffect(() => {
    getDistricts();
  }, []);

  return (
    <AdminLayout>
      <main className="m-2">
        <Title color="green">Add New Narkhnama</Title>
        <div className="m-4">
          <MainInformation
            districts={districts ? districts.data : null}
            inputs={narkhnamaData.information}
            inputChangeHandler={(e) => inputChangeHandler("information", e)}
          />
        </div>
      </main>
    </AdminLayout>
  );
}

export default AddNarkhnama;
