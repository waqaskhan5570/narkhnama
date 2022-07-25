import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../../utils/constants";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import AdminLayout from "../../../components/UI/Layouts/AdminLayout/AdminLayout";
import Title from "../../../components/UI/Typography/Title/Title";
import Text from "../../../components/UI/Typography/Text/Text";
import { createDateAndTimeFromISO } from "../../../utils/helpers";
import Loader from "../../../components/UI/Loader/Loader";
import PriceListDetails from "../../../components/AdminDashboard/NarkhnamaFields/PriceListDetails";

function EditNarkhnama() {
  const [narkhnama, setNarkhnama] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    try {
      axios
        .get(`${BACKEND_URL}/narkhnamas/${id}`)
        .then((res) => {
          setNarkhnama(res.data);
          setLoading(false);
        })
        .catch((err) => {
          toast.error(err.response.data);
          setLoading(false);
        });
    } catch (error) {
      toast.error("Error Occured while editing Narkhnama");
      setLoading(false);
    }
  }, [id]);

  console.log(narkhnama);

  return (
    <AdminLayout>
      <Title color="green">Edit Narkhnama</Title>
      {loading ? (
        <Loader />
      ) : narkhnama ? (
        <div className="m-4">
          <div className="d-flex justify-content-between">
            <Text>
              Narkhnama Date :
              <span>{createDateAndTimeFromISO(narkhnama.createdAt, true)}</span>
            </Text>
            <Text>
              Narkhnama Category :
              <span className="text-capitalize">{narkhnama.type}</span>
            </Text>
          </div>
          <main>
            <PriceListDetails list={narkhnama.priceList} />
          </main>
          <button className="btn btn-primary">Save Changes</button>
        </div>
      ) : null}
    </AdminLayout>
  );
}

export default EditNarkhnama;
