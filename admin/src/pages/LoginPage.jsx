import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../store/action/users";
import { toast } from "react-toastify";
import { Loading } from "../components";

const LoginPage = () => {
  const { loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser(form));
      navigate("/");
    } catch (err) {
      toast.error(err);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-4">
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Log In</Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={form?.email}
                      name="email"
                      autoComplete="off"
                      required
                      onChange={handleOnChange}
                    />
                  </Form.Group>
                  <Form.Group className="mt-2">
                    <Form.Label>Password</Form.Label>
                    <div className="input-group">
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        required
                        autoComplete="off"
                        name="password"
                        value={form?.password}
                        onChange={handleOnChange}
                      />
                      <Button
                        variant="outline-dark"
                        onClick={toggleShowPassword}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </div>
                  </Form.Group>
                  <div className="text-center mt-3">
                    <Button className="w-100" type="submit" variant="dark">
                      Log In
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
