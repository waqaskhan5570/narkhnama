import React, { useState, useEffect } from "react";
import NarkhnamaItems from "../../../components/UI/Tables/NarkhnamaItems/NarkhnamaItems";
import axios from "axios";
import { BACKEND_URL } from "../../../utils/constants";
import { toast } from "react-toastify";
import { useParams, useNavigate, Link } from "react-router-dom";
import Loader from "../../../components/UI/Loader/Loader";
import { FaBackspace, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import AdminLayout from "../../../components/UI/Layouts/AdminLayout/AdminLayout";
import { useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

function SingleNarkhnama() {
  const [narkhnama, setNarkhnama] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);

  let config = {
    headers: {
      Authorization: "Bearer " + user.token,
    },
  };

  const deleteNarkhnama = async (id) => {
    try {
      await axios
        .delete(`${BACKEND_URL}/narkhnamas/${id}`, config)
        .then((res) => {
          toast.info("Narkhnama Deleted Successfully");
          navigate("/admin-panel/narkhnamas");
        })
        .catch((err) => toast.error(err.response.data));
    } catch (error) {
      toast.error("Some Error occured while deleting Narkhnama");
    }
  };

  useEffect(() => {
    setLoading(true);
    try {
      axios.get(`${BACKEND_URL}/narkhnamas/${id}`).then((res) => {
        setNarkhnama(res.data);
        setLoading(false);
      });
    } catch (error) {
      toast.error("Error Occured while fetching single narkhnama");
      setLoading(false);
    }
    setLoading(false);
  }, [id]);

  return (
    <div>
      <AdminLayout>
        <main className="p-5">
          {loading ? (
            <Loader />
          ) : narkhnama ? (
            <NarkhnamaItems narkhnama={narkhnama} />
          ) : (
            "Not Found"
          )}
          <div className="d-flex justify-content-between">
            <button
              onClick={() => navigate(-1)}
              className="mt-3 btn btn-secondary"
            >
              Go Back
              <FaBackspace />
            </button>
            <Link
              to={`/admin-panel/narkhnamas/edit-narkhnama/${id}`}
              className="mt-3 btn btn-secondary"
            >
              Edit
              <FaPencilAlt />
            </Link>
            <button
              onClick={() => setShow(true)}
              className="mt-3 btn btn-secondary"
            >
              Delete
              <FaTrashAlt />
            </button>
          </div>
        </main>
      </AdminLayout>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => deleteNarkhnama(id)}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SingleNarkhnama;
