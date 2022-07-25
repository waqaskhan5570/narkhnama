import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../../utils/constants";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import AdminLayout from "../../../components/UI/Layouts/AdminLayout/AdminLayout";

function AddNarkhnama() {
  return <AdminLayout>AddPriceList</AdminLayout>;
}

export default AddNarkhnama;
