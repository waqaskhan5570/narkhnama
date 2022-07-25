import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../../utils/constants";
import { toast } from "react-toastify";
import AdminLayout from "../../../components/UI/Layouts/AdminLayout/AdminLayout";
import Title from "../../../components/UI/Typography/Title/Title";
import { useSelector } from "react-redux";
import MainInformation from "../../../components/AdminDashboard/NarkhnamaFields/MainInformation";
import { Button } from "react-bootstrap";
import PriceListDetails from "../../../components/AdminDashboard/NarkhnamaFields/PriceListDetails";
import FruitsList from "../../../data/fruits.json";
import VegList from "../../../data/Vegetable.json";
import otherItems from "../../../data/otherItems.json";
import poultry from "../../../data/poultry.json";
import meat from "../../../data/meat.json";
import { useNavigate } from "react-router-dom";

function AddNarkhnama() {
  const navigate = useNavigate();
  const [districts, setDistricts] = useState(null);
  const [narkhnamaData, setnarkhnamaData] = useState({
    mainInformation: {},
    priceList: {
      priceListItems: [],
    },
  });
  const [selectedType, setSelectedType] = useState(null);
  const [detailedList, setDetailedList] = useState();

  const inputChangeHandler = (stepInputs, event) => {
    setnarkhnamaData({
      ...narkhnamaData,
      [stepInputs]: {
        ...narkhnamaData[stepInputs],
        [event.target.name]: event.target.value,
      },
    });
  };

  const addNarkhnamaItem = (id, name) => {
    const { level1, level2, level3 } = narkhnamaData.priceList;

    let error = false;
    narkhnamaData.priceList.priceListItems.forEach((e) =>
      e.id === id ? (error = true) : error
    );

    if (error) {
      return toast.error(`Item ${name} already Added`);
    }
    if (level1 || level2 || level3) {
      const newItem = { id, name, level1, level2, level3 };

      setnarkhnamaData({
        ...narkhnamaData,
        priceList: {
          ...narkhnamaData.priceList,
          priceListItems: [...narkhnamaData.priceList.priceListItems, newItem],
          level1: "",
          level2: "",
          level3: "",
        },
      });
      toast.info(`Added ${name} successfully`);
    } else {
      toast.info("Atleast one level in required.");
    }

    // console.log(narkhnamaData.priceList.priceListItems);
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

  const addNarkhnama = async () => {
    const raw = {
      type: narkhnamaData.mainInformation.type,
      district: narkhnamaData.mainInformation.district,
      priceList: narkhnamaData.priceList.priceListItems,
    };

    await axios
      .post(`${BACKEND_URL}/narkhnamas`, raw, config)
      .then((res) => {
        toast.success(
          `Narkhnama for ${narkhnamaData.mainInformation.type} added`
        );
        navigate("/admin-panel/narkhnamas");
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };

  useEffect(() => {
    getDistricts();
  }, []);

  useEffect(() => {
    if (narkhnamaData.mainInformation.type === "fruits") {
      setSelectedType(FruitsList.fruits);
      setDetailedList(FruitsList.fruits);
    } else if (narkhnamaData.mainInformation.type === "vegetables") {
      setSelectedType(VegList.vegetable);
      setDetailedList(VegList.vegetable);
    } else if (narkhnamaData.mainInformation.type === "otherItems") {
      setSelectedType(otherItems.otherItems);
      setDetailedList(otherItems.otherItems);
    } else if (narkhnamaData.mainInformation.type === "poultry") {
      setSelectedType(poultry.poultry);
      setDetailedList(poultry.poultry);
    } else if (narkhnamaData.mainInformation.type === "meat") {
      setSelectedType(meat.meat);
      setDetailedList(meat.meat);
    }
  }, [narkhnamaData.mainInformation.type]);

  return (
    <AdminLayout>
      <main className="m-4">
        <Title color="green">Add New Narkhnama</Title>
        <div>
          <MainInformation
            districts={districts ? districts.data : null}
            inputs={narkhnamaData.mainInformation}
            inputChangeHandler={(e) => inputChangeHandler("mainInformation", e)}
          />
        </div>
        <div className="detail_pricelists">
          <PriceListDetails
            type={narkhnamaData.mainInformation.type}
            inputChangeHandler={(e) => inputChangeHandler("priceList", e)}
            list={selectedType ? detailedList : null}
            addNarkhnamaItem={addNarkhnamaItem}
          />
        </div>
        <div>
          <Button variant="primary" onClick={addNarkhnama}>
            Add Narkhnama
          </Button>
        </div>
      </main>
    </AdminLayout>
  );
}

export default AddNarkhnama;
