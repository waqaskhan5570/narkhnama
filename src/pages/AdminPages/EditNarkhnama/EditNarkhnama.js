import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../../utils/constants";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import AdminLayout from "../../../components/UI/Layouts/AdminLayout/AdminLayout";

function EditNarkhnama() {
  const [narkhnama, setNarkhnama] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    try {
      axios
        .get(`${BACKEND_URL}/narkhnamas/${id}`)
        .then((res) => {
          setNarkhnama(res.data);
        })
        .catchh((err) => toast.error(err.response.data));
    } catch (error) {
      toast.error("Error Occured while editing Narkhnama");
    }
  }, [id]);

  console.log(narkhnama);

  return <AdminLayout>EditNarkhnama</AdminLayout>;
}

export default EditNarkhnama;
