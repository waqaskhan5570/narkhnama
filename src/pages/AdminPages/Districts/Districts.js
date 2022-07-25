import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../../utils/constants";
import { toast } from "react-toastify";
import AdminLayout from "../../../components/UI/Layouts/AdminLayout/AdminLayout";
import Title from "../../../components/UI/Typography/Title/Title";
import Loader from "../../../components/UI/Loader/Loader";
import { Card, Button, Modal } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import UpdateDistrict from "../../../components/Modals/UpdateDistrict/UpdateDistrict";
import AddDistrict from "../../../components/Modals/AddDistrict/AddDistrict";

function Districts() {
  const [districts, setDistricts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deleteShow, setDeleteShow] = useState({
    slug: null,
    show: false,
  });
  const [addShow, setAddShow] = useState({
    title: null,
    show: false,
  });
  const [editShow, setEditShow] = useState({
    slug: null,
    show: false,
    title: null,
  });
  const [districtId, setdistrictId] = useState(null);
  const { user } = useSelector((state) => state.auth);

  let config = {
    headers: {
      Authorization: "Bearer " + user.token,
    },
  };

  const getDistricts = () => {
    setLoading(true);
    axios
      .get(`${BACKEND_URL}/districts?limit=200`)
      .then((res) => {
        setDistricts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data);
        setLoading(false);
      });
  };

  const deleteDistrict = async (slug) => {
    await axios
      .delete(`${BACKEND_URL}/districts/${slug}`, config)
      .then((res) => {
        toast.success(`District ${res.data.title} deleted`);
        setDeleteShow({
          slug: null,
          show: false,
        });
        getDistricts();
      })
      .catch((err) => {
        toast.error(err.response.data);
        setDeleteShow({
          ...deleteShow,
          show: false,
        });
      });
  };
  const updateDistrict = async (slug, title) => {
    await axios
      .put(`${BACKEND_URL}/districts/${slug}`, { title: title }, config)
      .then((res) => {
        toast.success(`District ${res.data.title} Updated.`);
        setEditShow({
          title: null,
          slug: null,
          show: false,
        });
        getDistricts();
      })
      .catch((err) => {
        toast.error(err.response.data);
        setEditShow({
          ...editShow,
          show: false,
        });
      });
  };

  const addDistrict = async (title) => {
    await axios
      .post(`${BACKEND_URL}/districts`, { title: title }, config)
      .then((res) => {
        toast.success(`District ${res.data.title} Added.`);
        setAddShow({
          title: null,
          show: false,
        });
        getDistricts();
      })
      .catch((err) => {
        toast.error(err.response.data);
        setEditShow({
          ...editShow,
          show: false,
        });
      });
  };

  useEffect(() => {
    getDistricts();
  }, []);

  console.log(districts);
  return (
    <AdminLayout>
      <Title color="green">Districts Section</Title>
      <div className="m-4">
        <button
          className="btn btn-success"
          onClick={() =>
            setAddShow({
              ...addShow,
              show: true,
            })
          }
        >
          Add District
        </button>
      </div>
      <section className="m-4">
        {loading ? (
          <Loader />
        ) : (
          <div className="row">
            {districts
              ? districts.data.map((district) => {
                  return (
                    <div className="col mt-3">
                      <Card
                        className="text-center"
                        key={district._id}
                        style={{ minWidth: "200px" }}
                      >
                        <Card.Body>
                          <Card.Title>
                            <span className="text-capitalize">
                              {district.title}
                            </span>
                          </Card.Title>
                          <Button
                            variant="secondary"
                            onClick={() =>
                              setEditShow({
                                slug: district.slug,
                                show: true,
                                title: district.title,
                              })
                            }
                          >
                            {" "}
                            Change Name
                          </Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                          <Button
                            variant="danger"
                            onClick={() =>
                              setDeleteShow({
                                slug: district.slug,
                                show: true,
                              })
                            }
                          >
                            Delete <FaTrash />{" "}
                          </Button>
                        </Card.Footer>
                      </Card>
                    </div>
                  );
                })
              : "No Districts Available"}
          </div>
        )}
        <Modal
          show={deleteShow.show}
          onHide={() =>
            setDeleteShow({
              ...deleteShow,
              show: false,
            })
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Deleting District</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this District?
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() =>
                setDeleteShow({
                  ...deleteShow,
                  show: false,
                })
              }
            >
              Close
            </Button>
            <Button
              variant="danger"
              onClick={() => deleteDistrict(deleteShow.slug)}
            >
              Confirm Delete
            </Button>
          </Modal.Footer>
        </Modal>
        <UpdateDistrict
          editShow={editShow}
          setEditShow={setEditShow}
          updateDistrict={updateDistrict}
        />
        <AddDistrict
          addShow={addShow}
          setAddShow={setAddShow}
          addDistrict={addDistrict}
        />
      </section>
    </AdminLayout>
  );
}

export default Districts;
