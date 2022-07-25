import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../../utils/constants";
import { toast } from "react-toastify";
import AdminLayout from "../../../components/UI/Layouts/AdminLayout/AdminLayout";

function Districts() {
  return <AdminLayout>Districts</AdminLayout>;
}

export default Districts;
