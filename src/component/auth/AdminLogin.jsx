import React, { useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:8080/api/admin/login", credentials);
      if (res.status === 200) {
        localStorage.setItem("role", "admin");
        navigate("/admin/leads");
      }
    } catch (err) {
      setError(err.response?.data || "Login failed");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundImage: `url("/images/image.png")`, // ✅ your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card style={{ width: "400px", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}>
        <CardBody>
          <CardTitle tag="h4" className="text-center mb-4">
            Admin Login
          </CardTitle>

          {error && <Alert color="danger">{error}</Alert>}

          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Enter username"
                value={credentials.username}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <Button color="primary" block type="submit">
              Login
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default AdminLogin;
