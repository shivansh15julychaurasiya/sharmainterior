import React, { useEffect, useState } from "react";
import {
  Container,
  Table,
  Button,
  Spinner,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardBody,
  Badge,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";

const API_BASE_URL = "https://sharmainteriorbackend1-production.up.railway.app";

const AdminLeadPanel = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [modal, setModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [leadsPerPage] = useState(5);

  const toggle = () => setModal(!modal);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE_URL}/api/leads`);
      setLeads(res.data);
    } catch (err) {
      console.error("Failed to fetch leads", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`${API_BASE_URL}/api/delete-quote/${deleteId}`);
      toggle();
      fetchLeads();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  // Pagination logic
  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead);
  const totalPages = Math.ceil(leads.length / leadsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container-fluid style={{ marginTop: "100px" }} className="mb-5">
      <Card className="shadow-lg border-0 mt-5 mb-5">
        <CardBody className="mt-5">
          <h2
            className="text-white text-center p-3 mb-4 rounded"
            style={{
              background: "linear-gradient(45deg, #6a11cb, #2575fc)",
              fontWeight: "bold",
            }}
          >
            Interior Leads Management
          </h2>

          {loading ? (
            <div className="text-center my-5">
              <Spinner color="primary" />
            </div>
          ) : (
            <>
              <Table
                bordered
                hover
                responsive
                className="shadow-sm text-center"
                style={{ borderRadius: "12px", overflow: "hidden" }}
              >
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Property</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentLeads.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="text-center py-4 text-muted">
                        No leads found. 🎯
                      </td>
                    </tr>
                  ) : (
                    currentLeads.map((lead, index) => (
                      <tr key={lead.id}>
                        <td>{indexOfFirstLead + index + 1}</td>
                        <td>{lead.name}</td>
                        <td>{lead.email}</td>
                        <td>{lead.phone}</td>
                        <td>
                          <Badge color="info">{lead.propertyName}</Badge>
                        </td>
                        <td>
                          <Button
                            color="danger"
                            size="sm"
                            className="rounded-circle"
                            onClick={() => {
                              setDeleteId(lead.id);
                              toggle();
                            }}
                            title="Delete Lead"
                          >
                            <FaTrashAlt />
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>

              {totalPages > 1 && (
                <Pagination className="justify-content-center">
                  {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem key={i} active={i + 1 === currentPage}>
                      <PaginationLink onClick={() => paginate(i + 1)}>
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                </Pagination>
              )}
            </>
          )}

          {/* Confirm Delete Modal */}
          <Modal isOpen={modal} toggle={toggle} centered>
            <ModalHeader toggle={toggle} className="bg-danger text-white">
              Delete Confirmation
            </ModalHeader>
            <ModalBody>
              <p className="text-center fs-5">
                Are you sure you want to delete this lead?
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={handleDelete}>
                Yes, Delete
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </CardBody>
      </Card>
    </Container-fluid>
  );
};

export default AdminLeadPanel;
